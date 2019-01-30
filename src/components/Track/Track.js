import React, { Component } from 'react';
import './Track.css';

export default class Track extends Component {

    renderAction() {
        return isRemoval ? <a>-</a> : <a>+</a>;
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{/* <!-- track name will go here --> */} </h3>
                    <p> {/* <!-- track artist will go here--> | <!-- track album will go here --> */} </p>
                </div>
                <a className="Track-action">{/* #{renderAction()} */}</a>
            </div>
        )
    }
}

/*
# <!-- + or - will go here -->
Create a method called renderAction that 
displays a - anchor tag if the isRemoval property is true, 
and a + anchor tag if the isRemoval property is false. 
*/
