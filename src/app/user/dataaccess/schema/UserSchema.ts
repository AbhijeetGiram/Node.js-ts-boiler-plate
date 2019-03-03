//import mongoose from 'mongoose';
import DataAccess from '../dataaccess';
 import {Schema} from 'mongoose';
import {User} from './../mongoose/User'
// import {UserModel} from './../model/UserModel';

 let mongoose = DataAccess.mongooseInstance;
 let mongooseConnection = DataAccess.mongooseConnection;

export class UserSchema {
    static get schema() {
        let schema = new Schema({
            name: {
                type: String
            },
            roll_id: {
                type: Number
            }
        });
        return schema;
    }
}

let schema = mongoose.model('myusers', UserSchema.schema);

module.exports = schema;
