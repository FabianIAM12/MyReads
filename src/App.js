import React from 'react'
import BooksWall from './BooksWall'
import {Route} from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((response) => this.setState({books: response}))
    }

    updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            this.getAllBooks()
        })
    }

    getAllBooks() {
        BooksAPI.getAll().then((books) => {
            this.setState({
                books
            })
        })
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/"
                       render={() => (
                           <BooksWall books={this.state.books} updateShelf = { this.updateShelf }/>
                       )}
                />
            </div>
        )
    }
}

export default BooksApp
