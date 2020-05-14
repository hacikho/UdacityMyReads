import React from 'react';
import { Route } from 'react-router-dom';

import '../App.css';

import * as BooksAPI from '../BooksAPI';
import MainPage from '../page/MainPage';
import SearchPage from '../page/SearchPage';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  updatePageContent() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  componentDidMount() {
    this.updatePageContent();
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    this.updatePageContent();
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MainPage
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )} />
        <Route exact path="/home" render={() => (
          <MainPage
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )} />
        <Route exact path="/searchpage" render={() => (
          <SearchPage
            changeShelf={this.changeShelf}
            books={this.state.books}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
