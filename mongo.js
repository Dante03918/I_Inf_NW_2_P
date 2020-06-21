var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/test', function (err, client) {

    let db = client.db('test');
    db.collection('test').find.toArray(function (err, result) {

        console.log(result)
        client.close();
    })
})