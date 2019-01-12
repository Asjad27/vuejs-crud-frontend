import axios from 'axios';
const url = 'http://localhost:8080';
export class PeopleService{
    static getPeople() {
        const getPeopleURL = `${url}/people/`;
        return axios.get(getPeopleURL).then(response => response.data);
    }
}