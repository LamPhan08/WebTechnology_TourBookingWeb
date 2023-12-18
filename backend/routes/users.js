import express from 'express';

import 
{ 
    createUser,
    deleteUser, 
    getAllUser, 
    getSingleUser, 
    updateUser 
} from '../controllers/userController.js';

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// update user
router.put('/:id', verifyUser, updateUser);

// delete user
router.delete('/:id', verifyUser, deleteUser);

// get single user
router.get('/:id', verifyUser, getSingleUser);

// get all user
router.get('/', verifyAdmin, getAllUser);

// create user
router.post('/', createUser);
// router.post('/', verifyAdmin, createUser); // have error: have to login as admin first

export default router;