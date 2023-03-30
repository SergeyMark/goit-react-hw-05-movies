import axios from 'axios';

const KEY = 'd03712107dcdd723f1173c5ee2c0d8c1';

export async function featchMovie(endPoint) {   
    const API_URL = `https://api.themoviedb.org/3/${endPoint}?api_key=${KEY}`
    
    const resp = await axios.get(API_URL);

    return resp;
}



