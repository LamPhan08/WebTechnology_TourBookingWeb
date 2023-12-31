import User from '../models/User.js';

// create new user
export const createUser = async (req, res) => {
    const newUser = new User(req.body);

    try {
        const savedUser = await newUser.save();

        res.status(200).json({
            success: true,
            message: 'Created Successfully!',
            data: savedUser,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to create!'
        });
    }
};

// update user
export const updateUser = async (req, res) => {
    const id = req.params.id;
    
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, {
            new: true
        });

        res.status(200).json({
            success: true,
            message: 'Updated Successfully!',
            data: updatedUser,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to update!' + `\n${err.message}`
        });
    }
};

// delete user
export const deleteUser = async (req, res) => {
    const id = req.params.id;
    
    try {
        await User.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: 'Deleted Successfully!',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete!'
        });
    }
};

// getSingle user
export const getSingleUser = async (req, res) => {
    const id = req.params.id;
    
    try {
        const user = await User.findById(id);

        res.status(200).json({
            success: true,
            message: 'User found!',
            data: user,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: 'User not found!'
        });
    }
};

// getAll user
export const getAllUser = async (req, res) => {

    try {
        const users = await User.find({});

        res.status(200).json({
            success: true,
            message: 'All users are here!',
            data: users,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: 'Could not find any user!'
        });
    }
};