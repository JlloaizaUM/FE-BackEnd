import { Router } from 'express';
import * as users from '../controllers/user.controller';

const router = Router();

router.get('/user', users.getUsers);

export default router
