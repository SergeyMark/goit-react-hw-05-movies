import axios from 'axios';

const KEY = 'd03712107dcdd723f1173c5ee2c0d8c1';

export async function FeatchMovie(endPoint) {   
    const API_URL = `https://api.themoviedb.org/3/${endPoint}?api_key=${KEY}`
    
    const resp = await axios.get(API_URL);

    return resp;
}


export async function FeatchSearch(searchQuery) {
    const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${searchQuery}`;

    const resp = await axios.get(BASE_URL);

    return resp;
}


