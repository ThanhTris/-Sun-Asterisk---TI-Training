import { initHeader } from './components/mobile-menu.js';
import { initCounter } from './components/counter.js';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Header
  initHeader();
  
  // Initialize Stats Counter
  initCounter();
});
