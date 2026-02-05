import Pagination from './utility/pagination.js';
import { addFilterTabsHandler } from './handlers/filter-tabs-handler.js';
import { renderFilters } from './render/render-filters.js';
import { addPaginationHandler } from './handlers/pagination-handler.js';
import { state } from './state/state.js';
import { addMenuHandlers } from './handlers/menu-handler.js';
import { addFilterHandlers } from './handlers/filter-handler.js';
import { setQuote } from './utility/set-quote.js';
import { addSubscriptionFormHandler } from './handlers/subscription-form-handler.js';
import { addSearchHandler } from './handlers/search-handler.js';

let url = window.location;
const pathIndex = url.pathname.lastIndexOf('/') + 1;
document
  .querySelector('a[href="' + url.pathname.slice(pathIndex) + '"]')
  .parentNode.classList.add('active');

async function initHomePage() {
  const burgerButton = document.querySelector('.nav-toggle');
  const closeButton = document.querySelector('.nav-close');
  const mobileMenu = document.querySelector('#mobile-menu');
  addMenuHandlers(burgerButton, closeButton, mobileMenu);

  const filterTabsList = document.querySelector('.filter-tabs-list');
  const contentList = document.querySelector('.content-list');
  addFilterTabsHandler(filterTabsList);

  const searchForm = document.querySelector('.exercises-search');
  addSearchHandler(searchForm);

  state.pagination = new Pagination('filters');
  renderFilters('Muscles');
  addFilterHandlers(contentList);

  setQuote();

  addPaginationHandler();

  const subscriptionForm = document.querySelector('.subscription-form');
  addSubscriptionFormHandler(subscriptionForm);
}

if (url.pathname.slice(pathIndex) === 'index.html') {
  initHomePage();
}
