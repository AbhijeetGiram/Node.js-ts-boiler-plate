import express = require("express");
import MiddlewareBase = require('./app/user/middlewares/base/MiddlewareBase');
import BaseRoutes = require('./app/user/routes/base/BaseRoutes');

const app = express();
app.set("port", process.env.PORT || 8080);

app.all('*', (req: any, res: any, next: any) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});

app.use(MiddlewareBase.configuration);
app.use(new BaseRoutes().routes);

app.listen(app.get("port"), () => {
    console.log("server started at http://localhost:" + app.get("port"));
});

module.exports = app;