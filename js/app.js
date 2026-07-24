/* Choreografie: boot-sequence, veld-modes per hoofdstuk, reveals, counters, formulier. */
(() => {
  document.documentElement.classList.add("js");

  const prefersReduced =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- thema (dark default, light optioneel) ---------- */
  const rootEl = document.documentElement;
  const storedTheme = localStorage.getItem("theme");
  const prefersLight =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (storedTheme === "light" || (!storedTheme && prefersLight)) {
    rootEl.setAttribute("data-theme", "light");
  }

  const themeToggle = document.querySelector(".theme-toggle");
  const updateThemeIcon = () => {
    const icon = document.querySelector(".theme-icon");
    if (icon) icon.textContent = rootEl.getAttribute("data-theme") === "light" ? "☀" : "◐";
  };
  updateThemeIcon();
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isLight = rootEl.getAttribute("data-theme") === "light";
      if (isLight) {
        rootEl.removeAttribute("data-theme");
        localStorage.setItem("theme", "dark");
      } else {
        rootEl.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
      updateThemeIcon();
    });
  }

  /* ---------- boot-sequence (één keer per sessie) ---------- */
  const boot = document.getElementById("boot");
  const runBoot = boot && !sessionStorage.getItem("booted") && !prefersReduced;

  const finishBoot = () => {
    if (boot) boot.classList.add("done");
    sessionStorage.setItem("booted", "1");
  };

  if (runBoot) {
    const lines = boot.querySelectorAll(".boot-line");
    lines.forEach((line, i) => {
      setTimeout(() => {
        line.style.transition = "opacity 0.25s ease, transform 0.25s ease";
        line.style.opacity = "1";
        line.style.transform = "translateY(0)";
      }, 180 + i * 210);
    });
    setTimeout(finishBoot, 180 + lines.length * 210 + 500);
    boot.addEventListener("click", finishBoot);
  } else if (boot) {
    boot.classList.add("done");
  }

  /* ---------- GSAP choreografie ---------- */
  const initGsap = () => {
    if (!window.gsap || !window.ScrollTrigger) return false;
    gsap.registerPlugin(ScrollTrigger);

    /* reveals */
    const revealTargets = [
      ".section-head",
      ".reg-row",
      ".reg-foot",
      ".loop-visual",
      ".loop-steps li",
      ".proof-card",
      ".proof-claim blockquote",
      ".contact-copy",
      ".contact-form",
    ];
    document.querySelectorAll(revealTargets.join(",")).forEach((el) => {
      el.setAttribute("data-reveal", "");
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "expo.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      });
    });

    /* hoofdstuk-inhoud: subtiele parallax binnen sticky */
    document.querySelectorAll(".chapter").forEach((chapter) => {
      const inner = chapter.querySelector(".chapter-sticky");
      gsap.fromTo(
        inner,
        { opacity: 0.55 },
        {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: chapter,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    });

    /* veld-modes: blend per hoofdstuk via scrub */
    if (window.MOTO_FIELD) {
      const order = [
        { id: "#ch-1", from: "calm", to: "spray" },
        { id: "#ch-2", from: "spray", to: "flow" },
        { id: "#ch-3", from: "flow", to: "grid" },
        { id: "#farm", from: "grid", to: "calm" },
      ];
      order.forEach(({ id, from, to }) => {
        const el = document.querySelector(id);
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          end: "top 10%",
          scrub: true,
          onUpdate: (self) => window.MOTO_FIELD.setBlend(from, to, self.progress),
        });
      });
    }

    /* counters */
    document.querySelectorAll("[data-count]").forEach((el) => {
      const target = Number(el.dataset.count);
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 1.6,
        ease: "expo.out",
        scrollTrigger: { trigger: el, start: "top 90%" },
        onUpdate: () => {
          el.textContent = String(Math.round(obj.val));
        },
      });
    });

    return true;
  };

  /* fallback zonder GSAP (CDN faalt): alles zichtbaar, veld op calm */
  const initFallback = () => {
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    document.querySelectorAll("[data-count]").forEach((el) => {
      el.textContent = el.dataset.count;
    });
    if (window.MOTO_FIELD) window.MOTO_FIELD.setMode("calm");
  };

  window.addEventListener("load", () => {
    if (!initGsap()) initFallback();
  });

  /* ---------- formulier ---------- */
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  const t = (key) => (window.MOTO_I18N ? window.MOTO_I18N.t(key) : key);

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const showStatus = (message, isOk) => {
        formStatus.textContent = message;
        formStatus.hidden = false;
        formStatus.classList.toggle("ok", isOk);
        formStatus.classList.toggle("err", !isOk);
      };

      submitBtn.disabled = true;
      submitBtn.textContent = t("form.sending");

      try {
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: new FormData(contactForm),
          headers: { Accept: "application/json" },
        });
        const data = await response.json().catch(() => ({}));

        if (response.ok && data.ok) {
          showStatus(t("form.ok"), true);
          contactForm.reset();
        } else {
          showStatus(data.error || t("form.err"), false);
        }
      } catch (error) {
        showStatus(t("form.err"), false);
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = t("form.send");
      }
    });
  }
})();
