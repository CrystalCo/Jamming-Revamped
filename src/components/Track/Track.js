import React, { Component } from 'react';
import './Track.css';

export default class Track extends Component {
    constructor(props) {
        super(props);

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }

    renderAction() {
        return this.props.isRemoval ? <a onClick={this.removeTrack} >-</a> : <a onClick={this.addTrack} className="Track-action" >+</a>;
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p> {this.props.track.artist} | {this.props.track.album} </p>
                </div>
                {this.renderAction()}
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
