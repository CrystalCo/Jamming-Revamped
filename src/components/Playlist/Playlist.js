import React, { Component } from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

export default class Playlist extends Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e) {
        const newPlaylistName = e.target.value;
        this.props.onNameChange(newPlaylistName);
    }

    render() {
        return (
            <div className="Playlist">
                <input 
                    defaultValue={'New Playlist'} 
                    onChange={this.handleNameChange} />
                    
                <TrackList 
                    tracks={this.props.playlistTracks} 
                    onRemove={this.props.onRemove} />
                <a className="Playlist-save">SAVE TO SPOTIFY</a>
            </div>
        )
    }
}