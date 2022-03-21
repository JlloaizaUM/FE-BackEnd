import { Router } from 'express';
import * as page from '../controllers/page.controller';

const router = Router();

router.get('/restaurant/:path', page.getRestaurantPage);

router.get('/restaurants', page.getFeaturedRestaurant);

export default router