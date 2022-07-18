const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const uri = "mongodb+srv://mongo:mongo@cluster0.5wko0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const client = new MongoClient(uri);

// Database Name
const dbName = 'myProject';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');
    // db.collection.insertOne({name:'abhi'})
    // const insertResult =  collection.insertMany([{ a: 4 }, { a: 5 }]);
    // console.log('Inserted documents =>', insertResult);
    // const updateDoc = collection.updateOne({a:3},{$set:{a:33}})
    // console.log('updateDoc',updateDoc)

    // const insertResult =  collection.insertMany([{ a: 4 }, { a: 5 }]).then(el=>console.log('success1')).catch(el=>console.log('fail1'));
    // console.log('Inserted documents =>', insertResult)
    // const updateDoc = collection.updateOne({a:3},{$set:{a:33}}).then(el=>console.log('success2')).catch(el=>console.log('fail2'));
    // console.log('updateDoc',updateDoc)

    // Promise.all([collection.insertMany([{ a: 6 }, { a: 7 }]), collection.updateOne({a:33},{$set:{a:333}}) ])
    Promise.all([collection.updateOne({a:333},{$set:{a:34}}).then(el=>console.log('success2')).catch(el=>console.log('fail2')),
    collection.updateOne({a:2},{$set:{a:22}}).then(el=>console.log('success2')).catch(el=>console.log('fail2')),
])

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
//   .finally(() => client.close());