// /**
//  * Created by sandeeptc on 2/22/17.
//  */

import React from 'react';

export class TodoListItem extends React.Component {
    constructor(props){
        super(props);

        this.state={
          isEditing:false
        };
    }

    renderActionsSection(){
        const buttonStyle={
            'marginLeft':'10px',

        };
        if(this.state.isEditing){
            return(
                <span>
                    <button type="button" className="btn btn-danger pull-right" style={buttonStyle}>
                       Cancel
                    </button>

                    <button type="button" className="btn btn-success pull-right" onClick={this.onCancelClick.bind(this)} style={buttonStyle}>
                        {/*<span className="glyphicon glyphicon-save"></span>*/} Save
                    </button>
                </span>

            );
        }

            return(
                <span>
                    <button type="button" className="btn btn-danger pull-right" style={buttonStyle}>
                        {/*<span className="glyphicon glyphicon-remove"></span>*/} Delete
                    </button>

                    <button type="button" className="btn btn-warning pull-right" onClick={this.onEditClick.bind(this)} style={buttonStyle}>
                        {/*<span className="glyphicon glyphicon-edit"></span>*/} Edit
                    </button>
                </span>
            );

    }

     render() {
         const optionsStyle={
             'margin':'10px',
             'align':'right',
             'color':'red'
         };
         return (
             <div className="container">

                 <h3>{this.props.task}<span style={optionsStyle}>{this.renderActionsSection()}</span></h3>
                 <hr/>
             </div>
         );
     }

     onEditClick(){
        this.setState({isEditing:true});
     }

    onCancelClick(){
         this.setState({isEditing:false});
    }
}