import express from 'express';

import { createBooking, getBooking, getAllBooking, updatedBooking } from '../controllers/bookingController.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/', verifyUser, createBooking);
// router.get('/:id', verifyUser, getBooking);
router.get('/:id', getBooking);
router.get('/', getAllBooking);
router.put('/:id', updatedBooking);

export default router;