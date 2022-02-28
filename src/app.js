import express from "express";
import config  from "./config";
import usersRoutes from "./routes/users.routes";

const app = express();

app.set('port', config.port);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(usersRoutes);

export default app

