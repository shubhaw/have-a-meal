import axios from 'axios';

const instance = axios.create(
    {
        baseURL: 'https://us-central1-have-a-meal.cloudfunctions.net/'
    }
)

export default instance;