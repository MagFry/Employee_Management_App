import axios from 'axios';

import {GET_EMPLOYEES, DELETE_EMPLOYEE, ADD_EMPLOYEE} from "./types";

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

//DELETE EMPLOYEE
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

//ADD EEMPLOYEE
export const addEmployee = (employee) => dispatch => {
    axios
        .post("/api/employees", employee)
        .then(res => {
            dispatch({
                type: ADD_EMPLOYEE,
                payload: res.data
            });

        })
        .catch(err => console.log(err));
};
