/**
 * DOM Helper Utilities
 */

/**
 * Select a single element matching selector
 * @param {string} selector 
 * @param {HTMLElement} context 
 * @returns {HTMLElement|null}
 */
export const $ = (selector, context = document) => {
  return context.querySelector(selector);
};

/**
 * Select all elements matching selector
 * @param {string} selector 
 * @param {HTMLElement} context 
 * @returns {NodeList}
 */
export const $$ = (selector, context = document) => {
  return context.querySelectorAll(selector);
};

/**
 * Register an event listener
 * @param {HTMLElement} element 
 * @param {string} event 
 * @param {Function} handler 
 */
export const on = (element, event, handler) => {
  if (element) {
    element.addEventListener(event, handler);
  }
};

/**
 * Toggle active class on elements
 * @param {HTMLElement} element 
 * @param {string} className 
 */
export const toggleClass = (element, className) => {
  if (element) {
    element.classList.toggle(className);
  }
};
