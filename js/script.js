// Mobile hamburger menu toggle
(function () {
  const btn = document.querySelector('.header-menu-btn');
  const nav = document.getElementById('mobile-nav');
  const closeBtn = nav && nav.querySelector('.mobile-nav-close-btn');
  if (!btn || !nav) return;

  function openMenu() {
    nav.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    nav.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    nav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  // Close mobile nav when a link is clicked
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
})();

// Header: fade from transparent green gradient to white on scroll
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const onScroll = () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation to map
document.addEventListener('DOMContentLoaded', () => {
    const mapWrapper = document.querySelector('.map-wrapper');
    if (mapWrapper) {
        const iframe = mapWrapper.querySelector('iframe');
        if (iframe) {
            iframe.addEventListener('load', () => {
                mapWrapper.style.opacity = '1';
            });
            mapWrapper.style.opacity = '0.5';
            mapWrapper.style.transition = 'opacity 0.6s ease';
        }
    }
});

// Print functionality (optional - can be triggered with Ctrl+P)
window.addEventListener('beforeprint', () => {
    document.body.style.background = 'white';
});

window.addEventListener('afterprint', () => {
    document.body.style.background = 'linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 100%)';
});
