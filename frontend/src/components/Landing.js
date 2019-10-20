import React, {Component} from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import CoursesCointainer from "./CoursesContainer"
import Spinner from 'react-bootstrap/Spinner'


class Landing extends Component {
    render() {
        const {loading} = this.props.loading
        return (
            <div className="container">
                <SearchBar />
                {loading ? <Spinner animation="border" variant="light" />: <CoursesCointainer/>}
            </div>
        )
    }
}

const mapStateToProps = state => ({ 
    loading: state.courses.loading
})
export default connect(mapStateToProps)(Landing)