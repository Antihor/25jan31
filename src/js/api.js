import axios from 'axios';
import { resolveEnvPrefix } from 'vite';

export async function getImage(userQuery) {
  const params = {
    client_id: 'DwCHWnjztYkOGjaSpMHjMrexfDmKfCckrOyGxBw2Hwo',
    query: userQuery,
    page: 1,
  };
  const url = `https://api.unsplash.com/search/photos?${params}`;

  return (res = await axios.get(url));
}
