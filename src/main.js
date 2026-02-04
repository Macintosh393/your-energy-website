import Pagination from './service/pagination.js';
import { addFilterTabsHandler } from './handlers/filter-tabs-handler.js';
import { renderFilters } from './render/render-filters.js';
import { addPaginationHandler } from './handlers/pagination-handler.js';
import { state } from './state/state.js';

async function initHomePage() {
  const filterTabsList = document.querySelector('.filter-tabs-list');
  const contentList = document.querySelector('.content-list');
  addFilterTabsHandler(filterTabsList, contentList);

  state.pagination = new Pagination();
  renderFilters('Muscles');

  addPaginationHandler();
}

initHomePage();
