import express from 'express';
import mongoose from 'mongoose';

import {UserService} from './../services/UserService'
// const userModel = mongoose.model('myusers');

export class UserController {

    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    read(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            console.log('read req', req);
            this.userService.read((error, result) => {
                if (error) {
                    next(error);
                } else {
                    res.status(200).send(res);
                }
            });
            // userModel.find({}, (err, options) => {
            //     if (err) {
            //         res.send(err);
            //     } else {
            //         res.send(options);
            //     }
            // });
            res.send({'success read': 'success in your request'});
        } catch (e) {
            console.log(e);
            res.send({'error read': 'error in your request'});
        }
    }

    write(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            console.log('read req', req);
            this.userService.write((error, result) => {
                if (error) {
                    next(error);
                } else {
                    res.status(200).send(res);
                }
            });
            // userModel.update({}, {options: user}, (err, updateOptions) => {
            //     if (err) {
            //         res.send(err);
            //     } else {
            //         res.send(updateOptions);
            //     }
            // });
            res.send({'success write': 'success in your request'});
        } catch (e) {
            console.log(e);
            res.send({'error write': 'error in your request'});
        }
    }
}