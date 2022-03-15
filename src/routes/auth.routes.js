import { Router } from 'express';
import * as users from '../controllers/auth.controller';

const router = Router();

router.get('/login', users.getUsers);

export default router
