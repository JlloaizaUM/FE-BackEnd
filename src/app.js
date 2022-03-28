import express from "express";
import config from "./config";
import pageRoutes from "./routes/page.routes";
import loginRoutes from "./routes/login.routes";
import restaurantRoutes from "./routes/restaurant.routes"

const app = express();

app.set('port', config.port);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "https://bonapettit.com.co/");
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, *');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(pageRoutes);
app.use(loginRoutes);
app.use(restaurantRoutes);

export default app

