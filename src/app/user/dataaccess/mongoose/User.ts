import mongoose from 'mongoose';
import {UserModel} from './../model/UserModel';

export interface User extends UserModel, mongoose.Document {
    _id: string;
}
