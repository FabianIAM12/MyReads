import React, {Component} from 'react';
import Shelf from "./Shelf";
import SearchLink from "./SearchLink";


class BooksWall extends Component {
    render() {
        const { books, updateShelf } = this.props;

        return (
            <div className="list-books">
                <div className="list-books-content">
                    <div>
                        <Shelf books = {books.filter(book => book.shelf === 'currentlyReading')}
                               updateShelf = { updateShelf } name="Currenty Reading"/>
                        <Shelf books = {books.filter(book => book.shelf === 'wantToRead')}
                               updateShelf = { updateShelf } name="Want To Read"/>
                        <Shelf books = {books.filter(book => book.shelf === 'read')}
                               updateShelf = { updateShelf } name="Read"/>
                    </div>
                    <SearchLink/>
                </div>
            </div>
        )
    }
}

export default BooksWall
