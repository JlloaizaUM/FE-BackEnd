import { Router } from 'express';
import * as users from '../controllers/user.controller';

const router = Router();

router.get('/restaurant/:path', users.getRestaurantPage);
router.get('/restaurants', users.getFeaturedRestaurant);

export default router