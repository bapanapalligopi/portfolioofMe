import chat from "../images/chat.png";
import music from "../images/2mmusic.png";
import portfolio from "../images/portfolio.png";
import todo from "../images/todoapp/todo1.png";
import movie from "../images/movie/movie1.png";
import tictac from "../images/tictac/tic1.png";
import calci from "../images/calculator/calculator1.png";
import recipe from "../images/recipemaker/recipe1.png";
import weather from "../images/weather/weather1.png";

export const projectsData = [
  // Professional Projects (Payswiff Technologies Pvt. Ltd)
  {
    id: 101,
    title: "Batch Processing Service (Reconciliation Engine)",
    role: "Developer",
    company: "Payswiff Technologies Pvt. Ltd",
    timeline: "Jan 2025 – Jun 2025",
    description: "Developed a Spring Boot-based batch processing reconciliation engine from scratch, replacing a costly third-party provider and improving processing efficiency by ~75%. It automatically processes and reconciles ~50,000+ transactions daily. Generates reconciliation sheets (XLS, XLSX, CSV, TXT) and uploads them to AWS S3 within 3 minutes. Includes Kafka-based alerts on job completion.",
    lang: "Java 17, Spring Boot, Spring Batch, AWS S3, Kafka, MySQL, REST APIs",
    type: "professional"
  },
  {
    id: 102,
    title: "User Management Service (Reconciliation Portal)",
    role: "Developer",
    company: "Payswiff Technologies Pvt. Ltd",
    timeline: "Jan 2025 – Jun 2025",
    description: "Developed a secure user management portal supporting role-based access control (RBAC). Implemented stateless authentication using Spring Security and JWT lifecycle management. Designed file-handling REST APIs for uploading and downloading secure reconciliation sheets via AWS S3. Integrated user activity tracking APIs for audit logs.",
    lang: "Java 17, Spring Boot, Spring Security, JWT, AWS S3, REST APIs, MySQL",
    type: "professional"
  },
  {
    id: 103,
    title: "Automated Refund Processing System",
    role: "Developer",
    company: "Payswiff Technologies Pvt. Ltd",
    timeline: "Jul 2025 – Sep 2025",
    description: "Designed and built an automated refund processing backend, replacing manual email-driven operations. Developed APIs to handle the complete refund lifecycle (Initiate, Cancel, Fetch, Audit) utilizing secure stored procedures. Reduced refund processing duration from hours to near real-time, eliminating human errors.",
    lang: "Java 17, Spring Boot, Spring Batch, Spring Security, JWT, MySQL, Stored Procedures",
    type: "professional"
  },
  {
    id: 104,
    title: "DUKPT & RSA Key Management (Sunmi P2SE)",
    role: "Developer",
    company: "Payswiff Technologies Pvt. Ltd",
    timeline: "Ongoing",
    description: "Implemented secure cryptographic workflows for Payswiff POS terminal devices. Engineered key exchange payloads and encryption protocols using DUKPT (Derived Unique Key Per Transaction) and RSA cryptography to secure server-terminal communications.",
    lang: "Java, Cryptography, DUKPT, RSA, POS Security Protocols",
    type: "professional"
  },
  {
    id: 105,
    title: "Merchant Feedback Management System",
    role: "Project Trainee (Intern)",
    company: "Payswiff Technologies Pvt. Ltd",
    timeline: "Trainee Period",
    description: "Built a web-based merchant feedback portal designed to capture POS device feedback, track service tasks, and display metrics inside a custom administrative dashboard.",
    lang: "ReactJS, Spring Boot, AWS, REST APIs, MySQL",
    type: "professional"
  },

  // Personal Projects
  {
    id: 1,
    title: "Chat Application",
    description: "A one-on-one real-time chat application featuring friend requests, status updates, message search, and profile customization. Engineered for fast, low-latency, and secure direct communications.",
    url: chat,
    view: "",
    githuburl: "https://github.com/bapanapalligopi/chatanywhere",
    lang: "React JS, Spring Boot, WebSockets, MySQL",
    videourl: "/videos/chat.mp4",
    category: "Fullstack",
    type: "personal"
  },
  {
    id: 2,
    title: "2M Music Player",
    description: "A comprehensive music streaming platform featuring search queries, dynamic album folders, continuous playback, and track seekbar timing details. Provides a smooth, desktop-grade streaming experience.",
    url: music,
    view: "https://bapanapalligopi.github.io/2M-Music-Player/",
    githuburl: "https://github.com/bapanapalligopi/2M-Music-Player",
    lang: "React JS, Spring Boot, MySQL, Tailwind CSS",
    videourl: "/videos/2mmusic.mp4",
    category: "Fullstack",
    type: "personal"
  },
  {
    id: 3,
    title: "Professional Portfolio",
    description: "This portfolio showcases technical expertise, dynamic skill sets, and projects built in a highly interactive, responsive structure using a clean dark layout with subtle glassmorphic textures.",
    url: portfolio,
    view: "https://bapanapalligopi.netlify.app/",
    githuburl: "https://github.com/bapanapalligopi/Portfolio",
    lang: "Next.js App Router, React, Vanilla CSS",
    videourl: "",
    category: "Frontend",
    type: "personal"
  },
  {
    id: 4,
    title: "Advanced Todo App",
    description: "A workflow task organizer featuring tags, creation/due timestamp tracking, status categorization, and LocalStorage-backed state persistence for optimal efficiency and task management.",
    url: todo,
    view: "https://bapanapalligopi.github.io/TODO/",
    githuburl: "https://github.com/bapanapalligopi/TODOAPP",
    lang: "React JS, HTML5, CSS3, LocalStorage",
    videourl: "/videos/todo.mp4",
    category: "Frontend",
    type: "personal"
  },
  {
    id: 5,
    title: "Movie Reviews Platform",
    description: "A comprehensive catalog platform allowing movie lovers to explore films, publish ratings, sort by multiple metrics (rating, release date, genre), and check dynamically aggregated community feedback.",
    url: movie,
    view: "",
    githuburl: "https://github.com/bapanapalligopi/MovieReviews",
    lang: "React JS, Spring Boot, MySQL, REST APIs",
    videourl: "/videos/movie.mp4",
    category: "Fullstack",
    type: "personal"
  },
  {
    id: 6,
    title: "Interactive Tic Tac Toe",
    description: "A beautifully animated Tic Tac Toe game with turn history logging, automatic winning combination checks, player statistics tracking, and interactive reset routines.",
    url: tictac,
    view: "https://bapanapalligopi.github.io/TicTacToe-Game-/",
    githuburl: "https://github.com/bapanapalligopi/TicTacToe-Game-",
    lang: "React JS, HTML5, CSS3, Web Audio API",
    videourl: "/videos/tictac.mp4",
    category: "Games/Utils",
    type: "personal"
  },
  {
    id: 7,
    title: "Polished Calculator",
    description: "An arithmetic utility designed for floating point calculations, percentages, and custom state commands. Integrates smooth keyboard inputs and equation history panels.",
    url: calci,
    view: "https://bapanapalligopi.github.io/Calculator/",
    githuburl: "https://github.com/bapanapalligopi/Calculator",
    lang: "React JS, CSS3, JavaScript",
    videourl: "/videos/calculator.mp4",
    category: "Games/Utils",
    type: "personal"
  },
  {
    id: 8,
    title: "Recipe Finder Hub",
    description: "A culinary search tool integrating international food databases, detailing ingredient lists, step-by-step guides, caloric details, and recipe categories.",
    url: recipe,
    view: "https://bapanapalligopi.github.io/Recipe-Maker/",
    githuburl: "https://github.com/bapanapalligopi/Recipe-Maker",
    lang: "React JS, Food API, CSS Modules",
    videourl: "/videos/recipemaker.mp4",
    category: "Frontend",
    type: "personal"
  },
  {
    id: 9,
    title: "Real-Time Weather App",
    description: "A weather tracking tool calling geolocation APIs, displaying temperature, wind velocity, humidity, and barometric indices with dynamically shifting ambient theme colors.",
    url: weather,
    view: "https://bapanapalligopi.github.io/WeatherReportByCity/",
    githuburl: "https://github.com/bapanapalligopi/WeatherReportByCity",
    lang: "React JS, OpenWeather API, CSS Modules",
    videourl: "/videos/weather.mp4",
    category: "Frontend",
    type: "personal"
  }
];
