const paginationPagesList = document.querySelector('.pagination-pages');
const paginationBackButtons = document.querySelector(
  '.pagination-back-wrapper'
);

export default class Pagination {
  perPage;
  page;

  constructor(perPage = 9) {
    this.perPage = perPage;
    this.page = 1;
    this.#render();
  }

  getPage() {
    return this.page;
  }

  next() {
    this.page++;
    this.#render();
  }

  back() {
    if (this.page > 1) {
      this.page--;
    }
    this.#render();
  }

  reset() {
    this.page = 1;
    this.#render();
  }

  #render() {
    if (this.page == 1) {
      paginationBackButtons.style.opacity = '20%';
    } else {
      paginationBackButtons.style.opacity = '100%';
    }

    let pageNumbers = [];
    for (let i = this.page - 2; i <= this.page + 2; i++) {
      if (i > 0) {
        pageNumbers.push(i);
      }
    }
    let markup = pageNumbers
      .map(pageNumber => {
        return `<li class="pagination-page-number ${pageNumber == this.page ? 'current' : ''}">${pageNumber}</li>`;
      })
      .join('');
    markup += '<li class="pagination-page-number">...</li>';
    console.log(markup);
    paginationPagesList.innerHTML = markup;
  }
}
