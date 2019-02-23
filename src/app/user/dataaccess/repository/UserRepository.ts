import {RepositoryBase} from './base/repository.base';
import {UserSchema} from './../schema/UserSchema';
import {User} from './../mongoose/User';
import mongoose from 'mongoose';
const userModel = mongoose.model('myusers');

export class UserRepository extends RepositoryBase<User> {

    constructor(){
        super(userModel);
    }

}