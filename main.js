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
  LinkedinIcon,
  GithubIcon,
  Send,
  ExternalLink,
  TwitterIcon
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
    LinkedinIcon,
    GithubIcon,
    Send,
    ExternalLink,
    TwitterIcon
  }
});

// Scroll Animation Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// Smooth scroll for nav links
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
      });
    }
  });
});

// Contact Form Submission (Mock)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = 'Sending...';
    btn.disabled = true;
    
    setTimeout(() => {
      btn.innerHTML = 'Message Sent! <i data-lucide="check" class="w-5 h-5"></i>';
      
      // Re-initialize icons
      createIcons({
        icons: { Send }
      });

      contactForm.reset();
      
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;

        createIcons({
          icons: { Send }
        });
      }, 3000);

    }, 1500);
  });
}