import http from './httpServices';
import { apiUrl } from '../config.json'

const apiEndPoint = apiUrl + '/users';
//const apiEndPoint = '/users';

export async function register(user) {

    return await http.post(apiEndPoint, {
        email: user.email,
        password: user.password,
        name: user.name
    });
};

export default {
    register
}
