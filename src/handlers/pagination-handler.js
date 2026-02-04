import { state } from '../state/state';

export function addPaginationHandler() {
  const pagFirstBut = document.querySelector('.pagination-first-button');
  const pagPrevBut = document.querySelector('.pagination-previous-button');
  const pagNextBut = document.querySelector('.pagination-next-button');
  const pagLastBut = document.querySelector('.pagination-last-button');

  pagFirstBut.addEventListener('click', () => state.pagination.reset());
  pagPrevBut.addEventListener('click', () => state.pagination.back());
  pagNextBut.addEventListener('click', () => state.pagination.next());
  pagLastBut.addEventListener('click', () => state.pagination.last());
}
