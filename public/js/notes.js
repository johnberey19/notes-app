const {Datastore} = require('@google-cloud/datastore')

const datastore = new Datastore()

let note = {
    title: new String(),
    content: new String(),
    async retrieveNote(){
        const noteKey = datastore.key('note', this.title)
        const [entity] = await datastore.get(noteKey)

        console.log(entity)
    },
    createNote(){

    },
    updateNote(){

    },
    deleteNote(){

    }
}
module.exports = {note}