/**
 * Created by sandeeptc on 2/23/17.
 */

import React from 'react';

export  class CreateTodo extends React.Component{

    render(){
        console.log("Hello from the createTodo");
        return(
          <div className="container">
                <h3>Create TASK</h3>
                <input type="text"/>
                <button type="button" className="btn btn-default">
                    <span className="glyphicon glyphicon-plus"></span>
                </button>
              <hr/>
          </div>
        );
    }

}

