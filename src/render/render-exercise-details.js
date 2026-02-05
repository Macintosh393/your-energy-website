import { getExercise } from '../api/your-energy-api';
import { capitalize } from '../utility/capitalize';

const modalBackdrop = document.querySelector('.modal-backdrop');
const modalBody = document.querySelector('.modal-body');

export async function renderExerciseDetails(id) {
  const ex = await getExercise(id);
  modalBody.innerHTML = `
    <div class="exercise-details-wrapper"></div>
        <img src="${ex.gifUrl}" class="exercise-gif" alt="Gif example of how to do the exercise"/>
        <div class="exercise-details-container">
            <div class="exercise-header">
                <h3 class="exercise-details-title">${capitalize(ex.name)}</h3>
                <div class="exercise-details-rating">
                    <span class="exercise-details-rating-value">${ex.rating.toFixed(1)}</span>
                    <div class="rating-stars-container">
                        
                    </div>
                </div>
            </div>
            <ul class="quick-info-list">
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Target</p>
                    <p class="quick-info-value">${capitalize(ex.target)}</p>
                </li>
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Body Part</p>
                    <p class="quick-info-value">${capitalize(ex.bodyPart)}</p>
                </li>
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Equipment</p>
                    <p class="quick-info-value">${capitalize(ex.equipment)}</p>
                </li>
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Popular</p>
                    <p class="quick-info-value">${ex.popularity}</p>
                </li>
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Burned Calories</p>
                    <p class="quick-info-value">${ex.burnedCalories}/${ex.time} min</p>
                </li>
            </ul>
            <p class="exercise-detailed-description">${ex.description}</p>

            <div class="exercise-action-buttons">
                <button type="button" class="add-to-favorites-btn" aria-label="Add to favorites">
                    Add to favorites
                    <svg class="like-icon" width="20" height="20">
                        <use href="button-icons/like.svg"></use>
                    </svg>
                </button>
                <button type="button" class="give-rating-btn" aria-label="Give exercise a rating">
                    Give a rating
                </button>
            </div>
        </div>
    </div>
    `;

  const rating = ex.rating; // Your decimal rating
  const starsContainer = modalBody.querySelector('.rating-stars-container');

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('span');
    star.classList.add('star', 'filled');
    star.innerHTML = '★';

    // Calculate fill percentage for this specific star
    let fill = 0;
    if (rating >= i) {
      fill = 100; // Fully filled
    } else if (rating > i - 1) {
      fill = (rating - (i - 1)) * 100; // Partial fill (e.g., 0.2 * 100 = 20%)
    } else {
      fill = 0; // Empty
    }

    star.style.setProperty('--percent', `${fill}%`);
    starsContainer.appendChild(star);
  }
  modalBackdrop.classList.remove('is-hidden');
}
