
import PublisherApi from '../api/PublisherApi';
import Dispatcher from '../dispatcher/appDispatcher';

//Here add all crud actions for Publishers

const PublishersActions = {
    readPublishers: function () {
        PublisherApi.getAllPublishers((publisherList) => {
            Dispatcher.dispatch({
                actionType: 'read_publishers',
                data: publisherList
            })
        })
    }
}

module.exports = PublishersActions;