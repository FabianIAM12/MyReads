import React, {Component} from 'react';
import Shelf from "./Shelf";


class BooksWall extends Component {
    render() {
        const books = this.props.books;

        return (
            <div className="list-books">
                <div className="list-books-content">
                    <div>
                        <Shelf books = {books.filter(book => book.shelf === 'currentlyReading')} name="Currenty Reading"/>
                        <Shelf books = {books.filter(book => book.shelf === 'wantToRead')} name="Want To Read"/>
                        <Shelf books = {books.filter(book => book.shelf === 'read')} name="Read"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BooksWall
