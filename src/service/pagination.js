import { renderFilters } from '../render/render-filters';
import { renderPagination } from '../render/render-pagination';

export default class Pagination {
  perPage;
  page;
  maxPage;

  constructor(maxPage = 1) {
    if (window.matchMedia('(min-width: 768px)').matches) {
      this.perPage = 12;
    } else {
      this.perPage = 9;
    }
    this.page = 1;
    this.maxPage = maxPage;

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
    renderFilters();
  }

  back() {
    if (this.page > 1) {
      this.page--;
    }
    renderPagination(this.page, this.maxPage);
    renderFilters();
  }

  reset() {
    this.page = 1;
    renderPagination(this.page, this.maxPage);
    renderFilters();
  }

  last() {
    this.page = this.maxPage;
    renderPagination(this.page, this.maxPage);
    renderFilters();
  }
}
