import express from "express"; //se importa el modulo express
import config  from "./config";

const app = express() //ejecuta el modulo para configurar el servidor

//configurar el puerto

app.set('port', config.port)


export default app

