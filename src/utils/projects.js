import moon from "../assets/images/rocket.jpg";
import beach from "../assets/images/beach2.jpg";
import cloud from "../assets/images/cloud.jpg";
import parkingSpace from "../assets/images/city.jpg";
import clothing from "../assets/images/clothing.jpg";

const projects = [
  {
    id: 1,
    title: { one: "Ella_Clothing_", two: "ECOMMERCE_APP;" },
    text: "A full-stack clothing e-commerce application with a UI/UX design implementation. A user can create an account, update their relevant personal information, post reviews of the products, query products in the interactive store and create orders with Stripe Payment Processing.",
    path: "https://ellaclothing.herokuapp.com/",
    img: clothing,
  },
  {
    id: 2,
    title: { one: "Weather_Simple_", two: "APP;" },
    text: "An interactive React JS weather app displaying real-time weather data from the Open Weather API. I created a Mongo database of cities across the globe in order to populate search suggestions for the user. The API calls and search suggestions are managed with an Express JS server.",
    path: "https://weathersimple.herokuapp.com/",
    img: cloud,
  },
  {
    id: 3,
    title: { one: "Spacestagram_", two: "APP;" },
    text: "A UI/UX design concept based on the ubiquitous social media app Instagram, this application organizes NASA’s photo of the day API by date, likes, or a random selection.",
    path: "https://spacestagram-nasa-apod.netlify.app/",
    img: moon,
  },
  {
    id: 4,
    title: { one: "Jobify_", two: "APP;" },
    text: "Based on a Udemy MERN stack course, this application keeps track of user’s job applications at every stage of the process. Login with ‘john@gmail.com’ and password ‘secret’.",
    path: "https://jobify-application-organizer.herokuapp.com/landing",
    img: parkingSpace,
  },
  // {
  //   id: 5,
  //   title: { one: "Beach_Resort_", two: "WEBSITE;" },
  //   text: "An interactive React JS weather app displaying real-time weather data from the Open Weather API. I created a Mongo database of cities across the globe in order to populate search suggestions for the user. The API calls and search suggestions are managed with an Express JS server.",
  //   path: "https://beachhotelresort.netlify.app/",
  //   img: beach,
  // },
];

export default projects;
