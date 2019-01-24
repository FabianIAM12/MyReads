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
        BooksAPI.search(query).then((books) => {
            console.log(books)
            if (!books.error) {
                this.setState({
                    books
                })
            } else {
                this.setState({searchedBooks: []});
            }
        })
    }

    render() {
        const cursor = {
            cursor: 'pointer'
        };

        const {query, books} = this.state
        const {updateShelf} = this.props

        if (this.state.query) {
            this.search(query)
        }

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
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search
