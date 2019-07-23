
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
    }
}

module.exports = AuthorsActions;