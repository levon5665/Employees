import React from 'react';
import TableRow from './TableRow.jsx';

class Table extends React.Component {

    renderHeaderCells(){
        let HeaderCells = this.props.headerCells;
        return  HeaderCells.map((cell,index) => {
                    return (<th key={index}>{cell}</th>)
                });
    }

    renderRows(){
        const {onProductTableUpdate, onRowDel, departments} = this.props;
        return this.props.rows.map((row,index) => {
            return (<TableRow key={index}
                              product={row}
                              onDelEvent={onRowDel}
                              departments={departments}
                              onProductTableUpdate={onProductTableUpdate} />)
        })
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-left">Add</button>
                <table className="table table-striped">
                    <thead>
                    <tr>
                    {this.renderHeaderCells()}
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderRows()}
                    </tbody>
                </table>
            </div>
        );

    }

}

export default Table;