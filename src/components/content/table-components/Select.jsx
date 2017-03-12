import React, {Component} from 'react';

class Select extends Component {

    constructor(props){
        super(props);
    }

    handleSelectChange(e){
        const {id, name } = this.props.cellData;
        let item = {
            id: id,
            name: name,
            value: e.target.value
        };
        this.props.onProductTableUpdate(item);
    }

    render() {
        return (
            <td>
                <select name="department" defaultValue={this.props.selectedID} onChange={this.handleSelectChange.bind(this)}>
                    {
                       this.props.data.map((dep,index)=>{
                           return(<option key={index} value={dep.id}>{dep.name}</option>)
                       })
                    }
                </select>
            </td>
        );

    }

}

export default Select;