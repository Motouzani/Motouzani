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
