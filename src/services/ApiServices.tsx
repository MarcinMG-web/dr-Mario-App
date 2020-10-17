import axios from 'axios';

const api = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/`
})

export const getAllPosts = async () => {
    try {
        return await api.get(`/comments`)
            .then(({data}) => data);

    } catch (err) {
        console.log(err)
    }
}