import React, {Component} from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import "../css/landing.css"
import CoursesContainer from "./CoursesContainer"
import Spinner from 'react-bootstrap/Spinner'



export class Landing extends Component {
    render() {
        const { loading } = this.props;
        return (
            <div className="container">
                <SearchBar />
                {<CoursesContainer />}
                
            </div>
        )
    }
}

// puts the loading state into a loading prop
const mapStateToProps = (state) => ({ 
    loading: state.courses.loading
})
export default connect(mapStateToProps)(Landing)