export function getFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites'));
}

export function putFavorite(newExercise) {
  const favorites = getFavorites();
  localStorage.setItem('favorites', [...favorites, newExercise]);
}

export function removeFavorite(exercise) {}
