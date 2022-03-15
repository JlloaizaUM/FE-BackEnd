import express from "express";
import config from "./config";
import restaurantRoutes from "./routes/restaurant.routes";
import loginRoutes from "./routes/login.routes";

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

app.use(restaurantRoutes);
app.use(loginRoutes);

export default app

