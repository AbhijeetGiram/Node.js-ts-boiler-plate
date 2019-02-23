import {RepositoryBase} from './base/repository.base';
// import {UserSchema} from './../schema/UserSchema';
let UserSchema: any;

export class UserRepository extends RepositoryBase<any> {

    constructor(){
        super(UserSchema);
    }

}