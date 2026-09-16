
/* MENU MOBILE */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('show'));
});

/* FILTER TEMPLATE */
const filters = document.querySelectorAll('.filter');
const templates = document.querySelectorAll('.template-card');

filters.forEach(filter => {
  filter.addEventListener('click', () => {
    filters.forEach(item => item.classList.remove('active'));
    filter.classList.add('active');

    const category = filter.dataset.filter;

    templates.forEach(template => {
      const isVisible = category === 'all' ||
        template.dataset.category === category;

      template.style.display = isVisible ? 'block' : 'none';
    });
  });
});

/* SCROLL REVEAL */
const revealElements = document.querySelectorAll(
  '.section-heading, .service-card, .template-card, .about-text, .about-values, .faq-list, .contact-section'
);

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-show');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach((element) => {
    element.classList.add('reveal');
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add('reveal-show');
  });
}