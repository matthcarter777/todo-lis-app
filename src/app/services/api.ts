import axios, { AxiosError } from 'axios';


export function setupAPIClient(ctx = undefined) {

  const api = axios.create({
    baseURL: 'https://todolist-mateus.onrender.com:8080'
  });

  return api;
}