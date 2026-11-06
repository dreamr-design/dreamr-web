// Mobile menu
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

function setMenu(open) {
  navToggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
}

navToggle.addEventListener('click', () => setMenu(navToggle.getAttribute('aria-expanded') !== 'true'));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('is-open')) {
    setMenu(false);
    navToggle.focus();
  }
});

// Segmented toggles: a group named N with a button valued V rewrites every [data-N-V]
// element's text to that attribute, and marks [data-N-out="V"] elements as not included.
document.querySelectorAll('[data-toggle]').forEach((group) => {
  const name = group.dataset.toggle;
  const buttons = group.querySelectorAll('button[data-value]');

  buttons.forEach((button) => button.addEventListener('click', () => {
    const value = button.dataset.value;
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
    document.querySelectorAll(`[data-${name}-${value}]`).forEach((el) => {
      el.textContent = el.getAttribute(`data-${name}-${value}`);
    });
    document.querySelectorAll(`[data-${name}-out]`).forEach((el) => {
      el.classList.toggle('is-out', el.getAttribute(`data-${name}-out`) === value);
    });
  }));
});

// Slapform: submit in place when the library is loaded, otherwise the form posts natively.
document.querySelectorAll('form[data-slapform]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    if (!window.Slapform) return;
    event.preventDefault();
    const status = form.querySelector('[role="status"]') || form.appendChild(Object.assign(document.createElement('p'), { className: 'form-status', role: 'status' }));
    const button = form.querySelector('[type="submit"]');
    if (button) button.disabled = true;
    new window.Slapform().submit(form.action.split('/').pop(), Object.fromEntries(new FormData(form)))
      .then(() => {
        status.textContent = form.dataset.slapformSuccess || 'Thanks, your message was sent.';
        form.reset();
      })
      .catch((error) => {
        status.textContent = error.message || 'Something went wrong. Please try again.';
      })
      .finally(() => {
        if (button) button.disabled = false;
      });
  });
});

// Google Analytics: start gtag with the measurement id the page carries, when it carries one.
(() => {
  const id = document.querySelector('meta[name="ga-measurement-id"]')?.content;
  if (!id) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', id);
})();