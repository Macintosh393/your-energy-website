import axios from 'axios';

axios.defaults.baseURL = 'https://your-energy.b.goit.study/api';

export async function getContentByFilter(filter) {
  console.log(filter.replace(' ', '%20'));
  const res = await axios.get(`/filters?filter=${filter.replace(' ', '%20')}`);
  return res.data.results;
}
