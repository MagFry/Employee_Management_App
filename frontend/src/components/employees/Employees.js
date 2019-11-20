import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getEmployees} from "../../actions/employees";


export class Employees extends Component {
    static propTypes = {
        employees: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getEmployees();
    }

    render() {
        return (
            <div>
                <h1>Employees List</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    employees: state.employees.employees
});

export default connect(mapStateToProps, {getEmployees})(Employees);