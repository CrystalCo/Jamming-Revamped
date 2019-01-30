import React, { Component } from 'react';
import './TrackList.css';

export default class TrackList extends Component {
    render() {
        return (
            <div className="TrackList">
                <p>Track1, Artist1</p>
                <p>Track2, Artist2</p>
                <p>Track3, Artist3</p>
                {/* <!-- You will add a map method that renders a set of Track components  --> */}
            </div>
        )
    }
}