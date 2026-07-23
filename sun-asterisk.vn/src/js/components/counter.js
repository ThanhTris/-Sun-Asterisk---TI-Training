/**
 * Animated Counter Component using IntersectionObserver
 */
import { $, $$ } from '../utils/dom.js';

export function initCounter() {
  const statNumbers = $$('.stat-number');
  if (statNumbers.length === 0) return;

  const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        element.innerHTML = end; // Ensure exact end value is set
      }
    };
    window.requestAnimationFrame(step);
  };

  const observerOptions = {
    root: null,
    threshold: 0.1, // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetElement = entry.target;
        const targetValue = parseInt(targetElement.getAttribute('data-target'), 10);
        if (!isNaN(targetValue)) {
          animateValue(targetElement, 0, targetValue, 1500); // 1.5 seconds animation
          observer.unobserve(targetElement); // Animate only once
        }
      }
    });
  }, observerOptions);

  statNumbers.forEach(num => observer.observe(num));
}
