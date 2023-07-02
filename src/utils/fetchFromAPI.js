import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    url: BASE_URL,
    params: {
        maxResults: '50',
    },
    headers: {
        'X-RapidAPI-Key': '9f3532c780mshb9bca1b8907cfe9p1d8b9cjsnb9728c750ee6',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const {data}=await axios.get(`${BASE_URL}/${url}`,options);
    // console.log(data);
    return data;
}