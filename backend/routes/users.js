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
// router.put('/:id', verifyUser, updateUser);
router.put('/:id', updateUser);

// delete user
// router.delete('/:id', verifyUser, deleteUser);
router.delete('/:id', deleteUser);

// get single user
// router.get('/:id', verifyUser, getSingleUser);
router.get('/:id', getSingleUser);

// get all user
// router.get('/', verifyAdmin, getAllUser);
router.get('/', getAllUser);

// create user
router.post('/', createUser);
// router.post('/', verifyAdmin, createUser); // have error: have to login as admin first

export default router;