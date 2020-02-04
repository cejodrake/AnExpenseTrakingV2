import React, { useState, useEffect } from 'react';
import { Container, Row, Col, } from 'react-bootstrap';

import useButton from './common/useButton';
import { getExpensesForFilter } from './../services/ExpensesServices';

const ReportComponent = ({ user }) => {
    const [startDateReport, setStartDateReport] = useState(Date.now());
    const [endDateReport, setEndDateReport] = useState(Date.now());
    const [expenses, setExpenses] = useState();
    const [buttonFilter, ButtonFilterData] = useButton("Filter", "", "submit");

    const getExpenseForDate = async () => {
        const result = getExpensesForFilter(startDateReport, endDateReport);
        setExpenses(result.data);
    }

    const doSubmit = async () => {
        console.log("funtionando ")

        try {
            const result = await getExpenseForDate();
            console.log(result);

        } catch (error) {
            if (error.response && error.response.status === 400) {
            }
        }

    }

    return (
        <div className="Report">

            <form onSubmit={e => {
                e.preventDefault()
                doSubmit();
            }}>
                <div className="container">
                    <Row>
                        <Col>
                            <div className="form-group" >
                                <label>Start Date</label>
                                <input
                                    name="startDate"
                                    id="startDate"
                                    className="form-control"
                                    onChange={e => setStartDateReport(e.target.value)}
                                    type="date"
                                />

                            </div>
                        </Col>
                        <Col>
                            <div className="form-group" >
                                <label>End Date</label>
                                <input
                                    name="endDate"
                                    id="endDate"
                                    className="form-control"
                                    onChange={e => setEndDateReport(e.target.value)}
                                    type="date"
                                />

                            </div>
                        </Col>
                        <Col>
                            <div>

                                <button className="btn btn-primary" type="submit"> Save </button>
                            </div>

                        </Col>
                    </Row>

                    <Row>

                        <table className="table">
                            <thead>
                                <tr >
                                    <th scope="col">Date</th>
                                    <th scope="col">Categorie</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Comment</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    /*  expenses.map(item => (
                                          <tr key={item._id} scope="row">
                                              <td>{new Date(item.date).toLocaleDateString()}</td>
                                              <td>{item.categorie.name}</td>
                                              <td> {item.total}</td>
                                              <td> {item.comments}</td>
  
                                          </tr>
                                      ))*/
                                }

                            </tbody >
                        </table>
                    </Row>

                </div>

            </form>


        </div >

    )
}

export default ReportComponent