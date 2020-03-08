import React, { useState, useEffect } from "react"
import { Container, Row, Col, } from 'react-bootstrap';

import { getAllCategories } from '../services/categorieService';
import { saveExpense } from '../services/ExpensesServices';

import useButton from './common/useButton';
import Input from './common/Input';
import ReportComponent from "./ReportComponent";
import { toast } from 'react-toastify';
import Select from './common/select';



const NewExpenseComponent = ({ user }) => {

    const [categories, setCategories] = useState([])

    const [buttonSave, SaveButton] = useButton("Save", "", "submit")
    const [date, setDate] = useState()
    const [total, setTotal] = useState(0);
    const [comment, setComment] = useState("");


    const [errors, setErrors] = useState();


    const allData = async () => {
        const res = await getAllCategories();
        setCategories(res.data)

    };

    useEffect(() => {
        allData();
        console.log(user)

    }, [])

    const doSubmit = async () => {

        const expense = {
            "date": date,
            "categorieId": categories,
            "total": total,
            "comments": comment,
            "email": user.email
        };
        console.log("butunn pressed")
        try {
            await saveExpense(expense);

        } catch (error) {
            if (error.response && error.response.status === 400) {

                setErrors(error.response.data);
                toast.error(errors);
            }
        }

    }
    return (
        <Container>
            <Row>
                <Col>
                    <form className="form" onSubmit={e => {
                        e.preventDefault()
                        doSubmit();
                    }}>
                        <div className="form-group" >
                            <label>Start Date</label>
                            <input
                                name="date"
                                id="date"

                                className="form-control"
                                onChange={e => setDate(e.target.value)}
                                type="date"
                            />
                        </div>
                        <Input
                            name="Expense Monto  "
                            id="expense"
                            value={total}
                            className="form-control"
                            onChange={e => setTotal(e.target.value)}
                        />
                        <Input
                            name="comment"
                            id="comment"
                            value={comment}
                            className="form-control"
                            type="text"
                            onChange={e => setComment(e.target.value)}
                        />
                        <Select
                            name="categories"
                            label="categories"
                            options={categories}

                        />

                        <button className="btn btn-primary btn-lg" type="submit">
                            save
                       </button>

                    </form>
                </Col>

                <Col >

                    <div className="Carousel">

                        <ReportComponent user={user} />

                    </div>

                </Col>


            </Row>

        </Container >



    );


};

function useFormInput(initialState) {
    const [value, setValue] = useState(initialState);
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange
    }
}

export default NewExpenseComponent; 