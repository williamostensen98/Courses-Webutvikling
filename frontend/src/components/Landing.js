import React, {Component} from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import "../css/landing.css"
import CoursesCointainer from "./CoursesContainer"
import Spinner from 'react-bootstrap/Spinner'


export class Landing extends Component {
    render() {
        const { loading } = this.props;
        return (
            <div className="container">
                <SearchBar />
                {/* If the site is loading a spinner will be displayed and when it is done loading i will display a coursecontainer */}
                {loading ? <div className="spinner-container"><Spinner id="loading-spinner" animation="border" variant="light" /></div>: <CoursesCointainer/>}
            </div>
        )
    }
}

// puts the loading state into a loading prop
const mapStateToProps = (state) => ({ 
    loading: state.courses.loading
})
export default connect(mapStateToProps)(Landing)