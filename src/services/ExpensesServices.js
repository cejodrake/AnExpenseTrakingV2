import http from './httpServices';

const apiEndPoint = 'http://localhost:3000/api/expenses';
//const apiEndPoint = '/categories';

export function getAllExpenses() {
    return http.get(apiEndPoint);
}

export function getExpenseForDate(starDate, endDate) {
    return http.post(apiEndPoint)
}


export function getExpensesForFilter(startDate, endDate, email) {
    return http.post(apiEndPoint, {
        dateInitial: startDate,
        dateEnd: endDate,
        email: email
    });
};

export function saveExpense(expense) {

    return http.post(apiEndPoint, expense);
};