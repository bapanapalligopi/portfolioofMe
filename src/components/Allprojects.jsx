import calci from "../images/calculator/calculator1.png";
import calci2 from "../images/calculator/calculator2.png";
import calci3 from "../images/calculator/calculator3.png";
import calci4 from "../images/calculator/calculator5.png";
import calci5 from "../images/calculator/calculator5.png";

import movie from "../images/movie/movie1.png";
import movie2 from "../images/movie/movie2.png";
import movie3 from "../images/movie/movie3.png";
import movie4 from "../images/movie/movie4.png";

import recipe from "../images/recipemaker/recipe1.png";

import tictac from "../images/tictac/tic1.png";
import ticta2 from "../images/tictac/tic2.png";
import ticta3 from "../images/tictac/tic3.png";

import weather from "../images/weather/weather1.png";
import weather2 from "../images/weather/weather2.png";
import weather3 from "../images/weather/weather3.png";
import weather4 from "../images/weather/weather4.png";

import todo from "../images/todoapp/todo1.png";
import todo2 from "../images/todoapp/todo2.png";
import todo3 from "../images/todoapp/todo3.png";
import todo4 from "../images/todoapp/todo4.png";
import todo5 from "../images/todoapp/todo5.png";

import calcivideo from "../vidoes/calculator.mp4";
import movievideo from "../vidoes/movie.mp4";
import recipevideo from "../vidoes/recipemaker.mp4";
import ticvideo from "../vidoes/tictac.mp4";
import todovideo from "../vidoes/todo.mp4";
import weathervideo from "../vidoes/weather.mp4";

const project1 = {
  id: 1,
  title: "Todo App",
  description:
    "I developed a todo app using React, enabling users to efficiently organize their tasks with intuitive features. The application provides a user-friendly interface for creating, tracking, and managing tasks seamlessly. Leveraging React's capabilities, the todo app offers a responsive and dynamic experience for enhanced productivity.",
  url: todo,
  view: "#",
  githuburl: "https://github.com/bapanapalligopi/TODOAPP",
  lang: "HTML, CSS, JAVASCRIPT and REACT.",
  imagesurl: [todo, todo2, todo3, todo4, todo5],
  videourl: todovideo,
  goto: "/1",
};

const project2 = {
  id: 2,
  title: "Movie Review Application",
  description:
    "I've developed a movie review application using Spring Boot, offering users a comprehensive platform to explore new movies, access ratings, and utilize sorting functionalities. With features enabling sorting by rating, release date, and genre, users can easily navigate and discover movies based on their preferences.This project involves the developing rest API's for movie entity and creating CRUD operations for the movie entity like create a review for movie, update the movie with new review, delete the movie and get the all movies with reviews. On webapplication you can get all movies as well as filter them by some properties like rating,duartion,releasedate.Our web application is also have search functionality where you can find any movie by searching with movie title , director name, and genre.",
  url: movie,
  view: "#",
  githuburl: "https://github.com/bapanapalligopi/MovieReviews",
  lang: "HTML, CSS, JAVASCRIPT, REACT, SPRINGBOOT and REST-APIS.",
  imagesurl: [movie, movie2, movie3, movie4],
  videourl: movievideo,
  goto: "/2",
};

const project3 = {
  id: 3,
  title: "Tic Tac Toe Game",
  description:
    "I've created a Tic Tac Toe game using React, providing users with an engaging and interactive gaming experience. The game offers a classic tic-tac-toe grid where players can take turns marking their moves.the game includes logic to determine the winner, ensuring an immersive and enjoyable gameplay for all users.",
  url: tictac,
  view: "https://bapanapalligopi.github.io/TicTacToe-Game-/",
  githuburl: "https://github.com/bapanapalligopi/TicTacToe-Game-",
  lang: "HTML, CSS, JAVASCRIPT and REACT.",
  imagesurl: [tictac, ticta2, ticta3],
  videourl: ticvideo,
  goto: "/3",
};
const project4 = {
  id: 4,
  title: "Calculator App",
  description:
    "The React Calculator app is a user-friendly web application designed to perform arithmetic operations such as addition, subtraction, multiplication, and division. With its intuitive interface, users can input numerical values and execute calculations effortlessly. The app supports both basic and advanced mathematical operations, providing a versatile tool for various calculation needs.",
  url: calci,
  view: "https://bapanapalligopi.github.io/Calculator/",
  githuburl: "https://github.com/bapanapalligopi/Calculator",
  lang: "HTML, CSS, JAVASCRIPT and REACT.",
  imagesurl: [calci, calci2, calci3, calci4, calci5],
  videourl: calcivideo,
  goto: "/4",
};

const project5 = {
  id: 5,
  title: "Recipe Maker",
  description:
    "The React Recipe Maker app is a convenient and user-friendly web application designed to help users discover and explore a wide variety of recipes. Leveraging the power of React and a food API, this app provides users with an extensive database of recipes from various cuisines around the world.This application allows you for finding any recipe by seraching with the name of recipe if recipe was found then it display the neccessary ingredients and intructions to make that recipe with images.",
  url: recipe,
  view: "https://bapanapalligopi.github.io/Recipe-Maker/",
  githuburl: "https://github.com/bapanapalligopi/Recipe-Maker",
  lang: "HTML, CSS, JAVASCRIPT and REACT.",
  imagesurl: [recipe],
  videourl: recipevideo,
  goto: "/5",
};

const project6 = {
  id: 6,
  title: "Weather App",
  description:
    "The React Weather App is a dynamic and user-friendly web application designed to provide users with real-time weather information for any location around the world. Leveraging the power of React and a weather API, this app delivers accurate and up-to-date weather forecasts, enabling users to plan their activities and stay informed about weather conditions.You can find the weather information by searching the city name if city found then you will get the weather data like humidity,wind speed, temperatur, etc...",
  url: weather,
  view: "https://bapanapalligopi.github.io/WeatherReportByCity/",
  githuburl: "https://github.com/bapanapalligopi/WeatherReportByCity",
  lang: "HTML, CSS, JAVASCRIPT, REACT and OPEN WEATHER API",
  imagesurl: [weather, weather2, weather3, weather4],
  videourl: weathervideo,
  goto: "/6",
};
const project7 = {
  id: 7,
  title: "Chat Anywhere",
  description:
    "A one-on-one chat application, seamlessly integrating Spring Boot for the backend and React JS for the frontend, offers users a comprehensive experience. With features like friend management, messaging, profile viewing, and friend search, it delivers a holistic communication solution. This architecture ensures not only a secure and efficient platform but also fosters a sense of community and connection among users, enhancing their overall engagement and satisfaction.",
  url: weather,
  view: "https://bapanapalligopi.github.io/WeatherReportByCity/",
  githuburl: "https://github.com/bapanapalligopi/WeatherReportByCity",
  lang: "React js ,Springboot, Smtp and mysql",
  imagesurl: [weather, weather2, weather3, weather4],
  videourl: weathervideo,
  goto: "/7",
};

const Allprojects = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
];

export default Allprojects;
