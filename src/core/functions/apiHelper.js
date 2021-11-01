import axios from 'axios';

const axiosApiMusicConfig = {
  baseURL: 'http://localhost:8080/https://api.deezer.com/',
};

const axiosFluxRssConfig = {
  baseURL: 'http://localhost:8080/https://www.lesinrocks.com/',
};

export const axiosApiMusic = axios.create(axiosApiMusicConfig);
export const axiosFluxRss = axios.create(axiosFluxRssConfig);
