import iziToast from 'izitoast';
import { patchReview } from '../api/your-energy-api';
import { renderRatingForm } from '../render/render-rating-form';
import { isValidEmail } from '../utility/email-validator';
import { renderExerciseDetails } from '../render/render-exercise-details';

const modalBackdrop = document.querySelector('.modal-backdrop');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const modalBody = document.querySelector('.modal-body');
const header = document.querySelector('header');
const body = document.querySelector('body');

export function addModalHandlers() {
  const closeModalWindow = function () {
    const form = document.querySelector('#rating-form');
    if (!form) {
      modalBackdrop.classList.add('is-hidden');
      body.classList.remove('modal-open');
      header.style.visibility = 'visible';
    } else {
      renderExerciseDetails(form.dataset.id);
    }
  };

  const closeModalWindowOnEsc = function (event) {
    if (event.key === 'Escape') {
      closeModalWindow();
    }
  };

  modalBackdrop.addEventListener('click', closeModalWindow);
  document.addEventListener('keydown', closeModalWindowOnEsc);
  modalCloseBtn.addEventListener('click', closeModalWindow);

  modalBody.addEventListener('click', event => {
    event.stopPropagation();
  });

  modalBody.addEventListener('click', event => {
    const btn = event.target.closest('.give-rating-btn');
    if (!btn) return;

    const exerciseId = btn.dataset.id;
    renderRatingForm(exerciseId);
  });

  modalBody.addEventListener('submit', event => {
    try {
      event.preventDefault();
      const form = event.target.closest('#rating-form');
      if (!form) return;

      const rate = Number(form.querySelector('.rating-form-value').innerHTML);
      const email = form.querySelector('#rating-email-input').value;
      const review = form.querySelector('#rating-review-text').value;
      const req = { rate, email, review };

      if (!isValidEmail(email)) throw new Error('Invalid email');
      if (rate == 0) throw new Error("Rating can't be 0");

      const exerciseId = form.dataset.id;
      patchReview(exerciseId, req);
      renderExerciseDetails(exerciseId);

      iziToast.success({
        title: 'Success',
        message: 'Posted a review',
        position: 'bottomCenter',
      });
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: error.message,
        position: 'bottomCenter',
      });
    }
  });

  modalBody.addEventListener('change', event => {
    if (event.target.type === 'radio') {
      const rating = document.querySelector('.rating-form-value');
      rating.innerHTML = event.target.value;
    }
  });
}
