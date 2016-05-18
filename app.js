var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var connectionString = require('./modules/connection');
var keys = require('./config/keys');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//mongoose.connect('mongodb://localhost/aa_meeting_finder');
mongoose.connect(process.env.MONGODB_URI);
 //mongoose.connect('mongodb://remy_allen:jfc9r64v@ds047762.mlab.com:47762/heroku_kmr7fkdj');

mongoose.model(
    'AA_Meeting',
    new Schema({

            "name": String,
            "address": String,
            "city_state": String,
            "transport": Boolean,
            "meetings.time": String,
            "meetings.day": String,
            "latitude": String,
            "longitude": String
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
    AA_Meeting.find({$or:[{name: req.body.name},{"meetings.time": req.body.time},{"meetings.day": req.body.day}]}, function(err, data) {

        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
    });
});

app.get('/get_coordinates', function(req, res) {
    AA_Meeting.find({}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }
        res.send(data);
    });
});


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

app.get('/api_key', function(req, res) {
    res.send(keys);
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
