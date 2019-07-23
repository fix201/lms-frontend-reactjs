
import BookApi from '../api/BookApi';
import Dispatcher from '../dispatcher/appDispatcher';

//Here add all crud actions for Books

const BooksActions = {
    readBooks: function () {
        BookApi.getAllBooks((bookList) => {
            Dispatcher.dispatch({
                actionType: 'read_books',
                data: bookList
            })
        })
    }
}

module.exports = BooksActions;