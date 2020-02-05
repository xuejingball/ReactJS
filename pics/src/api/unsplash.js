import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID eb7a9687b60beddbf087113489237e85bed5c9445a9d0059a5685b3d790663a8'
    }
});
