var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongodb = require('mongodb');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var url = 'mongodb://localhost:27017/simpleapi';
var MongoClient = mongodb.MongoClient;

MongoClient.connect(url, function (err, db) {
    if (err) {
        console.log('Error:', err);
    } else {
        console.log('Connection established to', url);
    }

});

var router = express.Router();
router.use(function(req, res, next) {
    next();
});

router.get('/', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        findAddress(db, function() {
            db.close();
        });
    });
});

var arr1 = [{"address": 'Barrett Pavilion, 2500 Cobb Pl Ln NW #230, Kennesaw, GA 30144'},
    {"address": 'Mall Corners Shopping Center, 2131 Pleasant Hill Rd, Duluth, GA 30096'}];
var insertDocument = function(db, callback) {
    db.collection('simpleapi').insert(arr1, function(err, result) {
        console.log("Inserted data into the simpleapi collection.");
        callback();
    });
};

//POST
router.route('/add')

    .post(function(req, res) {

        MongoClient.connect(url, function(err, db) {
            //assert.equal(null, err);
            insertDocument(db, function() {
                db.close();
            });
        });
    });

var findAddress = function(db, callback) {
    var cursor =db.collection('simpleapi').find();
    cursor.each(function(err, doc) {
        if (doc != null) {
            console.dir(doc);

        } else {
            callback();
        }
    });
};

//GET
router.route('/list')

    .get(function(req, res) {

        MongoClient.connect(url, function(err, db) {
            findAddress(db, function() {
                db.close();
            });
        });
    });

app.use('/api/address', router);

app.listen(process.env.PORT || 8080);
console.log("Running on http://127.0.0.1:8080/");