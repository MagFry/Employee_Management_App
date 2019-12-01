import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import {getEmployees, deleteEmployee, editEmployee} from "../../actions/employees";

Modal.setAppElement('#app')

export class Employees extends Component {

  //Modal functionality
    constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  // end of Modal functionality



    static propTypes = {
        employees: PropTypes.array.isRequired,
        getEmployees: PropTypes.func.isRequired,
        deleteEmployee: PropTypes.func.isRequired,
        editEmployee: PropTypes.func.isRequired,

    };

    componentDidMount() {
        this.props.getEmployees();
    }


    state = {
        employee_id:'',
        name: '',
        surname: '',
        email: ''
    };

    onChange = e => this.setState({[e.target.name]:e.target.value});

    handleEdit = e => {
        e.preventDefault();
        const {employee_id, name, surname, email} = this.state;
        const employee = {employee_id, name, surname, email};
        this.props.editEmployee(employee);
    };

    render() {
        const {employee_id,name,surname,email} = this.state;
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
                                {/*<button onClick={this.openModal}*/}
                                        {/*className="btn btn-danger btn-sm">*/}
                                    {/*Update*/}
                                {/*</button>*/}
                                <Modal
                                    isOpen={this.state.modalIsOpen}
                                    onAfterOpen={this.afterOpenModal}
                                    onRequestClose={this.closeModal}
                                    contentLabel="Example Modal"
                                >




                                    <div className="modal-header">
                                        <p className="heading lead" ref={subtitle => this.subtitle = subtitle}>Updating
                                            Employee data</p>
                                    </div>


                                    <form onSubmit={this.handleEdit}>
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="name"
                                                onChange={this.onChange}
                                                value={name}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Surname</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="surname"
                                                onChange={this.onChange}
                                                value={surname}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input
                                                className="form-control"
                                                type="email"
                                                name="email"
                                                onChange={this.onChange}
                                                value={email}
                                            />
                                        </div>
                                    </form>
                                    <div className="modal-footer justify-content-center">
                                        <button type="submit" className="btn btn-danger btn-sm">Save</button>
                                        <button className="btn btn-danger btn-sm"
                                           data-dismiss="modal" onClick={this.closeModal}>Close</button>
                                    </div>
                                </Modal>
                            </td>
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

export default connect(mapStateToProps, {getEmployees, deleteEmployee, editEmployee})(Employees);