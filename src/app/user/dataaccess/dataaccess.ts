import * as Mongoose from 'mongoose';
let config = require('config');

class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;

    static connect(): Mongoose.Connection {
        console.log('Connected to mongodbxxxxxxxxxx.');
        if (this.mongooseInstance) return this.mongooseInstance;

        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once('open', () => {
            console.log('Connected to mongodb.');
        });

        // let host = config.get('application.database.host');
        let host = '127.0.0.1';
        let name = 'mytest';
        Mongoose.set('debug',true);
        //this.mongooseInstance = Mongoose.connect('mongodb://admin:buildinfoadmin123@' + host + '/' + name + '');
        this.mongooseInstance = Mongoose.connect('mongodb://' + host + '/' + name+'');
        return this.mongooseInstance;
    }
}
DataAccess.connect();
export = DataAccess;
