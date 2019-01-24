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
        this.setState({query: query.trim()});
        this.search(query);
    }

    check_exisiting_shelf(book){
        let shelf = '';
        for (let entry in this.props.pinned_books){
            if (book.id === this.props.pinned_books[entry].id){
                shelf=this.props.pinned_books[entry].shelf;
            }
        }
        return shelf;
    }

    search(query) {
        if (query) {
            BooksAPI.search(query).then((books) => {
                if (query === this.state.query) {
                    if (books.error) {
                        this.setState({books: []});
                    } else {
                        this.setState({
                            books
                        })
                    }
                }
            })
        } else {
            this.setState({books: []});
        }
    }

    render() {
        const cursor = {
            cursor: 'pointer'
        };
        const {books} = this.state;
        const {updateShelf} = this.props;

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
                                  existing_shelf={this.check_exisiting_shelf(book)}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search
