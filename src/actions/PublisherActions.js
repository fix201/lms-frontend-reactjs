
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
    },

    deletePublisher: (publisherId) => {
        PublisherApi.deletePublisher(publisherId, (res) => {
            Dispatcher.dispatch({
                actionType: 'delete_publisher',
                status: res
            })
        })
    },

    updatePublisher: (publisher) => {
        PublisherApi.updatePublisher(publisher, (res) => {
            Dispatcher.dispatch({
                actionType: 'update_publisher',
                status: res
            })
        })
    },

    addPublisher: (publisher) => {
        PublisherApi.addPublisher(publisher, (res) => {
            Dispatcher.dispatch({
                actionType: 'add_publisher',
                status: res
            })
        })
    }
}

module.exports = PublishersActions;