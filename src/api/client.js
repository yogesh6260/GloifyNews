import axios from 'axios';
import {API_BASE_URL, NEWS_API_KEY} from '@env';

const client = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

client.interceptors.request.use(config => {
  config.headers['X-Api-Key'] = NEWS_API_KEY;
  config.headers['Content-Type'] = 'application/json';
  return config;
});

export default client;
