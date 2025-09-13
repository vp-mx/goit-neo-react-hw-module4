import axios from 'axios';

const ACCESS_KEY =
  import.meta.env.VITE_UNSPLASH_ACCESS_KEY ||
  'U8oXhSJqcMtWMY-7lfmoUfq3_MKQUV_I8vRAoOvzbmg';
axios.defaults.baseURL = 'https://api.unsplash.com/';

export const fetchPhotos = async (searchQuery, page = 1) => {
  const response = await axios.get('search/photos', {
    params: {
      query: searchQuery,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
      orientation: 'landscape',
    },
  });
  return response.data;
};
