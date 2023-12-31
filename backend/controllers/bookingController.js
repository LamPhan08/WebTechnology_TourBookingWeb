import Booking from '../models/Booking.js';

// create new booking
export const createBooking = async(req, res) => {
    const newBooking = new Booking(req.body);
    try {
        const savedBooking = await newBooking.save();

        res.status(200).json({
            success: true,
            message: 'Tour booked successfully',
            data: savedBooking
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Internal server error!'
        });
    }
};

// get single booking
export const getBooking = async(req, res) => {
    const id = req.params.id;

    try {
        const book = await Booking.findById(id);

        res.status(200).json({
            success: true,
            message: "Get booking successfully!",
            data: book
        });
    } catch (err) {
        res.status(404).json({
            success: true,
            message: "Tour booking not found!"
        });
    }
};

// get all booking
export const getAllBooking = async(req, res) => {
    const id = req.params.id;

    try {
        const book = await Booking.find();

        res.status(200).json({
            success: true,
            message: "All tour bookings are here!",
            data: book
        });
    } catch (err) {
        res.status(500).json({
            success: true,
            message: "internal server error!"
        });
    }
};

// update booking
export const updatedBooking = async (req, res) => {
    const id = req.params.id;
    
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(id, {
            $set: req.body
        }, {
            new: true
        });

        res.status(200).json({
            success: true,
            message: 'Updated Successfully!',
            data: updatedBooking,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to update!' + `\n${err.message}`
        });
    }
};

// delete booking
export const deleteBooking = async (req, res) => {
    const id = req.params.id;
    
    try {
        await Booking.findByIdAndDelete(id);

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