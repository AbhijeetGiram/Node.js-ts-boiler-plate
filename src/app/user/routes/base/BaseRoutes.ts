import express from 'express';
import {UserRoutes} from './../UserRoutes';

const app = express();

export class BaseRoutes {
    get routes() {
        app.use('/api/users/', new UserRoutes().routes);

        return app;
    }
}