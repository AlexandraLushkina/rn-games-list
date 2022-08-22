import axios from 'axios';

const apiKey = '1a34046a81e34c60be449941c956704f';
const mainUrl = 'https://api.rawg.io/api';

const request = (url, method = 'GET', params, data) => {
  return axios({
    url: url,
    method,
    data,
    params: {
      key: apiKey,
      ...params,
    },
  });
}

export const getGamesList = (page = 1, ordering = '-rating', platforms) => {
  const url = mainUrl + '/games';
  return request(url, 'GET', { page, ordering, platforms });
}

export const getPlatforms = () => {
  const url = mainUrl + '/platforms';
  return request(url, 'GET');
}
