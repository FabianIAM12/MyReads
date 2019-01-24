import React from 'react'
import BooksWall from './Components/BooksWall'
import Search from './Components/Search'
import { Switch, Route } from 'react-router'
import * as BooksAPI from './BooksAPI'
import './App.css'


class BooksApp extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        this.getAllBooks()
    }

    updateShelf = (book, shelf) => {
        console.log(book, shelf);
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
                <Switch>
                    <Route exact path="/"
                           render={() => (
                               <BooksWall books={this.state.books} updateShelf={this.updateShelf}/>
                           )}
                    />
                    <Route exact path="/search"
                           render={() => (
                               <Search pinned_books={this.state.books} updateShelf={this.updateShelf}/>
                           )}
                    />
                </Switch>
            </div>
        )
    }
}

export default BooksApp
