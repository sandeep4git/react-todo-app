/**
 * Created by sandeeptc on 2/21/17.
 */

import React from 'react';
import { render } from 'react-dom';

import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

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
            <TodoList todos={this.state.todos}/>
            </div>
        );
    }

}

render(<App/>, document.getElementById("app"));