import {UserRepository} from './../dataaccess/repository/UserRepository'

export class UserService {

    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    read(callback: (error: any, result: any) =>  void) {
        this.userRepository.retrieve('', (err, res) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, res);
            }
        });
    }

    write(callback: (error: any, result: any) =>  void) {
        let user = {
            name: 'Abhijeet Giram',
            id: 262
        };
        this.userRepository.create('', (err, res) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, res);
            }
        });
    }
}