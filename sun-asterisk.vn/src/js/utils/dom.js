// DOM Helper Utilities

// Select a single element matching selector
export const $ = (selector, context = document) => {
  return context.querySelector(selector);
};

// Select all elements matching selector
export const $$ = (selector, context = document) => {
  return context.querySelectorAll(selector);
};

// Register an event listener
export const on = (element, event, handler) => {
  if (element) {
    element.addEventListener(event, handler);
  }
};

// Toggle active class on elements
export const toggleClass = (element, className) => {
  if (element) {
    element.classList.toggle(className);
  }
};
