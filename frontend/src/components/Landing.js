import React, {Component} from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import "../css/landing.css"
import CoursesContainer from "./CoursesContainer"



export class Landing extends Component {
    render() {

        return (
            <div className="container">
                <SearchBar />
                {<CoursesContainer />}
                
            </div>
        )
    }
}

export default (Landing)