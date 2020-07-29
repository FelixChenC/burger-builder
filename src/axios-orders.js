import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-myburger-3a2a4.firebaseio.com/'
});

export default instance;