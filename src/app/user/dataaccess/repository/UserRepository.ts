import {RepositoryBase} from './base/repository.base';
import dataAccess  from './../dataaccess';
import {UserSchema} from './../schema/UserSchema';
import {User} from './../mongoose/User';
import mongoose from 'mongoose';
//const userModel = mongoose.model('myusers');
const userModel : any = UserSchema;

export class UserRepository extends RepositoryBase<User> {

    constructor(){
        super(userModel);
    }

}