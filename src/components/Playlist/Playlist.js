import React, { Component } from 'react';
import './Playlist.css';

export default class Playlist extends Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'}/>
                {/* <!-- Add a TrackList component --> */}
                <a className="Playlist-save">SAVE TO SPOTIFY</a>
            </div>
        )
    }
}