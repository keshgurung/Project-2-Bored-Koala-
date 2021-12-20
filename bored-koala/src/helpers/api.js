import axios from 'axios'
import { getValue } from '../helpers/auth'

export const getJokeData = async () => {
  const config = {
    method: 'GET',
    url: 'https://api.chucknorris.io/jokes/random',
  }
  const response = await axios(config)
  return response.data
}

export const getMusicData = async () => {
  const config = {
    method: 'GET',
    url: 'https://genius.p.rapidapi.com/search',
    params: { q: 'Kendrick Lamar' },
    headers: {
      'x-raidapi-host': 'genius.p.rapidapi.com',
      'x-rapidapi-key': 'aeb717ee1emsha514d9d6575c369p1ee3ffjsne764f2a7e700',
    },
  }
  const response = await axios(config)
  return response.data
}

export const getMovieData = async (value) => {
  const config = {
    method: 'GET',
    url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
    params: { s: `${getValue()}` },
    headers: {
      'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
      'x-rapidapi-key': 'aeb717ee1emsha514d9d6575c369p1ee3ffjsne764f2a7e700',
    },
  }

  // axios.request(config).then(function (response) {
  //   return response.data;
  // }).catch(function (error) {
  //   console.error(error);
  // });

  const response = await axios(config)
  return response.data.Search
}

export const getSingleMovie = async (imdbID) => {
  const config = {
    method: 'GET',
    url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
    params: { i: `${imdbID}` },
    headers: {
      'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
      'x-rapidapi-key': 'aeb717ee1emsha514d9d6575c369p1ee3ffjsne764f2a7e700',
    },
  }
  const response = await axios(config)
  return response.data
}
