import { renderRatingForm } from '../render/render-rating-form';

const modalBackdrop = document.querySelector('.modal-backdrop');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const modalBody = document.querySelector('.modal-body');
const header = document.querySelector('header');
const body = document.querySelector('body');

export function addModalHandlers() {
  modalBackdrop.addEventListener('click', () => {
    modalBackdrop.classList.add('is-hidden');
    body.classList.remove('modal-open');
    header.style.visibility = 'visible';
  });
  modalCloseBtn.addEventListener('click', () => {
    modalBackdrop.classList.add('is-hidden');
    body.classList.remove('modal-open');
    header.style.visibility = 'visible';
  });

  modalBody.addEventListener('click', event => {
    const btn = event.target.closest('.add-to-favorites-btn');
    if (!btn) return;
  });
  modalBody.addEventListener('click', event => {
    event.stopImmediatePropagation();
    const btn = event.target.closest('.give-rating-btn');
    if (!btn) return;

    renderRatingForm(btn.dataset.id);
  });
}
