import { renderExercises } from '../render/render-exercises';
import { state } from '../state/state';
import Pagination from '../service/pagination';

export function addFilterHandlers(contentList) {
  contentList.addEventListener('click', event => {
    const filterTile = event.target.closest('.filter-tile');
    if (!filterTile) return;

    state.pagination = new Pagination('exercises');

    state.filterValue = filterTile.dataset.value;
    renderExercises(state.filterValue);
  });
}
