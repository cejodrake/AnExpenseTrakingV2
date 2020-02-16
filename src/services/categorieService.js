import http from './httpServices';

const apiEndPoint = 'http://localhost:3000/api/categories';
//const apiEndPoint = '/categories';

export function getAllCategories() {
    return http.get(apiEndPoint);
}

export function getUrlAllCategories() {
    return apiEndPoint;
}

export default {
    getAllCategories,

}