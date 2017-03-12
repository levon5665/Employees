import React from 'react';
import shortid from'shortid';
import EditableCell from './EditableCell.jsx';
import Select from './Select.jsx';


class TableRow extends React.Component {

    render() {
        let cells = Object.keys(this.props.product);
        return (
            <tr className="eachRow">
                {
                    cells.map((cell,index)=>{
                        if(cell != 'id' && cell != 'departmentId'){
                            return(
                                <EditableCell key={`${index}${shortid.generate}`}
                                    onProductTableUpdate={this.props.onProductTableUpdate}
                                    cellData={{
                                    name:cell,
                                    value: this.props.product[cell],
                                    id: this.props.product.id
                                }}/>
                            )
                        }else if (cell != 'id' ){
                            return(
                                <Select key={`${index}${shortid.generate}`}
                                        data={this.props.departments}
                                        onProductTableUpdate={this.props.onProductTableUpdate}
                                        selectedID={this.props.product[cell]}
                                        cellData={{
                                            name:cell,
                                            value: this.props.product[cell],
                                            id: this.props.product.id
                                        }}/>
                                )
                        }
                    })
                }
            </tr>
        );

    }

}

export default TableRow;