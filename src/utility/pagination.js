import { renderExercises } from '../render/render-exercises';
import { renderFilters } from '../render/render-filters';
import { renderPagination } from '../render/render-pagination';

export default class Pagination {
  perPage;
  page;
  maxPage;
  purpose;

  constructor(purpose) {
    this.purpose = purpose;
    this.page = 1;
    this.maxPage = 1;

    if (this.purpose === 'filters') {
      if (window.matchMedia('(min-width: 768px)').matches) {
        this.perPage = 12;
      } else {
        this.perPage = 9;
      }
    } else if (this.purpose === 'exercises') {
      if (window.matchMedia('(min-width: 768px)').matches) {
        this.perPage = 10;
      } else {
        this.perPage = 8;
      }
    }

    renderPagination(this.page, this.maxPage);
  }

  getPage() {
    return this.page;
  }

  setMaxPage(maxPage) {
    this.maxPage = maxPage;
  }

  next() {
    if (this.page < this.maxPage) {
      this.page++;
    }

    renderPagination(this.page, this.maxPage);
    if (this.purpose === 'filters') {
      renderFilters();
    } else if (this.purpose === 'exercises') {
      renderExercises();
    }
  }

  back() {
    if (this.page > 1) {
      this.page--;
    }
    renderPagination(this.page, this.maxPage);
    if (this.purpose === 'filters') {
      renderFilters();
    } else if (this.purpose === 'exercises') {
      renderExercises();
    }
  }

  reset() {
    this.page = 1;
    renderPagination(this.page, this.maxPage);
    if (this.purpose === 'filters') {
      renderFilters();
    } else if (this.purpose === 'exercises') {
      renderExercises();
    }
  }

  last() {
    this.page = this.maxPage;
    renderPagination(this.page, this.maxPage);
    if (this.purpose === 'filters') {
      renderFilters();
    } else if (this.purpose === 'exercises') {
      renderExercises();
    }
  }
}
