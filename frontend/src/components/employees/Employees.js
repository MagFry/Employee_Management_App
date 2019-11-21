import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getEmployees, deleteEmployee} from "../../actions/employees";


export class Employees extends Component {
    static propTypes = {
        employees: PropTypes.array.isRequired,
        getEmployees: PropTypes.func.isRequired,
        deleteEmployee: PropTypes.func.isRequired

    };

    componentDidMount() {
        this.props.getEmployees();
    }

    render() {
        return (
            <Fragment>
                <h2>Employees</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.employees.map(employee => (
                        <tr key={employee.employee_id}>
                            <td>{employee.employee_id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.surname}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button onClick={this.props.deleteEmployee.bind
                                (this,employee.employee_id)}
                                        className="btn btn-danger btn-sm">
                                    {" "}
                                    Delete
                                </button>
                            </td>
                        </tr>

                    ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    employees: state.employees.employees
});

export default connect(mapStateToProps, {getEmployees, deleteEmployee})(Employees);