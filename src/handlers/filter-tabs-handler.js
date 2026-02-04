import { renderFilters } from '../render/render-filters';

export function addFilterTabsHandler(filterTabsList, destination) {
  filterTabsList.addEventListener('click', event => {
    const btn = event.target.closest('.filter-tabs-item');
    if (!btn) return;

    document
      .querySelectorAll('.filter-tabs-item')
      .forEach(item => item.classList.remove('active'));
    btn.classList.add('active');
    renderFilters(btn.dataset.filter, destination);
  });
}
