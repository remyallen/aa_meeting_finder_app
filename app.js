var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var connectionString = require('./modules/connection');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/aa_meeting_finder');
mongoose.model(
    'AA_Meeting',
    new Schema({
            "name": String,
            "address": String,
            "city_state": String,
            "transport": Boolean,
            "meetings.time": String,
            "meetings.day": String
        },
        {
            collection: 'meeting_information'
        }
    ));

var AA_Meeting = mongoose.model('AA_Meeting');

app.get('/get_meeting_location', function(req, res) {
    AA_Meeting.find({}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
    });
});

app.post('/search', function(req, res) {
    console.log(req.body);
    //AA_Meeting.find({$and:[{name: "Sahara Club"},{"meetings.time": "5:30 pm"},{"meetings.day": "2"}]}, function(err, data) {
    AA_Meeting.find({$or:[{name: req.body.name},{"meetings.time": req.body.time},{"meetings.day": req.body.day}]}, function(err, data) {
    //AA_Meeting.find({"name": req.body.name}, function(err, data) {

        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
    });
});



//app.get('/get_meeting/:name', function(req, res) {
//    //console.log('here');
//    AA_Meeting.find({"name" : req.params.name}, function(err, data) {
//        //results = [];
//        //data.meetings.forEach
//        if(err) {
//            console.log('ERR: ', err);
//        }
//
//        res.send(data);
//        //console.log(data);
//    });
//});

//app.get('/get_time/:time', function(req, res) {
//    AA_Meeting.find({"meetings.time" : req.params.time}, function(err, data) {
//        if(err) {
//            console.log('ERR: ', err);
//        }
//
//        res.send(data);
//    });
//});

app.get('/transport_data', function(req, res) {
    AA_Meeting.find({transport: true}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }
        res.send(data);
    });
});

app.put('/set_transport/:name', function(req, res) {
    AA_Meeting.update({"name": req.params.name},
        {
            $set: {transport: true}

        },
    function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
    }
    );

});






// Serve back static files
app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});