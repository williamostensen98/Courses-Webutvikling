import React, {Component} from 'react';
import SearchBar from './SearchBar';
import Button from './Button'


class Landing extends Component {
    render() {
        return (
            <div className="container">
                <SearchBar />
                <Button />
            </div>
        )
    }
}

export default Landing