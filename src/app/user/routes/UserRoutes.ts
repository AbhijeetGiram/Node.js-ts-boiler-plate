import express = require("express");
import UserController = require("../controllers/UserController");

const router = express.Router();

class UserRoutes {

    private userController: UserController;

    constructor() {
        this.userController = new UserController();
    }

    get routes(): express.Router {
        let controller = this.userController;
        
        router.post('/', controller.create);
        router.get('/', controller.retrieve);

        return router;
    }
}


Object.seal(UserRoutes);
export = UserRoutes;