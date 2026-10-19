document.addEventListener("DOMContentLoaded", () => {
  const config = window.PORTFOLIO_CONFIG || {};
  const name = config.name || "Your Name";
  document.querySelectorAll("[data-name]").forEach(el => el.textContent = name);
  document.title = `${name} — Web Developer & Digital Solutions`;
  document.getElementById("year").textContent = new Date().getFullYear();

  const email = (config.email || "").trim();
  const whatsapp = (config.whatsapp || "").replace(/\D/g, "");
  const emailLink = document.getElementById("email-link");
  const whatsappLink = document.getElementById("whatsapp-link");

  if (email && !email.includes("example.com")) {
    emailLink.href = `mailto:${email}?subject=${encodeURIComponent("Website project enquiry")}&body=${encodeURIComponent("Hi,\\n\\nI'd like to discuss a website project.\\n\\nProject overview:\\nBudget range:\\nDesired timeline:\\n\\nThank you.")}`;
  } else {
    emailLink.href = "#contact";
    emailLink.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Please add your email address in site-config.js before publishing.");
    });
  }

  if (whatsapp && !whatsapp.includes("X") && whatsapp.length >= 10) {
    whatsappLink.href = `https://wa.me/${whatsapp}?text=${encodeURIComponent("Hi! I'd like to discuss a website project.")}`;
  } else {
    whatsappLink.href = "#contact";
    whatsappLink.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Please add your WhatsApp number in site-config.js before publishing.");
    });
  }

  if (config.spritivaUrl && /^https?:\/\//i.test(config.spritivaUrl)) {
    const spritivaCard = document.querySelector(".visual-spritiva");
    if (spritivaCard) {
      spritivaCard.href = config.spritivaUrl;
      spritivaCard.target = "_blank";
      spritivaCard.rel = "noopener noreferrer";
      spritivaCard.setAttribute("aria-label", "Visit SPRITIVA website");
      const link = spritivaCard.closest(".project-card").querySelector(".project-link");
      link.href = config.spritivaUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.innerHTML = 'Explore project <span>↗</span>';
    }
  }

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-header nav");
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    toggle.textContent = isOpen ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
    toggle.textContent = "☰";
  }));
});