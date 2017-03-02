/**
 * Created by sandeeptc on 2/21/17.
 */

import React from 'react';
//import { Button } from 'react-bootstrap';
import { render } from 'react-dom';

import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import {CreateTodo} from './components/createTodo';
const todos=[
    {
        task:'Task1',
        isCompleted:'true',
    },

    {
        task: 'Task2',
        isCompleted: 'false'

    }

]

export class App extends React.Component {
    constructor (props){
        super (props);

        this.state={
            todos
        };

    }
    render() {
        return (
           <div><Header />
               <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)}/>
               <TodoList todos={this.state.todos}/>

            </div>
        );
    }

    createTask(task) {
        console.log('<<<<<>>>>>>>'+task);
        this.state.todos.push({
            task,
            isCompleted: false

        });

        this.setState({todos:this.state.todos});
    }

}

render(<App/>, document.getElementById("app"));