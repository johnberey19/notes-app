const {Storage} = require('@google-cloud/storage')

const projectId = "notes-app-project-334815"
const keyFilename = "gcloud/credentials.json"
const storage = new Storage({projectId,keyFilename})

async function listbBucket(){
    try {
        const [buckets] = await storage.getBuckets()
        console.log('-----------Buckets-----------')
        buckets.forEach(bucket => {
            console.log(bucket.name)
        });
    } catch (err) {
        console.error('ERROR: ',err)
    }
}
listbBucket()
