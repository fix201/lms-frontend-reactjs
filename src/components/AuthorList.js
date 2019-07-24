"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import AuthorActions from '../actions/AuthorActions';
import {AddAuthorForm} from './AddAuthorForm';
import {UpdateAuthorForm} from './UpdateAuthorForm';

export class AuthorList extends React.Component {

    constructor() {
        super()
        this.state = {
            isUpdate: false,
            isAdd: false,
            author: null
        }
        this.isUpdating = this.isUpdating.bind(this)
        this.isAdding = this.isAdding.bind(this)
    }

    isUpdating(author) {
        this.state.author = author,
        this.setState((prevState) => {
            return {
                isUpdate: !prevState.isUpdate
            }
        })
        
    }

    isAdding(author) {
        this.author = author,
        this.setState((prevState) => {
            return {
                isAdd: !prevState.isAdd
            }
        })
        
    }

    createAuthorRow(author, index) {

        return (
            <tr key={author.author_id}>
                <td> {index + 1} </td>
                <td> {author.first_name} </td>
                <td> {author.last_name} </td>
                <td className="btn-toolbar">
                    <button id="update" data-toggle="modal" data-target="#edit" data-uid="1"
                        className="update btn btn-warning btn-sm"
                        onClick={() => { this.isUpdating(author) }}>update</button>
                    <button className="btn btn-danger btn-rounded btn-sm buttonDelete" data-toggle="modal" data-target="#modalDelete"
                        onClick={() => AuthorActions.deleteAuthor(author.author_id)}>delete</button>
                </td>
            </tr>

        );
    }

    render() {
        return (
            <div>
                <h1>Authors</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Update / Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.authorList.map(this.createAuthorRow, this)}
                        <tr><td><button onClick={()=>this.isAdding(this.author)}>Add</button></td></tr>
                    </tbody>
                </table>
                {
                    this.state.isAdd && <AddAuthorForm /> ||  this.state.isUpdate && <UpdateAuthorForm author={this.state.author}/>
                }
            </div>
        );
    }
}

AuthorList.propTypes = {
    authorList: PropTypes.array.isRequired
};



