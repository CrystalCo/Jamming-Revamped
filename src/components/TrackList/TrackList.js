import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track';

export default class TrackList extends Component {
    render() {
        return (
            <div className="TrackList">
                {/* map method renders set of Track components */}
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
