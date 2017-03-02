/**
 * Created by sandeeptc on 2/21/17.
 */


import React from 'react';


export class Header extends React.Component {

    render() {

        const style={
            'backgroundColor':'#5584F0',
            'color':'white'
        };
        return (
            <div className="jumbotron text-center header" style={style}>
                <h2>React Todo App</h2>
            </div>
        );
    }

}

