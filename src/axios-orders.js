import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-reactjs-a27e9.firebaseio.com/'
})

export default instance;