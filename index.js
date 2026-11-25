const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Connected successfully to server");

        const db = client.db('fruits');
        const collection = db.collection('apple');

        const mydata = {
            name: 'anitha',
            website: 'www.priya.com'
        };

        const result = await collection.insertOne(mydata);

        console.log("Document inserted with _id: " + result.insertedId);

    } catch (err) {
        console.error("Error error:", err);
    } finally {
        await client.close();
    }
}

run();