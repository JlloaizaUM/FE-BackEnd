import express from "express";
import config from "./config";
import usersRoutes from "./routes/users.routes";
import loginRoutes from "./routes/login.routes";
import registerRoutes from "./routes/register.routes";

const app = express();

app.set('port', config.port);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(usersRoutes);
app.use(loginRoutes);
app.use(registerRoutes);

export default app

