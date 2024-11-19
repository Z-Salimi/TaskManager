import axios from 'axios';

const client = axios.create({
  baseURL: 'https://simplest-officer.pockethost.io/',
});

export default client;
