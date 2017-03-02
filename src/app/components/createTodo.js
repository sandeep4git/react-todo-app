/**
 * Created by sandeeptc on 2/23/17.
 */

import React from 'react';
//import Popup from 'react-popup';

export  class CreateTodo extends React.Component{

    constructor(props){
        super(props);

        this.state={
          error:null
        };
    }

    renderError(){
        if(!this.state.error){
            return null
        }
        return <div style={{color:'red'}}>{this.state.error}</div>

    }

    render(){
        console.log("Hello from the createTodo");
        const style={
            padding:'5px',
            color:'#5584F0'
        };

        const buttonStyle={
            'marginLeft':'10px',
            color:'#5584F0'
        };


        return(
            <form>
                  <div className="container" style={style}>
                        <h4>Create TASK</h4>
                        <input type="text" placeholder="Please type here." ref="createInput"/>
                        <button type="button" className="btn btn-default" onClick={this.handleCreate.bind(this)} style={buttonStyle}>
                            <span className="glyphicon glyphicon-plus"></span>
                        </button>
                      {this.renderError()}
                      <hr/>
                  </div>
            </form>
        );
    }

    handleCreate(){

        //const createInput = this.refs.createInput;
        const task = this.refs.createInput.value;
        const validateInput = this.validateInput(task);

        if(validateInput){

            this.setState({error:validateInput});
            return;
        }

        this.setState({error:null});
        this.props.createTask(task);
        this.refs.createInput.value="";
    }
    validateInput(task){
        if(!task){
            return 'Please enter a task';
        }
        else if(_.find(this.props.todos, todo => todo.task === task)){
            return 'Task already exists';
        }
        else{
            return null;
        }

    }







}

