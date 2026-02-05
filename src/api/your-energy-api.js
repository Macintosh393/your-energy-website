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

export async function getExercises(filterValue) {
  const params = new URLSearchParams({
    page: state.pagination.page,
    limit: state.pagination.perPage,
  });
  switch (state.filter) {
    case 'Muscles':
      params.set('muscles', filterValue);
      break;
    case 'Body parts':
      params.set('bodypart', filterValue);
      break;
    case 'Equipment':
      params.set('equipment', filterValue);
  }

  const res = await axios.get(`/exercises?${params}`);
  if (state.pagination.page === 1) {
    state.pagination.setMaxPage(res.data.totalPages);
  }
  return res.data.results;
}
