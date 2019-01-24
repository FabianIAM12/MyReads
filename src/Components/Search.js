import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";


class Search extends Component {
    state = {
        query: '',
        books: []
    }

    updateQuery = (query) => {
        this.setState({query: query.trim()})
        this.search(query)
    }

    search(query) {
        if (query) {
            BooksAPI.search(query).then((books) => {
                if (books.error) {
                    this.setState({books: []});
                } else {
                    this.setState({
                        books
                    })
                }
            })
        }else{
            console.log('here')
            this.setState({books: []});
        }
    }

    render() {
        const cursor = {
            cursor: 'pointer'
        };
        const {books} = this.state
        const {updateShelf} = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button style={cursor} className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input onChange={(event) => this.updateQuery(event.target.value)} type="text"
                               placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map(book => (
                            <Book book={book}
                                  key={book.id}
                                  updateShelf={updateShelf}
                                  disableNone={true}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search
