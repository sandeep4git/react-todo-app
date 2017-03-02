/**
 * Created by sandeeptc on 2/22/17.
 */

import _ from 'lodash';

import React from 'react';
import {TodoListHeader} from './TodoListHeader';
import {TodoListItem} from './TodoListItem';
import {CreateTodo} from './createTodo';

export class TodoList extends React.Component {
    renderItems() {
        return _.map(this.props.todos, (todo, index) => <TodoListItem key={index}{...todo} />);
    }

    render() {
        const style={
            'backgroundColor':'',

        };
        console.log(this.props.todos);
        return (

            <div className="container" >
                <h4>Items To-Do</h4>
                {this.renderItems()}
            </div>



        );
    }


}
