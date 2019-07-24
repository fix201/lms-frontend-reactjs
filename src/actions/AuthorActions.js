
import AuthorApi from '../api/AuthorApi';
import Dispatcher from '../dispatcher/appDispatcher';

//Here add all crud actions for Authors

const AuthorsActions = {
    readAuthors: function () {
        AuthorApi.getAllAuthors((authorList) => {
            Dispatcher.dispatch({
                actionType: 'read_authors',
                data: authorList
            })
        })
    },

    deleteAuthor: (authorId) => {
        AuthorApi.deleteAuthor(authorId, (res) => {
            Dispatcher.dispatch({
                actionType: 'delete_author',
                status: res
            })
        })
    },

    updateAuthor: (author) => {
        AuthorApi.updateAuthor(author, (res) => {
            Dispatcher.dispatch({
                actionType: 'update_author',
                status: res
            }) 
        })
    },

    addAuthor: (author) => {
        AuthorApi.addAuthor(author, (res) => {
            Dispatcher.dispatch({
                actionType: 'add_author',
                status: res
            })
        })
    }

}

module.exports = AuthorsActions;