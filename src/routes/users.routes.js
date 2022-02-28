import { Router } from 'express';
import * as users from '../controllers/user.controller';

const router = Router();

router.get('/restaurant/:id', users.getRestaurantPage);

export default router