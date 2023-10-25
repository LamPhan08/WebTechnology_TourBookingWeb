import receipt from '../images/receipt.png' // ảnh biên lai

//paymentStatus có 3 trạng thái: Pending, Approved và Invalid Receipt
//guestSize: số lượng chỗ đặt

const bookings = [
    {
      id: "01",
      tourname: "Westminister Bridge",
      total: 200,
      startDate: "2023-01-01",
      endDate: "2023-01-05",
      bookingDate: "2022-12-28",
      fullName: "Benjamin",
      email: "benjamin1234@gmail.com",
      phone: "0123456789",
      address: "Somewhere",
      guestSize: 8,
      paymentStatus: "Pending",
      receiptImage: ''
    },
    {
      id: "02",
      tourname: "Bali, Indonesia",
      total: 180,
      startDate: "2023-01-01",
      endDate: "2023-01-05",
      bookingDate: "2022-12-28",
      fullName: "Benjamin",
      email: "benjamin1234@gmail.com",
      phone: "0123456789",
      address: "Somewhere",
      guestSize: 8,
      paymentStatus: "Invalid Receipt",
      receiptImage: receipt
    },
    {
      id: "03",
      tourname: "Snowy Mountains, Thailand",
      total: 170,
      startDate: "2023-01-01",
      endDate: "2023-01-05",
      bookingDate: "2022-12-28",
      fullName: "Benjamin",
      email: "benjamin1234@gmail.com",
      phone: "0123456789",
      address: "Somewhere",
      guestSize: 8,
      paymentStatus: "Approved",
      receiptImage: receipt
    },
    {
      id: "04",
      tourname: "Beautiful Sunrise, Thailand",
      total: 250,
      startDate: "2023-01-01",
      endDate: "2023-01-05",
      bookingDate: "2022-12-28",
      fullName: "Benjamin",
      email: "benjamin1234@gmail.com",
      phone: "0123456789",
      address: "Somewhere",
      guestSize: 8,
      paymentStatus: "Approved",
      receiptImage: receipt
    },
    {
      id: "05",
      tourname: "Nusa Pendia Bali, Indonesia",
      total: 400,
      startDate: "2023-01-01",
      endDate: "2023-01-05",
      bookingDate: "2022-12-28",
      fullName: "Benjamin",
      email: "benjamin1234@gmail.com",
      phone: "0123456789",
      address: "Somewhere",
      guestSize: 8,
      paymentStatus: "Approved",
      receiptImage: receipt
    },
    {
      id: "06",
      tourname: "Cherry Blossoms Spring, Japan",
      total: 600,
      startDate: "2023-01-01",
      endDate: "2023-01-05",
      bookingDate: "2022-12-28",
      fullName: "Benjamin",
      email: "benjamin1234@gmail.com",
      phone: "0123456789",
      address: "Somewhere",
      guestSize: 8,
      paymentStatus: "Approved",
      receiptImage: receipt
    },
    {
      id: "07",
      tourname: "Holmen Lofoten, France",
      total: 350,
      startDate: "2023-01-01",
      endDate: "2023-01-05",
      bookingDate: "2022-12-28",
      fullName: "Benjamin",
      email: "benjamin1234@gmail.com",
      phone: "0123456789",
      address: "Somewhere",
      guestSize: 8,
      paymentStatus: "Approved",
      receiptImage: receipt
    },
    {
      id: "08",
      tourname: "Snowy Mountains, Thailand",
      total: 380,
      startDate: "2023-01-01",
      endDate: "2023-01-05",
      bookingDate: "2022-12-28",
      fullName: "Benjamin",
      email: "benjamin1234@gmail.com",
      phone: "0123456789",
      address: "Somewhere",
      guestSize: 8,
      paymentStatus: "Approved",
      receiptImage: receipt
    },
  ];
  
  export default bookings;