import mongoose from 'mongoose';
import config from 'config';

class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: mongoose.Connection;

    static connect(): mongoose.Connection {
        
        console.log('DataAccess Trying to connected to mongodb.');
        if (this.mongooseInstance) return this.mongooseInstance;

        this.mongooseConnection = mongoose.connection;
        this.mongooseConnection.once('open', () => {
            console.log('DataAccess Connected to mongodb.');
        });

        // let host = config.get('application.database.host');
        let host = '127.0.0.1';
        let name = 'mytest';
        mongoose.set('debug', true);
        //this.mongooseInstance = mongoose.connect('mongodb://admin:buildinfoadmin123@' + host + '/' + name + '');
        this.mongooseInstance = mongoose.connect('mongodb://' + host + '/' + name + '');
        return this.mongooseInstance;
    }
}

DataAccess.connect();
export = DataAccess;
