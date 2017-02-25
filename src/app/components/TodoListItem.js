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
        if(this.state.isEditing){
            return(
                <span>
                    <button type="button" className="btn btn-default" onClick={this.onCancelClick.bind(this)}>
                        <span className="glyphicon glyphicon-save"></span>
                    </button>

                    <button type="button" className="btn btn-default">
                       Cancel
                    </button>
                </span>

            );
        }

            return(
                <span>
                    <button type="button" className="btn btn-default" onClick={this.onEditClick.bind(this)}>
                        <span className="glyphicon glyphicon-edit"></span>
                    </button>

                    <button type="button" className="btn btn-default">
                        <span className="glyphicon glyphicon-remove"></span>
                    </button>
                </span>
            );

    }

     render() {
         return (
             <div className="container">
                 <h3>{this.props.task}{this.renderActionsSection()}</h3>

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