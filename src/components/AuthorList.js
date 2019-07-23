"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import AuthorActions from '../actions/AuthorActions';

function createAuthorRow(author, index) {
    return (
        <tr key={author.author_id}>
            <td> {index + 1} </td>
            <td> {author.first_name} </td>
            <td> {author.last_name} </td>
            <td className="btn-toolbar"><button className="btn btn-success btn-rounded btn-sm my-0">update</button>
                <button className="btn btn-danger btn-rounded btn-sm my-0" onClick={() => AuthorActions.deleteAuthor(author.author_id)}>delete</button>
            </td>
        </tr>
    );
}

export function AuthorList(props) {
    var index = 0;
    return (
        <div>
            <h1>Authors</h1>
            <table className="table table-borderless table-hover table-editable">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Update / Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {props.authorList.map(createAuthorRow, index)}
                </tbody>
            </table>
        </div>
    );
}

AuthorList.propTypes = {
    authorList: PropTypes.array.isRequired
};



