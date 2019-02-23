import express from 'express';
import bodyParser from 'body-parser';

import {MethodOverride} from './../MethodOverride';
import {BaseRoutes} from './../../routes/base/BaseRoutes';

export class MiddlewareBase {
    static get configuration() {
        const app = express();
        app.use(bodyParser.json({limit: '50mb'}));
        app.use(MethodOverride.configuration());
        app.use(new BaseRoutes().routes);

        return app;
    }
}