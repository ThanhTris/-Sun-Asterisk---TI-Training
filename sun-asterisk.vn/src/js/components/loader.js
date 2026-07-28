import { $ } from '../utils/dom.js';

/**
 * Tải file HTML component và chèn vào selector tương ứng
 * @param {string} selector - Selector của thẻ giữ chỗ (placeholder)
 * @param {string} componentPath - Đường dẫn tương đối đến file HTML component
 * @returns {Promise<void>}
 */
export const loadComponent = async (selector, componentPath) => {
  const placeholder = $(selector);
  if (!placeholder) return;

  try {
    const response = await fetch(componentPath);
    if (!response.ok) {
      throw new Error(`Không thể tải component: ${componentPath}`);
    }
    const htmlContent = await response.text();
    placeholder.innerHTML = htmlContent;

    // Tự động điều chỉnh đường dẫn hình ảnh & liên kết phù hợp với vị trí trang hiện tại
    adjustComponentUrls(placeholder);
  } catch (error) {
    console.error(error);
    placeholder.innerHTML = `<div class="text-red-500 p-4 border border-red-200 rounded">Lỗi tải component: ${componentPath}</div>`;
  }
};

/**
 * Điều chỉnh đường dẫn tương đối (img, a) theo vị trí trang hiện tại
 */
function adjustComponentUrls(container) {
  const path = window.location.pathname.toLowerCase();
  
  // Xác định độ sâu trang hiện tại (trang chủ hay trang con trong /pages/...)
  const isSubPage = path.includes('/pages/');
  const rootPrefix = isSubPage ? '../../' : './';

  // Điều chỉnh src của hình ảnh
  const images = container.querySelectorAll('img');
  images.forEach(img => {
    const rawSrc = img.getAttribute('src');
    if (!rawSrc || rawSrc.startsWith('http') || rawSrc.startsWith('data:')) return;
    
    // Đưa đường dẫn về dạng chuẩn không phụ thuộc vị trí gốc (assets/images/...)
    let cleanPath = rawSrc.replace(/^(\.\/|\/)+/, '');
    if (cleanPath.startsWith('src/')) {
      cleanPath = cleanPath.replace(/^src\//, '');
    }
    img.src = rootPrefix + cleanPath;
  });

  // Điều chỉnh href của các liên kết navigation
  const links = container.querySelectorAll('a');
  links.forEach(a => {
    const rawHref = a.getAttribute('href');
    if (!rawHref || rawHref.startsWith('http') || rawHref.startsWith('#') || rawHref.startsWith('mailto:')) return;

    let cleanPath = rawHref.replace(/^(\.\/|\/)+/, '');
    if (cleanPath.startsWith('src/')) {
      cleanPath = cleanPath.replace(/^src\//, '');
    }
    a.href = rootPrefix + cleanPath;
  });
}
