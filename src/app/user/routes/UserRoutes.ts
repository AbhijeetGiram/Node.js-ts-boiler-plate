import express from 'express';
import UserController from './../controllers/UserController';

const router = express.Router();

export default class UserRoutes {

    private userController: UserController;

    constructor() {
        this.userController = new UserController();
    }

    get routes(): express.Router {
        let controller = this.userController;

        router.get('/', controller.read);
        router.post('/', controller.write);

        return router;
    }
}