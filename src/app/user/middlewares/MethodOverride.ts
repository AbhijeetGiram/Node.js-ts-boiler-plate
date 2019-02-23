import express from 'express';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';

export class MethodOverride {
    static configuration(): any {
        const app = express();
        app.use(methodOverride('X-HTTP-Method'));
        app.use(methodOverride('X-HTTP-Method-Override'));
        app.use(methodOverride('X-HTTP-Override'));
        app.use(methodOverride('_method'));

        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json({limit: '40mb'}));
        app.use(bodyParser.urlencoded({limit: '40mb', extended: true}));
        app.use(bodyParser.text());
        app.use(compression());
        app.use(cors());
        app.use(bodyParser.json());
        app.use(express.static('src/'));
        return app;
    }
}
