import { Router } from 'express';
import * as restaurant from '../controllers/restaurant.controller';

const router = Router();

router.get('/restaurant/:path', restaurant.getRestaurantPage);

router.get('/restaurants', restaurant.getFeaturedRestaurant);

export default router