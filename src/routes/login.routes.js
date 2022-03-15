import { Router } from 'express';
import * as login from '../controllers/login.controller';

const router = Router();

router.post('/login', login.loginUser);

router.post('/list', login.list);

router.post('/signup', login.signup);


export default router