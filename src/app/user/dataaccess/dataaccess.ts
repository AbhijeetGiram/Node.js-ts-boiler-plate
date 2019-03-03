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
        let host = 'localhost';
        let name = 'test';
        mongoose.set('debug', true);
        //this.mongooseInstance = mongoose.connect('mongodb://admin:buildinfoadmin123@' + host + '/' + name + '');
        this.mongooseInstance = mongoose.createConnection ('mongodb://' + host + '/' + name + '');
        return this.mongooseInstance;
    }
}

DataAccess.connect();
export = DataAccess;