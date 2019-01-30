import React, { Component } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      searchResults: [ 
        {
          name: 'colorful nickels',
          artist: 'black moth super rainbow',
          album: 'autumn kaliede'
        }, {
          name: 'Eventually',
          artist: 'Tame Impala',
          album: 'Currents'
        }, {
          name: 'Keep on Lying',
          artist: 'Tame Impala',
          album: 'Lonerism'
        }
      ],
      playlistName: 'Trees',
      playlistTracks: [
        {
          name: 'Sun Lips',
          artist: 'Black Moth Super Rainbow',
          album: 'Dandelion Gum'
        }, {
          name: 'Like a Sundae',
          artist: 'Black Moth Super Rainbow',
          album: 'Cobra Juicy'
        }, {
          name: 'I dreamt i saw you in a dream',
          artist: 'Sunbean Soundmachine',
          album: 'wanderer'
        }
      ]
    };
  }

  // Use the track's id property to check if the current song is in 
  // the playlistTracks state.
// If the id is new, add the song to the end of the playlist.
	// Set the new state of the playlist
  addTrack(track) {

    if (this.state.playlistTracks.filter(playlistTrack => 
      track.id !== playlistTrack.id)) {
        let tracks = this.state.playlistTracks;
        tracks.push(track);
        this.setState({playlistTracks: tracks});
    }
    
  }



  render() {
    return (
      <div>
        
          <h1>Ja<span className="highlight">mm</span>ing<span className="highlight">-</span>Re<span className="highlight">vam</span>ped</h1>
          <div className="App">
            {/* <!-- Add a SearchBar component --> */}
            <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults} />
              <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
            </div>
          </div>

      </div>
    );
  }
}

export default App;
