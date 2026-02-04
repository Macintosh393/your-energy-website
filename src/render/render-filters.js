import { getContentByFilter } from '../api/your-energy-api';
import { capitalize } from '../service/capitalize';

export async function renderFilters(filter, contentList) {
  const data = (await getContentByFilter(filter))
    .map(el => {
      return `<li class="filter-tile">
            <img src="${el.imgURL}" class="filter-image" alt="${el.name}"/>
            <h3 class="filter-name">${capitalize(el.name)}</h3>
            <p class="filter-category">${el.filter}</p>
        </li>`;
    })
    .join('');

  contentList.innerHTML = data;
}
