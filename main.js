// -----------------------------
// 1. FOOTER YEAR
// -----------------------------
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// -----------------------------
// 2. MOBILE NAV TOGGLE
// -----------------------------
const mobileBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

if (mobileBtn && mobileNav) {
  mobileBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
  });

  document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("show");
    });
  });
}

// -----------------------------
// 3. REVEAL CONTACT SECTION AFTER ACCEPTANCE  ✅ FIXED
// -----------------------------
const acceptBtn = document.getElementById("acceptBtn");
const contactSection = document.getElementById("contact");

if (acceptBtn && contactSection) {
  acceptBtn.addEventListener("click", () => {
    // ✅ Remove class-based hiding
    contactSection.classList.remove("hidden");

    // ✅ Remove inline hiding (your HTML still has style="display:none")
    contactSection.style.display = "block";

    // ✅ Smooth scroll into view
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
}

// -----------------------------
// 4. SMOOTH SCROLL FOR ALL INTERNAL LINKS
// -----------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// -----------------------------
// 5. SCROLL-TO-TOP BUTTON
// -----------------------------
const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// -----------------------------
// 6. REVEAL EMAIL ON BUTTON CLICK
// -----------------------------
const revealEmailBtn = document.getElementById("revealEmailBtn");
const emailReveal = document.getElementById("emailReveal");

if (revealEmailBtn && emailReveal) {
  revealEmailBtn.addEventListener("click", () => {
    emailReveal.style.display = "block";
  });
}
