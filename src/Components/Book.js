import React, {Component} from 'react';


class Book extends Component {
    render() {
        const authors = this.props.book.authors && this.props.book.authors.join(' & ');
        const book = this.props.book;
        let disableNone = this.props.disableNone;

        let UpdateShelf = this.props.updateShelf;
        let thumbnail = book.imageLinks ? book.imageLinks.thumbnail:"";

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url("${thumbnail})`
                            }}>
                            <div className="book-shelf-changer">
                                <select
                                    onChange={(event) => {
                                        UpdateShelf(
                                            book, event.target.value
                                        )
                                    }}
                                    value={book.shelf || "none"}
                                    >
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    {disableNone !== true && (
                                        <option value="none">None</option>
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{authors}</div>
                </div>
            </li>
        )
    }
}

export default Book
