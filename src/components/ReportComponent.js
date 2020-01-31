import React from 'react';
import { getAllCategories } from '../services/categorieService';

const ReportComponent = ({ data }) => {


    return (
        <div className="Report">

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
                        data.map(item => (
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
        </div >

    )
}

export default Report