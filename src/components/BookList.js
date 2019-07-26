"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import BookActions from '../actions/BookActions';
import { AddBookForm } from './AddBookForm';
import { UpdateBookForm } from './UpdateBookForm';


export class BookList extends React.Component {

    constructor() {
        super()
        this.state = {
            isUpdate: false,
            isAdd: false,
            book: null
        }
        this.isUpdating = this.isUpdating.bind(this)
        this.isAdding = this.isAdding.bind(this)
    }

    isUpdating(book) {
        this.state.book = book,
            this.setState((prevState) => {
                return {
                    isUpdate: !prevState.isUpdate
                }
            })

    }

    isAdding(book) {
        this.book = book,
            this.setState((prevState) => {
                return {
                    isAdd: !prevState.isAdd
                }
            })

    }

    createBookRow(book, index) {
        return (
            <tr key={book.book_id}>
                <td> {index + 1} </td>
                <td> {book.title} </td>
                <td> {book.first_name + ' ' + book.last_name} </td>
                <td> {book.publisher_name} </td>
                <td className="btn-toolbar">
                    <button id="update"
                        className="update btn btn-warning btn-sm"
                        onClick={() => { this.isUpdating(book) }}>update</button>
                    <button className="btn btn-danger btn-rounded btn-sm buttonDelete"
                        onClick={() => BookActions.deleteBook(book.book_id)}>delete</button>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <div>
                <h1>Books</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Publisher</th>
                            <th>Update / Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.bookList.map(this.createBookRow, this)}
                        <tr><td><button onClick={() => this.isAdding(this.book)}>Add</button></td></tr>
                    </tbody>
                </table>
                <div>
                    {
                        this.state.isUpdate && <UpdateBookForm book={this.state.book} />
                    }
                </div>
                {
                    this.state.isAdd && <AddBookForm />
                }
            </div>
        );
    }
}

BookList.propTypes = {
    bookList: PropTypes.array.isRequired
};



