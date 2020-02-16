import http from './httpServices';

const apiEndPoint = 'http://localhost:3000/api/expenses';
//const apiEndPoint = '/categories';

export function getAllExpenses() {
    return http.get(apiEndPoint);
}

export function saveExpense(expense) {

    return http.post(apiEndPoint, expense);
};