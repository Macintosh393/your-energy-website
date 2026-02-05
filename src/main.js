import Pagination from './service/pagination.js';
import { addFilterTabsHandler } from './handlers/filter-tabs-handler.js';
import { renderFilters } from './render/render-filters.js';
import { addPaginationHandler } from './handlers/pagination-handler.js';
import { state } from './state/state.js';
import { addMenuHandlers } from './handlers/menu-handler.js';
import { addFilterHandlers } from './handlers/filter-handler.js';

async function initHomePage() {
  const burgerButton = document.querySelector('.nav-toggle');
  const closeButton = document.querySelector('.nav-close');
  const mobileMenu = document.querySelector('#mobile-menu');
  addMenuHandlers(burgerButton, closeButton, mobileMenu);

  const filterTabsList = document.querySelector('.filter-tabs-list');
  const contentList = document.querySelector('.content-list');
  addFilterTabsHandler(filterTabsList);

  state.pagination = new Pagination('filters');
  renderFilters('Muscles');
  addFilterHandlers(contentList);

  addPaginationHandler();
}

initHomePage();
