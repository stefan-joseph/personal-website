import moon from "../assets/images/rocket.jpg";
import beach from "../assets/images/beach2.jpg";
import cloud from "../assets/images/cloud.jpg";
import parkingSpace from "../assets/images/city.jpg";

const projects = [
  {
    id: 1,
    title: { one: "Weather_Simple_", two: "APP;" },
    text: "An interactive React JS weather app displaying real-time weather data from the Open Weather API. I created a Mongo database of cities across the globe in order to populate search suggestions for the user. The API calls and search suggestions are managed with an Express JS server.",
    path: "https://weathersimple.herokuapp.com/",
    img: cloud,
  },
  {
    id: 2,
    title: { one: "Spacestagram_", two: "APP;" },
    text: "An interactive React JS weather app displaying real-time weather data from the Open Weather API. I created a Mongo database of cities across the globe in order to populate search suggestions for the user. The API calls and search suggestions are managed with an Express JS server.",
    path: "https://spacestagram-nasa-apod.netlify.app/",
    img: moon,
  },
  {
    id: 3,
    title: { one: "Jobify_", two: "APP;" },
    text: "An interactive React JS weather app displaying real-time weather data from the Open Weather API. I created a Mongo database of cities across the globe in order to populate search suggestions for the user. The API calls and search suggestions are managed with an Express JS server.",
    path: "https://jobify-application-organizer.herokuapp.com/landing",
    img: parkingSpace,
  },
  {
    id: 4,
    title: { one: "Beach_Resort_", two: "WEBSITE;" },
    text: "An interactive React JS weather app displaying real-time weather data from the Open Weather API. I created a Mongo database of cities across the globe in order to populate search suggestions for the user. The API calls and search suggestions are managed with an Express JS server.",
    path: "https://beachhotelresort.netlify.app/",
    img: beach,
  },
];

export default projects;
