import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track';

// map method on tracks props renders set of Track components 
export default class TrackList extends Component {
    render() {
        return (
            <div className="TrackList">
                {
                    this.props.tracks.map(track => {
                        return (
                            <Track track={ track }
                            key={ track.id } />
                        );
                    })
                }
                <p>Track1, Artist1</p>
                <p>Track2, Artist2</p>
                <p>Track3, Artist3</p>
            </div>
        );
    }
};
