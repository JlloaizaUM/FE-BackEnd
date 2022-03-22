import { Router } from 'express';
import * as page from '../controllers/page.controller';

const router = Router();

router.get('/restaurant/get', page.getRestaurantPage);

router.get('/restaurant/exists', page.getExistsURL);

router.get('/restaurant/data', page.getRestaurantData);

router.put('/restaurant/update', page.updateRestaurantData);

router.get('/restaurants', page.getFeaturedRestaurant);

export default router