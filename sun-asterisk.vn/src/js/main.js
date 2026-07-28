import { loadComponent } from './components/loader.js';
import { initHeader } from './components/mobile-menu.js';
import { initCounter } from './components/counter.js';
import { initProjectSlider } from './components/slider.js';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', async () => {
  // 1. Load các shared HTML components trước tiên
  // Đường dẫn tương đối tính từ trang chạy (index.html đang ở src/)
  await Promise.all([
    loadComponent('#header-component', './components/header.html'),
    loadComponent('#footer-component', './components/footer.html')
  ]);

  // 2. Sau khi components đã được chèn vào DOM, khởi tạo các hiệu ứng tương tác
  initHeader();
  
  // Khởi tạo các phần khác trên trang chủ
  initCounter();
  initProjectSlider();
});
