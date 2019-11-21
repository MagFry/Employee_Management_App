import axios from 'axios';

import {GET_EMPLOYEES, DELETE_EMPLOYEE} from "./types";

//GET EMPLOYEES

export const getEmployees = () => dispatch => {
    axios
        .get("/api/employees/all")
        .then(res => {
            dispatch({
                type: GET_EMPLOYEES,
                payload: res.data
            });

        })
        .catch(err => console.log(err));
};

//DELETE EMPLOYEES
export const deleteEmployee = (employee_id) => dispatch => {
    axios
        .delete(`/api/employees/${employee_id}`)
        .then(res => {
            dispatch({
                type: DELETE_EMPLOYEE,
                payload: employee_id
            });

        })
        .catch(err => console.log(err));
};
