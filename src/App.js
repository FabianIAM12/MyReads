import React from 'react'
import BooksWall from './BooksWall'
import { Route } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((response) => this.setState({ books: response}))
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/"
               render={() => (
                   <BooksWall books={this.state.books}/>
               )}
        />
      </div>
    )
  }
}

export default BooksApp
