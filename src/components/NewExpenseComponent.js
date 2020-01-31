import React, { useState, useEffect } from "react"
import { Container, Row, Col, } from 'react-bootstrap';

import { getAllCategories, getUrlAllCategories } from '../services/categorieService';
import { getAllExpenses, saveExpense } from '../services/ExpensesServices';
import CaruselExpense from './common/caruselExpense';

import Joi from 'joi';


import useDropdown from './common/useDropDown';
import useInput from './common/useInput';
import useButton from './common/useButton';
import Input from './common/Input';



const NewExpenseComponent = ({ user }) => {

    const [allCategories, setallCategories] = useState([]);
    const [startDate, StarDatetInput] = useInput("Date", Date.now().toLocaleString(), "date");
    const [total, setTotal] = useState(0);
    const [comment, setComment] = useState("");
    const [buttonSave, SaveButton] = useButton("Save", "")
    const [categories, CategoriasDropDown] = useDropdown("Categories", "Baliadas", allCategories)
    const [allExpenses, setAllExpense] = useState([]);

    /* const [{ data, loading, error }, refetch] = useAxios(
         getUrlAllCategories()
     );*/


    const allExpense = async () => {
        const result = await getAllExpenses();
        setAllExpense(result.data);
    }

    const allData = async () => {
        const res = await getAllCategories();
        setallCategories(res.data)
    };



    const doSubmit = async () => {
        const expense = {
            "date": startDate,
            "categorieId": categories,
            "total": total,
            "comments": comment,
            "email": "j_calix2002@hotmail.com"
        };

        console.log(details);

        try {
            //    await saveExpense(expense);
            toast.info(" se autentico con exito ")
        } catch (error) {
            if (error.response && error.response.status === 400) {

                console.log(error)
            }
        }

    }

    useEffect(() => {
        allData();
        allExpense();

    }, [])


    return (
        <Container>
            <Row>
                <Col>
                    <form className="form" onSubmit={e => {
                        e.preventDefault()
                        doSubmit();
                    }}>
                        <StarDatetInput />
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
                        <CategoriasDropDown />
                        <SaveButton />

                    </form>
                </Col>
                <Col>
                    <div className="Carousel">
                        <CaruselExpense />

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