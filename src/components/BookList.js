"use strict"

import React from 'react';
import PropTypes from 'prop-types';

function createBookRow(book, index) {
    return (
        <tr key={book.book_id}>
            <td> {index + 1} </td>
            <td> {book.title} </td>
            <td> {book.author_id} </td>
            <td> {book.publisher_id} </td>
        </tr>
    );
}

export function BookList(props) {
    var index = 0;
    return (
        <div>
            <h1>Books</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Publisher</th>
                    </tr>
                </thead>
                <tbody>
                    {props.bookList.map(createBookRow, index)}
                </tbody>
            </table>
        </div>
    );
}


BookList.propTypes = {
    bookList: PropTypes.array.isRequired
};



