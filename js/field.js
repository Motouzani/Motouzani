/* Het levende veld: één deeltjessysteem dat per hoofdstuk van gedrag verandert.
   Modes: calm (hero) -> spray (de vloer) -> flow (het DMS) -> grid (de code) -> calm (rest).
   Mode-parameters worden extern geblend via window.MOTO_FIELD.setBlend(). */
(() => {
  const canvas = document.getElementById("field");
  if (!canvas) return;

  const prefersReduced =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const ctx = canvas.getContext("2d");
  const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
  const COUNT = window.innerWidth < 700 ? 550 : 1200;

  let W = 0;
  let H = 0;
  let particles = [];
  let mouseX = 0.5;
  let mouseY = 0.5;
  let running = true;

  /* Mode-parameters:
     turbulence: chaos in beweging
     laneForce: trek naar horizontale banen (flow)
     gridForce: trek naar rasterpunten (grid)
     drift: basissnelheid
     hue-mix via colorMix (0 = diep groen, 1 = fel groen) */
  const MODES = {
    calm: { turbulence: 0.35, laneForce: 0, gridForce: 0, drift: 0.18, colorMix: 0.25, alpha: 0.5 },
    spray: { turbulence: 1.6, laneForce: 0, gridForce: 0, drift: 0.9, colorMix: 0.55, alpha: 0.75 },
    flow: { turbulence: 0.12, laneForce: 1, gridForce: 0, drift: 1.15, colorMix: 0.4, alpha: 0.65 },
    grid: { turbulence: 0.08, laneForce: 0, gridForce: 1, drift: 0.3, colorMix: 0.7, alpha: 0.8 },
  };

  const current = { ...MODES.calm };

  const resize = () => {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  };

  const rand = (min, max) => min + Math.random() * (max - min);

  const initParticles = () => {
    particles = Array.from({ length: COUNT }, () => ({
      x: rand(0, 1),
      y: rand(0, 1),
      vx: rand(-0.001, 0.001),
      vy: rand(-0.001, 0.001),
      size: rand(0.6, 1.8),
      phase: rand(0, Math.PI * 2),
      lane: Math.floor(rand(0, 14)),
      gx: 0,
      gy: 0,
    }));
    const cols = 26;
    particles.forEach((p, i) => {
      p.gx = ((i % cols) + 0.5) / cols;
      p.gy = (Math.floor(i / cols) % cols) / cols + 0.02;
    });
  };

  /* simpele pseudo-noise op basis van sinussen: goedkoop en loopt naadloos */
  const noise = (x, y, t) =>
    Math.sin(x * 6.1 + t * 0.4) * 0.5 +
    Math.sin(y * 8.3 - t * 0.3) * 0.3 +
    Math.sin((x + y) * 4.7 + t * 0.6) * 0.2;

  let t = 0;

  const step = () => {
    if (!running) return;
    t += 0.016;
    ctx.clearRect(0, 0, W, H);

    const cm = current.colorMix;
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    /* blueprint: neutraal grijs dat naar rolex-groen mengt naarmate het systeem 'aanslaat' */
    const r = isLight ? Math.round(92 + (11 - 92) * cm) : Math.round(138 + (55 - 138) * cm);
    const g = isLight ? Math.round(98 + (90 - 98) * cm) : Math.round(146 + (200 - 146) * cm);
    const b = isLight ? Math.round(104 + (60 - 104) * cm) : Math.round(152 + (143 - 152) * cm);

    for (const p of particles) {
      const angle = noise(p.x, p.y, t + p.phase) * Math.PI * 2;

      /* turbulente kracht */
      p.vx += Math.cos(angle) * 0.00012 * current.turbulence;
      p.vy += Math.sin(angle) * 0.00012 * current.turbulence;

      /* laminaire banen (flow-modus) */
      if (current.laneForce > 0) {
        const laneY = (p.lane + 0.5) / 14;
        p.vy += (laneY - p.y) * 0.004 * current.laneForce;
        p.vx += 0.00035 * current.laneForce;
      }

      /* rasterpunten (grid-modus) */
      if (current.gridForce > 0) {
        p.vx += (p.gx - p.x) * 0.0045 * current.gridForce;
        p.vy += (p.gy - p.y) * 0.0045 * current.gridForce;
      }

      /* subtiele muisafstoting */
      const dx = p.x - mouseX;
      const dy = p.y - mouseY;
      const distSq = dx * dx + dy * dy;
      if (distSq < 0.012) {
        const f = (0.012 - distSq) * 0.02;
        p.vx += dx * f;
        p.vy += dy * f;
      }

      p.vx *= 0.965;
      p.vy *= 0.965;
      p.x += p.vx * current.drift * 2.2;
      p.y += p.vy * current.drift * 2.2;

      if (p.x < -0.02) p.x = 1.02;
      if (p.x > 1.02) p.x = -0.02;
      if (p.y < -0.02) p.y = 1.02;
      if (p.y > 1.02) p.y = -0.02;

      const tw = 0.55 + 0.45 * Math.sin(t * 2 + p.phase);
      ctx.globalAlpha = current.alpha * tw * 0.5;
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.beginPath();
      ctx.arc(p.x * W, p.y * H, p.size, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(step);
  };

  /* Externe API: blend tussen twee modes met factor 0..1 */
  const setBlend = (fromMode, toMode, f) => {
    const a = MODES[fromMode] || MODES.calm;
    const bMode = MODES[toMode] || MODES.calm;
    for (const key of Object.keys(current)) {
      current[key] = a[key] + (bMode[key] - a[key]) * f;
    }
  };

  const setMode = (mode) => setBlend(mode, mode, 0);

  window.MOTO_FIELD = { setBlend, setMode };

  if (prefersReduced) {
    /* statisch veld: één keer tekenen, geen loop */
    resize();
    initParticles();
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "rgb(120,126,132)";
    for (const p of particles) {
      ctx.globalAlpha = 0.18;
      ctx.beginPath();
      ctx.arc(p.x * W, p.y * H, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    window.MOTO_FIELD.setBlend = () => {};
    window.MOTO_FIELD.setMode = () => {};
    return;
  }

  resize();
  initParticles();
  requestAnimationFrame(step);

  window.addEventListener("resize", () => {
    resize();
  });

  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX / W;
    mouseY = event.clientY / H;
  });

  document.addEventListener("visibilitychange", () => {
    const wasRunning = running;
    running = !document.hidden;
    if (running && !wasRunning) requestAnimationFrame(step);
  });
})();
