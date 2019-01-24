import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class SearchLink extends Component {
    render() {
        const cursor = {
            cursor: 'pointer'
        };

        return (
            <div className="open-search">
                <Link to='/search'>
                    <button style={cursor}>Add a book</button>
                </Link>
            </div>
        )
    }
}

export default SearchLink
