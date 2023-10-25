import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
// import ninhThuan from "../images/ninhThuan.jpg;"

const tours = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    address: "Somewhere",
    distance: 300,
    price: 99,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "Lam Phan",
        rating: 1,
      },
    ],
    startDate: "2023-01-01",
    endDate: "2023-01-05",
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
    itinerary:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis error ut, sit nam dicta soluta, id doloribus doloremque consectetur sint hic tenetur aspernatur iure aliquid, ratione recusandae sequi omnis facilis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rem cumque voluptate! Libero consequatur natus cumque adipisci velit, voluptas, blanditiis est maxime ut rerum maiores, distinctio et aperiam dolor nihil?4Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur blanditiis doloremque commodi assumenda placeat alias perspiciatis exercitationem quos suscipit quae nihil, expedita quaerat aperiam provident quo architecto corrupti doloribus cupiditate."
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    address: "Somewhere",
    distance: 400,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      // {
      //   name: "jhon doe",
      //   rating: 4.6,
      // },
    ],
    startDate: "2023-01-01",
    endDate: "2023-01-05",
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
    itinerary:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis error ut, sit nam dicta soluta, id doloribus doloremque consectetur sint hic tenetur aspernatur iure aliquid, ratione recusandae sequi omnis facilis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rem cumque voluptate! Libero consequatur natus cumque adipisci velit, voluptas, blanditiis est maxime ut rerum maiores, distinctio et aperiam dolor nihil?4Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur blanditiis doloremque commodi assumenda placeat alias perspiciatis exercitationem quos suscipit quae nihil, expedita quaerat aperiam provident quo architecto corrupti doloribus cupiditate."
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    address: "Somewhere",
    distance: 200,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      // {
      //   name: "jhon doe",
      //   rating: 4.6,
      // },
    ],
    startDate: "2023-01-01",
    endDate: "2023-01-05",
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
    itinerary:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis error ut, sit nam dicta soluta, id doloribus doloremque consectetur sint hic tenetur aspernatur iure aliquid, ratione recusandae sequi omnis facilis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rem cumque voluptate! Libero consequatur natus cumque adipisci velit, voluptas, blanditiis est maxime ut rerum maiores, distinctio et aperiam dolor nihil?4Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur blanditiis doloremque commodi assumenda placeat alias perspiciatis exercitationem quos suscipit quae nihil, expedita quaerat aperiam provident quo architecto corrupti doloribus cupiditate."

  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    address: "Somewhere",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    startDate: "2023-01-01",
    endDate: "2023-01-05",
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
    itinerary:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis error ut, sit nam dicta soluta, id doloribus doloremque consectetur sint hic tenetur aspernatur iure aliquid, ratione recusandae sequi omnis facilis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rem cumque voluptate! Libero consequatur natus cumque adipisci velit, voluptas, blanditiis est maxime ut rerum maiores, distinctio et aperiam dolor nihil?4Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur blanditiis doloremque commodi assumenda placeat alias perspiciatis exercitationem quos suscipit quae nihil, expedita quaerat aperiam provident quo architecto corrupti doloribus cupiditate."
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    address: "Somewhere",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    startDate: "2023-01-01",
    endDate: "2023-01-05",
    avgRating: 4.5,
    photo: tourImg05,
    featured: true,
    itinerary:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis error ut, sit nam dicta soluta, id doloribus doloremque consectetur sint hic tenetur aspernatur iure aliquid, ratione recusandae sequi omnis facilis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rem cumque voluptate! Libero consequatur natus cumque adipisci velit, voluptas, blanditiis est maxime ut rerum maiores, distinctio et aperiam dolor nihil?4Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur blanditiis doloremque commodi assumenda placeat alias perspiciatis exercitationem quos suscipit quae nihil, expedita quaerat aperiam provident quo architecto corrupti doloribus cupiditate."

  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    address: "Somewhere",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    startDate: "2023-01-01",
    endDate: "2023-01-05",
    avgRating: 4.5,
    photo: tourImg06,
    featured: true,
    itinerary:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis error ut, sit nam dicta soluta, id doloribus doloremque consectetur sint hic tenetur aspernatur iure aliquid, ratione recusandae sequi omnis facilis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rem cumque voluptate! Libero consequatur natus cumque adipisci velit, voluptas, blanditiis est maxime ut rerum maiores, distinctio et aperiam dolor nihil?4Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur blanditiis doloremque commodi assumenda placeat alias perspiciatis exercitationem quos suscipit quae nihil, expedita quaerat aperiam provident quo architecto corrupti doloribus cupiditate."

  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    address: "Somewhere",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    startDate: "2023-01-01",
    endDate: "2023-01-05",
    avgRating: 4.5,
    photo: tourImg07,
    featured: true,
    itinerary:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis error ut, sit nam dicta soluta, id doloribus doloremque consectetur sint hic tenetur aspernatur iure aliquid, ratione recusandae sequi omnis facilis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rem cumque voluptate! Libero consequatur natus cumque adipisci velit, voluptas, blanditiis est maxime ut rerum maiores, distinctio et aperiam dolor nihil?4Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur blanditiis doloremque commodi assumenda placeat alias perspiciatis exercitationem quos suscipit quae nihil, expedita quaerat aperiam provident quo architecto corrupti doloribus cupiditate."

  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    address: "Somewhere",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    startDate: "2023-01-01",
    endDate: "2023-01-05",
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
    itinerary:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis error ut, sit nam dicta soluta, id doloribus doloremque consectetur sint hic tenetur aspernatur iure aliquid, ratione recusandae sequi omnis facilis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rem cumque voluptate! Libero consequatur natus cumque adipisci velit, voluptas, blanditiis est maxime ut rerum maiores, distinctio et aperiam dolor nihil?4Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur blanditiis doloremque commodi assumenda placeat alias perspiciatis exercitationem quos suscipit quae nihil, expedita quaerat aperiam provident quo architecto corrupti doloribus cupiditate."

  },
];

export default tours;
