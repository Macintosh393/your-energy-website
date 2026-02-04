import { renderFilters } from '../render/render-filters';
import { state } from '../state/state';
import Pagination from '../service/pagination';

export function addFilterTabsHandler(filterTabsList, destination) {
  filterTabsList.addEventListener('click', event => {
    const btn = event.target.closest('.filter-tabs-item');
    if (!btn) return;

    state.pagination = new Pagination();
    console.log(state.pagination);

    document
      .querySelectorAll('.filter-tabs-item')
      .forEach(item => item.classList.remove('active'));
    btn.classList.add('active');
    state.filter = btn.dataset.filter;
    renderFilters();
  });
}
