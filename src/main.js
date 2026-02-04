import Pagination from './js/pagination.js';
import { addFilterTabsHandler } from './handlers/filter-tabs-handler.js';
import { getContentByFilter } from './api/your-energy-api.js';
import { renderFilters } from './render/render-filters.js';

async function initHomePage() {
  const filterTabsList = document.querySelector('.filter-tabs-list');
  const contentList = document.querySelector('.content-list');
  renderFilters('Muscles', contentList);

  addFilterTabsHandler(filterTabsList, contentList);

  const pagination = new Pagination();
  const pagFirstBut = document.querySelector('.pagination-first-button');
  const pagPrevBut = document.querySelector('.pagination-previous-button');
  const pagNextBut = document.querySelector('.pagination-next-button');

  pagFirstBut.addEventListener('click', () => pagination.reset());
  pagPrevBut.addEventListener('click', () => pagination.back());
  pagNextBut.addEventListener('click', () => pagination.next());
}

initHomePage();
