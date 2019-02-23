import express from 'express';
import path from 'path';
import http from 'http';
import mongoose from 'mongoose';
import {MiddlewareBase} from './app/user/middlewares/base/MiddlewareBase';

const app = express();

app.all('*', (req: any, res: any, next: any) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});

app.use(MiddlewareBase.configuration);

let port = 3001;
var mongooseInstance: any;
var mongooseConnection: mongoose.Connection;
const server = http.createServer(app);
server.listen(port, () => {
    console.log('App is listening on port:' + port);


        console.log('Trying to connected to mongodb.');
        if (this.mongooseInstance) return this.mongooseInstance;

        this.mongooseConnection = mongoose.connection;
        this.mongooseConnection.once('open', () => {
            console.log('Connected to mongodb.');
        });

        let host = '127.0.0.1';
        let name = 'mytest';
        mongoose.set('debug',true);
        this.mongooseInstance = mongoose.connect('mongodb://' + host + '/' + name+'', 
        { useNewUrlParser: true });
});