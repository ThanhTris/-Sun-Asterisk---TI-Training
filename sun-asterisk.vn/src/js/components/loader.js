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
  } catch (error) {
    console.error(error);
    placeholder.innerHTML = `<div class="text-red-500 p-4 border border-red-200 rounded">Lỗi tải component: ${componentPath}</div>`;
  }
};
