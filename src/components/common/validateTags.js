import React from 'react';
import { Joi } from "joi";

const validate = (shema) => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) {
        errors[item.path[0]] = item.message;
    }
    return errors;
};

const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
};
export default {
    validate
}