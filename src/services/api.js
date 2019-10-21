import axios from 'axios';

const api = axios.create({
  baseURL: '192.168.1.10:3003',
  // baseURL: 'http://localhost:3003',
});

export default api;
