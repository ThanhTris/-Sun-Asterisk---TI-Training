// Client-side VI/EN language switcher: fetches both dictionaries once,
// swaps text/attributes via data-i18n* attributes, persists choice in localStorage.

const STORAGE_KEY = 'sunasterisk_lang';
const DEFAULT_LANG = 'vi';
const SUPPORTED_LANGS = ['vi', 'en'];

const dictionaries = {};
let currentLang = DEFAULT_LANG;

function getStoredLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED_LANGS.includes(stored) ? stored : null;
  } catch {
    return null;
  }
}

function storeLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // localStorage unavailable (private mode, etc.) - language just won't persist
  }
}

async function loadDictionary(lang, dictBasePath) {
  const res = await fetch(`${dictBasePath}${lang}.json`);
  return res.json();
}

// Resolves a dotted path like "pages.news.grid.sectionTitle" against a dictionary object.
function get(dict, dottedPath) {
  return dottedPath.split('.').reduce((node, key) => (node && typeof node === 'object' ? node[key] : undefined), dict);
}

const ATTR_MAP = {
  'data-i18n': null, // textContent
  'data-i18n-alt': 'alt',
  'data-i18n-aria-label': 'aria-label',
  'data-i18n-content': 'content',
  'data-i18n-title': 'title',
  'data-i18n-placeholder': 'placeholder',
};

export function applyTranslations(root, dict) {
  Object.entries(ATTR_MAP).forEach(([attr, targetAttr]) => {
    root.querySelectorAll(`[${attr}]`).forEach((el) => {
      const value = get(dict, el.getAttribute(attr));
      if (value === undefined) return;
      if (targetAttr) {
        el.setAttribute(targetAttr, value);
      } else {
        el.textContent = value;
      }
    });
  });

  // For text fragments that contain markup (e.g. <strong>, <br>) that a plain
  // textContent swap would destroy. Trusted, author-controlled strings only.
  root.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const value = get(dict, el.getAttribute('data-i18n-html'));
    if (value === undefined) return;
    el.innerHTML = value;
  });
}

function updateSwitcherUI(lang) {
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    const isActive = btn.getAttribute('data-lang') === lang;
    btn.setAttribute('aria-pressed', String(isActive));
    btn.classList.toggle('text-brand-primary', isActive);
    btn.classList.toggle('border', isActive);
    btn.classList.toggle('border-brand-primary', isActive);
    btn.classList.toggle('text-gray-400', !isActive);
  });
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  applyTranslations(document, dictionaries[lang]);
  updateSwitcherUI(lang);
}

export function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang) || lang === currentLang) return;
  storeLang(lang);
  applyLanguage(lang);
}

export async function initI18n(dictBasePath) {
  const [vi, en] = await Promise.all([
    loadDictionary('vi', dictBasePath),
    loadDictionary('en', dictBasePath),
  ]);
  dictionaries.vi = vi;
  dictionaries.en = en;

  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
  });

  applyLanguage(getStoredLang() || DEFAULT_LANG);
}
