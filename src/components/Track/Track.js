import React, { Component } from 'react';
import './Track.css';

export default class Track extends Component {

    // renderAction() {
    //     return isRemoval ? <a>-</a> : <a>+</a>;
    // }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p> {this.props.track.artist} | {this.props.track.album} </p>
                </div>
                <a className="Track-action" href="#">{/* #{renderAction()} */}</a>
                <button>+ Track - </button>
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
