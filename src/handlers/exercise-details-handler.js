import { renderExerciseDetails } from '../render/render-exercise-details';
import { renderFavorites } from '../render/render-favorites';
import { removeFavorite } from './favorites-handler';

const header = document.querySelector('header');
const body = document.querySelector('body');

export function addExerciseDetailsHandler(contentList) {
  contentList.addEventListener('click', event => {
    const quickRemoveBtn = event.target.closest('.remove-favorite-quick-btn');
    const startBtn = event.target.closest('.start-button');

    if (startBtn) {
      header.style.visibility = 'hidden';
      body.classList.add('modal-open');
      renderExerciseDetails(startBtn.dataset.id);
    } else if (quickRemoveBtn) {
      removeFavorite(quickRemoveBtn.dataset.id);
      renderFavorites();
    }
  });
}
