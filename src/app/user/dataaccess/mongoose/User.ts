import * as mongoose from "mongoose";
import userModel = require("./../model/UserModel");

interface User extends userModel, mongoose.Document {
    _id: string;
}
export = User;
