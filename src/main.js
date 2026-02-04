import Pagination from './js/pagination.js';

const pagination = new Pagination();
const pagFirstBut = document.querySelector('.pagination-first-button');
const pagPrevBut = document.querySelector('.pagination-previous-button');
const pagNextBut = document.querySelector('.pagination-next-button');

pagFirstBut.addEventListener('click', () => pagination.reset());
pagPrevBut.addEventListener('click', () => pagination.back());
pagNextBut.addEventListener('click', () => pagination.next());
