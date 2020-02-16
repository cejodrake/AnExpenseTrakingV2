
import http from './httpServices';


const apiEndPoint = 'http://localhost:3000/api/report';
//const apiEndPoint = '/report';


export function getExpensesForFilter(startDate, endDate, email) {
    return http.post(apiEndPoint, {
        dateInitial: startDate,
        dateEnd: endDate,
        email: email
    });
};

export default {
    getExpensesForFilter
}