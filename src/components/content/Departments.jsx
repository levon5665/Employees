import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Table from './table-components/Table.jsx';

class Departments extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.fetchDepartments()
    }

    handleAddEvent() {
        this.props.addDepartments();
    }

    handleProductTable(item) {
        this.props.updateDepartments(item);
    }


    render() {
        return (
        <div id="page-content-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="container">
                            <h2>Departments</h2>
                            <Table onProductTableUpdate={this.handleProductTable.bind(this)}
                                   onRowAdd={this.handleAddEvent.bind(this)}
                                   headerCells={['Name']}
                                   rows={this.props.departments}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );

    }

}

function mapStateToProps(state) {
    return { departments: state.departments };
}

export default connect(mapStateToProps, actions )(Departments);





