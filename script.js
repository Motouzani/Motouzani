document.documentElement.classList.add("js");

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const themeToggle = document.querySelector(".theme-toggle");
const rootEl = document.documentElement;
const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

if (storedTheme) {
  rootEl.setAttribute("data-theme", storedTheme);
} else if (prefersDark) {
  rootEl.setAttribute("data-theme", "dark");
}

const updateThemeIcon = () => {
  const icon = document.querySelector(".theme-icon");
  if (!icon) return;
  const current = rootEl.getAttribute("data-theme");
  icon.textContent = current === "dark" ? "☾" : "◐";
};

updateThemeIcon();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = rootEl.getAttribute("data-theme") === "dark";
    const next = isDark ? "light" : "dark";
    rootEl.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeIcon();
  });
}

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const parallaxTargets = document.querySelectorAll(".parallax");
const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (parallaxTargets.length && !prefersReduced) {
  const handleMove = (event) => {
    const { innerWidth, innerHeight } = window;
    const x = (event.clientX / innerWidth - 0.5) * 2;
    const y = (event.clientY / innerHeight - 0.5) * 2;

    parallaxTargets.forEach((el) => {
      const speed = Number(el.dataset.speed || 2);
      const translateX = x * speed;
      const translateY = y * speed;
      el.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });
  };

  window.addEventListener("mousemove", handleMove);
  window.addEventListener("mouseleave", () => {
    parallaxTargets.forEach((el) => {
      el.style.transform = "translate(0px, 0px)";
    });
  });
}

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

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
    submitBtn.textContent = "Versturen…";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" },
      });
      const data = await response.json().catch(() => ({}));

      if (response.ok && data.ok) {
        showStatus("Bedankt! Je aanvraag is verstuurd. Je hoort snel van me.", true);
        contactForm.reset();
      } else {
        showStatus(data.error || "Versturen mislukte. Mail me gerust rechtstreeks op mo@digitalfarmers.be.", false);
      }
    } catch (error) {
      showStatus("Versturen mislukte. Mail me gerust rechtstreeks op mo@digitalfarmers.be.", false);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Verstuur aanvraag";
    }
  });
}

const logoMarquee = document.querySelectorAll(".logo-track");
if (logoMarquee.length && !prefersReduced) {
  logoMarquee.forEach((track, index) => {
    track.style.animationDuration = `${16 + index * 4}s`;
  });
}
