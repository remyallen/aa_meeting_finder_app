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
            "transport": Boolean
        },
        {
            collection: 'meeting_information'
        }
    ));

var AA_Meeting = mongoose.model('AA_Meeting');

app.get('/get_meeting/:name', function(req, res) {
    //console.log('here');
    AA_Meeting.find({"name" : req.params.name}, function(err, data) {
        //results = [];
        //data.meetings.forEach
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
        //console.log(data);
    });
});

app.get('/data', function(req, res) {
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