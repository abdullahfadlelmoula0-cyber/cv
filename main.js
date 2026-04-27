<<<<<<< HEAD
import {
  createIcons,
  ArrowRight,
  Layout,
  Smartphone,
  Cpu,
  Eye,
  DollarSign,
  Bot,
  ShieldCheck,
  Mail,
  MapPin,
  Send,
  ExternalLink
} from 'lucide';

// Initialize Lucide icons
createIcons({
  icons: {
    ArrowRight,
    Layout,
    Smartphone,
    Cpu,
    Eye,
    DollarSign,
    Bot,
    ShieldCheck,
    Mail,
    MapPin,
    Send,
    ExternalLink
  }
});
=======
import { createIcons } from "lucide";

// Initialize all icons automatically from HTML [data-lucide]
createIcons();
>>>>>>> 35a3dcade84d379ca09a6b725a484c5cf4c30dcc

// Scroll Animation Observer
const observerOptions = {
  threshold: 0.1,
<<<<<<< HEAD
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
=======
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
>>>>>>> 35a3dcade84d379ca09a6b725a484c5cf4c30dcc
    }
  });
}, observerOptions);

<<<<<<< HEAD
document.querySelectorAll('.animate-on-scroll').forEach(el => {
=======
document.querySelectorAll(".animate-on-scroll").forEach((el) => {
>>>>>>> 35a3dcade84d379ca09a6b725a484c5cf4c30dcc
  observer.observe(el);
});

// Smooth scroll for nav links
<<<<<<< HEAD
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
=======
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
>>>>>>> 35a3dcade84d379ca09a6b725a484c5cf4c30dcc
      });
    }
  });
});

// Contact Form Submission (Mock)
<<<<<<< HEAD
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = contactForm.querySelector('button');
    const originalText = btn.innerHTML;

    btn.innerHTML = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = `
        Message Sent!
        <i data-lucide="check" class="w-5 h-5"></i>
      `;

      createIcons(); // مهم جدًا لإعادة تحميل الأيقونات
=======
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
>>>>>>> 35a3dcade84d379ca09a6b725a484c5cf4c30dcc

      contactForm.reset();

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        createIcons();
      }, 3000);
<<<<<<< HEAD

    }, 1500);
  });
}
=======
    }, 1500);
  });
}
>>>>>>> 35a3dcade84d379ca09a6b725a484c5cf4c30dcc
