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
          name: 'hit me baby',
          artist: 'britney spears',
          album: 'hit me'
        }, {
          name: 'Eventually',
          artist: 'Tame Impala',
          album: 'Currents'
        }, {
          name: 'Keep on Lying',
          artist: 'Tame Impala',
          album: 'Lonerism'
        }
      ]
    };
  }



  render() {
    return (
      <div>
        
          <h1>Ja<span className="highlight">mm</span>ing<span className="highlight">-</span>Re<span className="highlight">vam</span>ped</h1>
          <div className="App">
            {/* <!-- Add a SearchBar component --> */}
            <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults} />
              {/* <!-- Add a Playlist component --> */}
            </div>
          </div>

      </div>
    );
  }
}

export default App;
