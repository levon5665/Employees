import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Table from './table-components/Table.jsx';

class Employees extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.fetchEmployees();
        this.props.fetchDepartments();
    }

    handleAddEvent() {
        this.props.addEmployees();
    }

    handleProductTable(item) {
        this.props.updateEmployees(item);
    };
    render() {
        return (
            <div id="page-content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="container">
                                <h2>Employees</h2>
                                <Table onProductTableUpdate={this.handleProductTable.bind(this)}
                                       onRowAdd={this.handleAddEvent.bind(this)}
                                       headerCells={['Name','Surname','Department']}
                                       rows={this.props.employees}
                                       departments={this.props.departments}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

function mapStateToProps(state) {
    return { employees: state.employees,
             departments:state.departments
           };
}

export default connect(mapStateToProps, actions)(Employees);





