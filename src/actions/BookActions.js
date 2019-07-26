
import BookApi from '../api/BookApi';
import Dispatcher from '../dispatcher/appDispatcher';

//Here add all crud actions for Books

const BooksActions = {
    readBooks: function () {
        BookApi.getAllBooks((BookList) => {
            Dispatcher.dispatch({
                actionType: 'read_books',
                data: BookList
            })
        })
    },

    deleteBook: (bookId) => {
        BookApi.deleteBook(bookId, (res) => {
            Dispatcher.dispatch({
                actionType: 'delete_book',
                status: res
            })
        })
    },

    updateBook: (book) => {
        BookApi.updateBook(book, (res) => {
            Dispatcher.dispatch({
                actionType: 'update_book',
                status: res
            })
        })
    },

    addBook: (book) => {
        BookApi.addBook(book, (res) => {
            Dispatcher.dispatch({
                actionType: 'add_book',
                status: res
            })
        })
    }
}

module.exports = BooksActions;