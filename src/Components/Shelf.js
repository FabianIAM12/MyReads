import React, {Component} from 'react';
import Book from "./Book";


class Shelf extends Component {
    render() {
        const {books, name, updateShelf} = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                <div className="bookshelf-books">
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

export default Shelf
