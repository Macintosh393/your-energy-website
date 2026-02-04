import axios from 'axios';
import { state } from '../state/state';

axios.defaults.baseURL = 'https://your-energy.b.goit.study/api';

export async function getContentByFilter(filter) {
  const res = await axios.get(
    `/filters?filter=${filter}&page=${state.pagination.page}&limit=${state.pagination.perPage}`
  );
  if (state.pagination.page === 1) {
    state.pagination.setMaxPage(res.data.totalPages);
  }
  return res.data.results;
}
