import React from 'react'
import BooksWall from './Components/BooksWall'
import Search from './Components/Search'
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
                <div className="list-books-title">
                    <h1>My current Reads</h1>
                </div>
                <Route exact path="/"
                       render={() => (
                           <BooksWall books={this.state.books} updateShelf={this.updateShelf}/>
                       )}
                />
                <Route exact path="/search"
                       render={() => (
                           <Search updateShelf={this.updateShelf}/>
                       )}
                />
            </div>
        )
    }
}

export default BooksApp
