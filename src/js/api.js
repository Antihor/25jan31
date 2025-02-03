import axios from 'axios';

export function getImage(userQuery, currentPage) {
  const options = {
    params: {
      client_id: 'DwCHWnjztYkOGjaSpMHjMrexfDmKfCckrOyGxBw2Hwo',
      query: userQuery,
      page: currentPage,
      per_page: 12,
    },
  };

  return axios.get(`https://api.unsplash.com/search/photos`, options);
}
