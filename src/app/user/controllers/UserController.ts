import express from 'express';
import mongoose from 'mongoose';

// const userModel = mongoose.model('myusers');

export class UserController {

    read(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
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
        let user = {
            name: 'Abhijeet Giram',
            id: 262
        };
        try {
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