import { Router } from 'express';
import fs from 'fs';
import multer from 'multer';
import { restart } from 'nodemon';
import path from 'path';
import { promisify } from 'util';

import * as restaurant from '../controllers/restaurant.controller';

const router = Router();

const unlinkAsync = promisify(fs.unlink);
const maxSize = 2 * 1024 * 1024;

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({
    storage,
    limits: { fileSize: maxSize },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));
        if (mimetype && extname) {
            return cb(null, true);
        }
    }
}).single('image');

//router.post('/edit-dish', restaurant.getRestaurantPage);

//router.post('/create-dish', restaurant.getFeaturedRestaurant);

router.post('/upload-img', upload, async (req, res) => {
    await restaurant.upload_img(req, res)
    await unlinkAsync(req.file.path);
});

router.post('/upload-dish', restaurant.upload_dish);

router.put('/update-dish', restaurant.update_dish);

router.delete('/delete-dish', restaurant.delete_dish);

router.delete('/delete-category', restaurant.delete_category);

export default router
