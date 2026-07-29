import { $, on } from '../utils/dom.js';

export const initHeader = () => {
  const header = $('header');
  const menuBtn = $('#menu-toggle');
  const mobileMenu = $('#mobile-menu');

  if (!header) return;

  // 1. Tự động nhận diện trang hiện tại và làm nổi bật (Highlight active tab)
  highlightActiveMenuItem(header);

  // 2. Sticky Header effect on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('shadow-md');
    } else {
      header.classList.remove('shadow-md');
    }
  });

  // 3. Mobile Menu Toggle
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

function highlightActiveMenuItem(header) {
  const path = window.location.pathname.toLowerCase();

  const isAboutPage = path.includes('/about') || path.includes('/ve-chung-toi');
  const isProjectsPage = path.includes('/du-an') || path.includes('/projects');
  const isCareerPage = path.includes('/co-hoi-nghe-nghiep') || path.includes('/careers') || path.includes('/jobs');
  const isEnvPage = path.includes('/moi-truong-lam-viec') || path.includes('/environment');
  const isNewsPage = path.includes('/tin-tuc') || path.includes('/news');
  const isHomePage = !isAboutPage && !isProjectsPage && !isCareerPage && !isEnvPage && !isNewsPage;

  // Desktop Nav Items
  const navLinks = header.querySelectorAll('nav a');
  navLinks.forEach(link => {
    const text = link.textContent.trim().toLowerCase();
    const span = link.querySelector('span');

    let isActive = false;
    if (isHomePage && text.includes('trang chủ')) isActive = true;
    if (isAboutPage && (text.includes('về chúng tôi') || text.includes('about us'))) isActive = true;
    if (isProjectsPage && (text.includes('dự án') || text.includes('projects'))) isActive = true;
    if (isCareerPage && (text.includes('cơ hội nghề nghiệp') || text.includes('career'))) isActive = true;
    if (isEnvPage && (text.includes('môi trường làm việc') || text.includes('environment'))) isActive = true;
    if (isNewsPage && (text.includes('tin tức') || text.includes('news'))) isActive = true;

    if (isActive) {
      link.classList.remove('text-brand-body');
      link.classList.add('text-brand-primary', 'font-medium');
      if (span) {
        span.classList.remove('opacity-0', '-translate-y-[10px]');
        span.classList.add('opacity-100', 'translate-y-0');
      }
    } else {
      link.classList.remove('text-brand-primary', 'font-medium');
      link.classList.add('text-brand-body');
      if (span) {
        span.classList.remove('opacity-100', 'translate-y-0');
        span.classList.add('opacity-0', '-translate-y-[10px]');
      }
    }
  });

  // Mobile Menu Items
  const mobileLinks = header.querySelectorAll('#mobile-menu a');
  mobileLinks.forEach(link => {
    const text = link.textContent.trim().toLowerCase();

    let isActive = false;
    if (isHomePage && text.includes('trang chủ')) isActive = true;
    if (isAboutPage && (text.includes('về chúng tôi') || text.includes('about us'))) isActive = true;
    if (isProjectsPage && (text.includes('dự án') || text.includes('projects'))) isActive = true;
    if (isCareerPage && (text.includes('cơ hội nghề nghiệp') || text.includes('career'))) isActive = true;
    if (isEnvPage && (text.includes('môi trường làm việc') || text.includes('environment'))) isActive = true;
    if (isNewsPage && (text.includes('tin tức') || text.includes('news'))) isActive = true;

    if (isActive) {
      link.className = 'block font-normal text-white bg-brand-primary px-6 py-4';
    } else {
      link.className = 'block font-normal text-brand-heading hover:bg-gray-50 px-6 py-4 border-b border-gray-50';
    }
  });
}
