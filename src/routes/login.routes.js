import { Router } from 'express';
import * as login from '../controllers/login.controller';

const router = Router();

router.post('/login-user', login.loginUser);

router.post('/register-user', login.signup);


export default router