import DataAccess from '../dataaccess';
import {Schema} from 'mongoose';

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {
    static get schema() {
        let schema = new Schema({
            name: {
                type: String
            },
            id: {
                type: Number
            }
        });
        return schema;
    }
}

let schema = mongoose.model('myusers', UserSchema.schema);
module.exports = schema;
