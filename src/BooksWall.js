import React, {Component} from 'react';
import Shelf from "./Shelf";


class BooksWall extends Component {
    render() {
        const books = this.props.books;
        /*
        const allBooks = this.props.allBooks
        const currentBooks = allBooks.filter(book => book.shelf === 'currentlyReading')
        const wantToRead = allBooks.filter(book => book.shelf === 'wantToRead')
        const alreadyRead = allBooks.filter(book => book.shelf === 'read')
        */

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf books = {books} name="Currenty Reading"/>
                        <Shelf books = {books} name="Want To Read"/>
                        <Shelf books = {books} name="Read"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BooksWall
