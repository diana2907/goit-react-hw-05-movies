import axios from 'axios';

const API_KEY = 'b8a30f96df20651d83fae821e2a7d792';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getTranding() {
  const params = `/trending/movie/day?api_key=${API_KEY}`;
  const response = await axios(`${BASE_URL}${params}`);
  return response;
}

export async function searchMovies(query) {
  const params = `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
  const response = await axios(`${BASE_URL}${params}`);
  return response;
}

export async function getDetails(movieId) {
  const params = `/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  const response = await axios(`${BASE_URL}${params}`);
  return response;
}

export async function getCredits(movieId) {
  const params = `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
  const response = await axios(`${BASE_URL}${params}`);
  return response;
}

export async function getReviews(movieId) {
  const params = `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`;
  const response = await axios(`${BASE_URL}${params}`);
  return response;
}
