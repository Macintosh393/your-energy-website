import axios from 'axios';
import { state } from '../state/state';

axios.defaults.baseURL = 'https://your-energy.b.goit.study/api';

export async function getContentByFilter() {
  const res = await axios.get(
    `/filters?filter=${state.filter}&page=${state.pagination.page}&limit=${state.pagination.perPage}`
  );
  if (state.pagination.page === 1) {
    state.pagination.setMaxPage(res.data.totalPages);
  }
  return res.data.results;
}

export async function getExercises(keyword = null) {
  const params = new URLSearchParams({
    page: state.pagination.page,
    limit: state.pagination.perPage,
  });

  if (keyword != null) {
    params.set('keyword', keyword);
  }

  switch (state.filter) {
    case 'Muscles':
      params.set('muscles', state.filterValue);
      break;
    case 'Body parts':
      params.set('bodypart', state.filterValue);
      break;
    case 'Equipment':
      params.set('equipment', state.filterValue);
  }

  const res = await axios.get(`/exercises?${params}`);
  if (state.pagination.page === 1) {
    state.pagination.setMaxPage(res.data.totalPages);
  }
  return res.data.results;
}
