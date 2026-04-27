import { createIcons } from "lucide";

// Initialize all icons automatically from HTML [data-lucide]
createIcons();

// Scroll Animation Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".animate-on-scroll").forEach((el) => {
  observer.observe(el);
});

// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Contact Form Submission (Mock)
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const btn = contactForm.querySelector("button");
    const originalText = btn.innerHTML;

    btn.innerHTML = "Sending...";
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = 'Message Sent! <i data-lucide="check"></i>';
      createIcons(); // re-render icons

      contactForm.reset();

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        createIcons();
      }, 3000);
    }, 1500);
  });
}
