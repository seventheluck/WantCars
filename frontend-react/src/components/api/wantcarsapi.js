import axios from 'axios';
import URL from '../configue';

export default axios.create(
    {
        baseURL: URL
    }
);