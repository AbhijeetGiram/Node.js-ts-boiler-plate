import * as express from "express";
import UserService = require("../services/UserService");

class UserController {
    private localUserService: UserService;
    constructor() {
        this.localUserService = new UserService();
    }

    public create(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const user = req.body;
            const userService = new UserService();
            userService.create(user, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in creating User Data : ", e);
        }
    }

    public retrieve(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const userService = new UserService();
            userService.retrieve((error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in creating User Data . ", e);
        }
    }
}

export = UserController;
