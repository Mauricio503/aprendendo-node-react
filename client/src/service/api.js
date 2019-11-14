import axios from 'axios';

// importando requesição externa
const api = axios.create({baseURL: 'https://rocketseat-node.herokuapp.com/api'});

export default api;