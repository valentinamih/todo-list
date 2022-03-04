import axios from "axios";

export let getTasks = ()  => {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`)
        .then(response => response.data)
}