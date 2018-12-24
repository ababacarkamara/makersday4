const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');
    config = require('./DB');

    const TalentRoute = require('./routes/talent.route');

    mongoose.Promise = global.Promise;
    mongoose.connect (config.DB, {userNewUrlParser: true }).then(
        () => { console.log('Database connected') },
        err => { console.log('Can not connect to database' +err)}
    );

    const app = express();
    app.use(bodyParser.json());
    app.use(cors.json());
    app.use('/talent', talentRoute);
    const port = process.env.port || 4000;

    const server = app.listen(function(){
        console.log('Listening on port ' + port);
    });