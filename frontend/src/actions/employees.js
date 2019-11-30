import axios from 'axios';
import {createMessage} from "./messages";
import {GET_EMPLOYEES, DELETE_EMPLOYEE, ADD_EMPLOYEE, EDIT_EMPLOYEE, GET_ERRORS} from "./types";
import {tokenConfig} from "./auth";

//GET EMPLOYEES
export const getEmployees = () => (dispatch, getState) => {
    axios
        .get("/api/employees/", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_EMPLOYEES,
                payload: res.data
            });

        })
        .catch(err => console.log(err));
};

//DELETE EMPLOYEE
export const deleteEmployee = (employee_id) => (dispatch, getState) => {
    axios
        .delete(`/api/employees/${employee_id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({deleteEmployee: 'Employee Deleted'}));
            dispatch({
                type: DELETE_EMPLOYEE,
                payload: employee_id
            });

        })
        .catch(err => console.log(err));
};

//ADD EEMPLOYEE
export const addEmployee = (employee) => (dispatch, getState) => {
    axios
        .post("/api/employees/", employee, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({addEmployee: 'Employee Added'}));
            dispatch({
                type: ADD_EMPLOYEE,
                payload: res.data
            });

        })
        .catch(err =>{
            const errors = {
                msg: err.response.data,
                status: err.response.status
            };
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        } );
};

//EDIT EEMPLOYEE
export const editEmployee = (employee_id) => dispatch => {
    axios
        .patch(`/api/employees/${employee_id}`)
        .then(res => {
            dispatch({
                type: EDIT_EMPLOYEE,
                payload: employee_id
            });

        })
        .catch(err => console.log(err));
};