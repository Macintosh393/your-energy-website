import { getFavorites } from '../handlers/favorites-handler';
import { capitalize } from '../utility/capitalize';
import { state } from '../state/state';

const favoriteList = document.querySelector('.favorite-exercises-list');

export function renderFavorites() {
  const favoritExercises = getFavorites();
  if (favoritExercises.length === 0) {
    favoriteList.innerHTML = `
    <p class="favorites-placeholder">
        It appears that you haven't added any exercises to your
        favorites yet. To get started, you can add exercises that you
        like to your favorites for easier access in the future.
    </p>`;
    return;
  }

  favoriteList.innerHTML = favoritExercises
    .slice(
      (state.pagination.page - 1) * state.pagination.perPage,
      state.pagination.page * state.pagination.perPage
    )
    .map(el => {
      return `
          <li class="exercise">
            <div class="exercise-line-wrapper">
                <span class="workout">workout</span>
                <div class="rating">
                    <button type="button" class="remove-favorite-quick-btn" data-id="${el._id}">
                        <svg class="bin-icon" width="18" height="18">
                            <use href="button-icons/delete.svg"></use>
                        </svg>
                    </button>
                </div>
                <button class="start-button" data-id="${el._id}" aria-label="Start exercise">
                    Start
                    <svg class="start-arrow" width="16" height="16">
                        <use href="icon-pack/start-arrow.svg"></use>
                    </svg>
                </button>
            </div>
            <div class="exercise-line-wrapper">
                <div class="exercise-icon-wrapper">
                    <svg class="exercise-icon" width="24" height="24">
                        <use href="icon-pack/running-icon.svg"></use>
                    </svg>
                </div>
                <p class="exercise-name">${capitalize(el.name)}</p>
            </div>
            <div class="exercise-line-wrapper">
                <p class="exercise-info">Burned calories: <span class="exercise-info-value">${el.burnedCalories} / ${el.time}</span></p>
                <p class="exercise-info">Body part: <span class="exercise-info-value">${capitalize(el.bodyPart)}</span></p>
                <p class="exercise-info">Target: <span class="exercise-info-value">${capitalize(el.target)}</span></p>
            </div>
          </li>`;
    })
    .join('');
}
