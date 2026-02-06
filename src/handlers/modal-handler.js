import { patchReview } from '../api/your-energy-api';
import { renderRatingForm } from '../render/render-rating-form';
import { isValidEmail } from '../utility/email-validator';

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
  modalBody.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.target.closest('#rating-form');
    if (!form) return;

    const rate = Number(form.querySelector('.rating-form-value').innerHTML);
    const email = form.querySelector('#rating-email-input').value;
    const review = form.querySelector('#rating-review-text').value;
    const req = { rate, email, review };

    if (!isValidEmail(email)) throw new Error('Invalid Error');

    patchReview(form.dataset.id, req);
    modalBackdrop.classList.add('is-hidden');
    body.classList.remove('modal-open');
    header.style.visibility = 'visible';
  });
  modalBody.addEventListener('change', event => {
    if (event.target.type === 'radio') {
      const rating = document.querySelector('.rating-form-value');
      rating.innerHTML = event.target.value;
    }
  });
}
