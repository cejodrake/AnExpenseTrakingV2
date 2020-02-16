import React, { useState, useEffect } from "react"
import { Container, Row, Col, } from 'react-bootstrap';

import { getAllCategories } from '../services/categorieService';
import { saveExpense } from '../services/ExpensesServices';

import useDropdown from './common/useDropDown';

import useButton from './common/useButton';
import Input from './common/Input';
import ReportComponent from "./ReportComponent";
import { toast } from 'react-toastify';
import Select from './common/select';



const NewExpenseComponent = ({ user }) => {

    const [categories, setCategories] = useState([])
    //const [categories, CategoriasDropDown] = useDropdown("categories", "All", allCategories)
    const [buttonSave, SaveButton] = useButton("Save", "", "subtmit")
    const [date, setDate] = useState()
    const [total, setTotal] = useState(0);
    const [comment, setComment] = useState("");


    const [errors, setErrors] = useState();


    /*  const [{ data, loading, error }, refetch] = useAxios(
          setallCategories
          getUrlAllCategories()
       );*/


    const allData = () => {
        const res = getAllCategories();
        setCategories(res.data)
        console.log(setCategories, categories)
    };

    useEffect(() => {
        allData();
    }, [categories])

    const doSubmit = async () => {

        const expense = {
            "date": date,
            "categorieId": categories,
            "total": total,
            "comments": comment,
            "email": user.email
        };


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
                            name="test"
                            label="categories"
                            options={categories}
                            onChange={e => setCategories(e.target.value)}
                        //error={errors[name]}
                        />

                        <SaveButton />

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