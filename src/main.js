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
import { addExerciseDetailsHandler } from './handlers/exercise-details-handler.js';
import { addModalHandlers } from './handlers/modal-handler.js';
import { addFavoritesButtonsHandlers } from './handlers/favorites-buttons-handler.js';

function initNavigation() {
  let url = window.location;
  const navList = document.querySelector('.nav-list');
  const pathIndex = url.pathname.lastIndexOf('/') + 1;
  navList
    .querySelector('a[href="' + url.pathname.slice(pathIndex) + '"]')
    .parentNode.classList.add('active');

  if (url.pathname.slice(pathIndex) === 'index.html') {
    initHomePage();
  } else {
    initFavoritesPage();
  }
}

async function initHomePage() {
  const burgerButton = document.querySelector('.nav-toggle');
  const closeButton = document.querySelector('.nav-close');
  const mobileMenuBackdrop = document.querySelector('.mobile-menu-backdrop');
  addMenuHandlers(burgerButton, closeButton, mobileMenuBackdrop);

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

  addModalHandlers();
  addExerciseDetailsHandler();
  addFavoritesButtonsHandlers();

  const subscriptionForm = document.querySelector('.subscription-form');
  addSubscriptionFormHandler(subscriptionForm);
}

async function initFavoritesPage() {}

initNavigation();
