import React from 'react';

const Panel = (props) => {
    return(
        <div className="panel panel-default popup">
            <div className="panel-heading">Edit <span>Name</span></div>
            <div className="panel-body">
                <div className="hidden-block">
                    <input type="text" onChange={props.handleOnChange} className="form-control" defaultValue={props.value} />
                        <button type="button" className="btn btn-primary" onClick={props.onDone}>
                            <span className="glyphicon glyphicon-ok"></span>
                        </button>
                        <button type="button" className="btn btn-danger" onClick={props.onCancel}>
                            <span className="glyphicon glyphicon-remove" ></span>
                        </button>
                </div>
            </div>
        </div>
    )
};

export default Panel;