import express from 'express';

import { createBooking, getBooking } from '../controllers/bookingController.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/', verifyUser, createBooking);
router.get('/:id', verifyUser, getBooking);
router.get('/', verifyAdmin, createBooking);

export default router;