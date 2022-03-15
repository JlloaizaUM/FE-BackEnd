import { Router } from 'express';
import { restart } from 'nodemon';
import * as register from '../controllers/register.controller';

const router = Router();

router.post('/register-user', (req,res) =>{
    let clientData = req.body
    let fireRecord =[]
    clientData.forEach(client=> {
        fireRecord.push({

        })

    });
    res.send('entregado');
});



export default router