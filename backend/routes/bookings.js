import express from 'express';

import { createBooking, getBooking, getAllBooking, updatedBooking, deleteBooking } from '../controllers/bookingController.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/', verifyUser, createBooking);
// router.get('/:id', verifyUser, getBooking);
router.get('/:id', getBooking);
router.get('/', getAllBooking);
router.put('/:id', updatedBooking);
router.delete('/:id', deleteBooking)

export default router;