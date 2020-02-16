import React, { useState, useEffect } from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import { getExpensesForFilter } from './../services/reportService';

import { toast } from 'react-toastify';
import { getCurrentUser } from './../services/authService';


const ReportComponent = () => {
    const [allExpenses, setallExpenses] = useState([]);
    const [startDateReport, setStartDateReport] = useState();
    const [endDateReport, setEndDateReport] = useState();
    const [errors, setErrors] = useState();
    const [user, setUser] = useState();


    useEffect(() => {
        const userValid = getCurrentUser();
        setUser(userValid);

    }, []);

    const doSubmit = async () => {

        try {
            const result = await getExpensesForFilter(startDateReport, endDateReport, user.email);

            setallExpenses(result.data);
            //here should here all logic for this algorith
            if (allExpenses.length === 0) {
                toast.warn("Sorry We can get information Between dates ");
            }
            // console.log(result.data)



        } catch (error) {
            if (error.response && error.response.status === 400) {
                setErrors(error.response.data);
                toast.error(errors);
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
                    <Container>
                        <h1>Report </h1>
                    </Container>
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
                            <div >
                                <button className="btn btn-lg btn-primary" type="submit"> Accept </button>
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
                                    allExpenses.map(item => (
                                        <tr key={item._id} scope="row">
                                            <td>{new Date(item.date).toLocaleDateString()}</td>
                                            <td>{item.categorie.name}</td>
                                            <td> {item.total}</td>
                                            <td> {item.comments}</td>

                                        </tr>
                                    ))
                                }

                            </tbody >
                        </table>
                    </Row>

                </div>

            </form>


        </div >

    )
}

export default ReportComponent;