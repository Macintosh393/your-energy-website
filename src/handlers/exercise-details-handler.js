import { renderExerciseDetails } from '../render/render-exercise-details';

const contentList = document.querySelector('.content-list');
const header = document.querySelector('header');
const body = document.querySelector('body');

export function addExerciseDetailsHandler() {
  contentList.addEventListener('click', event => {
    const btn = event.target.closest('.start-button');
    if (!btn) return;

    header.style.visibility = 'hidden';
    body.classList.add('modal-open');
    renderExerciseDetails(btn.dataset.id);
  });
}
