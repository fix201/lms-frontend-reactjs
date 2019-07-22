
import BookApi from '../api/bookApi';
import Dispatcher from '../dispatcher/appDispatcher';
import axios from 'axios'

//Here add all crud actions for Books

const BooksActions = {
    readBooks: function(){
        const bookList = BookApi.getAllBooks();

        Dispatcher.dispatch({ 
            actionType: 'read_books',
            data: bookList
        });
    }
}

module.exports = BooksActions;