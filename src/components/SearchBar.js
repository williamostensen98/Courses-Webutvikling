import React from 'react';
import '../css/searchBar.css';
import {searchMovie} from './action'
import { connect } from 'redux';

function SearchBar() {

    onChange = e => {
        this.props.searchMovie(e.target.value)
    }


    return (
        <div className="searchbar-container">
              <input id="searchBar" 
                    type="text" 
                    placeholder="Search.."
                    onChange={this.onChange}
                />
        </div>
    )
}

export default connect(mapStateToProps)(SearchBar)


