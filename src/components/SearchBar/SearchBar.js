import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    handleTermChange(e) {
        // Sets state of the search bar's term the the event's target value
        const newSearchTerm = e.target.value;
        this.props.onSearch(newSearchTerm);
        /** OR 
         * search(newSearchTerm);
         *  OR
         * search(e.target.value);
         */
    }

    search(e) {
        const searchTerm = e.target.value;
        this.props.onSearch(searchTerm);
    }

    render() {
        return (
            <div className="SearchBar">
                <input 
                    placeholder="Enter A Song, Album, or Artist" 
                    onSearch={this.search} 
                    onChange={this.handleTermChange} />
                <a>SEARCH</a>
            </div>
        );
    }

}