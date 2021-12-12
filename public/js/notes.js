const {Datastore} = require('@google-cloud/datastore')

const datastore = new Datastore()

let notes = {
    key: new String(),
    title: new String(),
    content: new String(),
    retrieveNote: (title = new String()) => {
        
    },
    createNote: () => {

    },
    updateNote: () => {

    },
    deleteNote: () => {

    }
}

module.exports = notes