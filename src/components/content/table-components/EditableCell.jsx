import React, {Component} from 'react';
import Panel from './PanelPopup.jsx';

class EditableCell extends Component {

    constructor(props){
        super(props);
        this.state = { open : false , value : this.props.cellData.value}
    }

    openPopup(){
        this.setState({
            open:true,
            value: ''
        })
    }

    handleOnChange(e){
        this.setState({
            value: e.target.value
        })
    }

    onDone(){
        let target = this.refs.input;
        let item = {
            id: target.id,
            name: target.getAttribute('name'),
            value: this.state.value
        };
        this.props.onProductTableUpdate(item);
        this.setState({open : false})
    }

    onCancel(){
        this.setState({
            open: false,
            value: ''
        })
    }

    render() {
        return (
            <td>
                <span  ref="input"
                       name={this.props.cellData.name}
                       id={this.props.cellData.id}
                       onClick={this.openPopup.bind(this)}>{this.props.cellData.value}</span>
                        {this.state.open ? <Panel
                                          value={this.props.cellData.value}
                                          handleOnChange={this.handleOnChange.bind(this)}
                                          onDone={this.onDone.bind(this)}
                                          onCancel={this.onCancel.bind(this)}/> : ""}

            </td>
        );

    }

}

export default EditableCell;