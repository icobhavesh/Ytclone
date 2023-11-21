import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: 50,
    },
    headers: {
        // 'X-RapidAPI-Key': 'a55e0d393dmsh39277a152cdeff6p15867bjsnce56ed484ef7',
        // 'X-RapidAPI-Key': 'db2b84f87fmsh48f304509a6ea5cp15f28fjsn69ee12794637',
        'X-RapidAPI-Key': '43b4ab3cd8msh0c67441e59e6d5fp1533a2jsn6473a85fa03a',


        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};