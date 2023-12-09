import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String
    },
    // userEmail: {
    //   type: String,
    // },
    // tourName: {
    //     type: String,
    //     required: true
    // },
    // fullName: {
    //   type: String,
    //   required: true,
    // },
    // guestSize: {
    //     type: Number,
    //     required: true
    // },
    // phone: {
    //     type: Number,
    //     required: true
    // },
    // bookAt: {
    //     type: Date,
    //     required: true
    // }
    tourName: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true,
    },
    startDate: {
      type: String,
        required: true
    },
    endDate: {
      type: String,
        required: true
    },
    bookingDate: {
      type: String,
        required: true
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
        type: String,
        required: true
    },
    address: {
      type: String,
      required: true,
    },
    guestSize: {
        type: Number,
        required: true
    },
    paymentStatus: {
      type: String,
      required: true,
      default: "Pending"
    },
    receiptImage: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);