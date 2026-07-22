import { $, on } from '../utils/dom.js';

export const initHeader = () => {
  const header = $('header');
  const menuBtn = $('#menu-toggle');
  const mobileMenu = $('#mobile-menu');

  if (!header) return;

  // 1. Sticky Header effect on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('shadow-md');
    } else {
      header.classList.remove('shadow-md');
    }
  });

  // 2. Mobile Menu Toggle
  if (menuBtn && mobileMenu) {
    on(menuBtn, 'click', () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');

      // Toggle SVG Icons (Hamburger <-> Close)
      const hamburgerIcon = $('#hamburger-icon');
      const closeIcon = $('#close-icon');
      if (hamburgerIcon && closeIcon) {
        hamburgerIcon.classList.toggle('hidden');
        hamburgerIcon.classList.toggle('block');
        closeIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('block');
      }
    });
  }
};
