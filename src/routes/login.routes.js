import { Router } from 'express';
import * as login from '../controllers/login.controller';

const router = Router();

router.post('/login-user', login.loginUser);


export default router