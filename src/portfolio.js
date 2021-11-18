
import emoji from "react-easy-emoji";
const illustration = {
  animated: true 
};

const greeting = {
  username: "Karan Desai",
  title: "Hi ,I'm Karan",
  subTitle: emoji(
    "Passionate Full Stack Web Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Django and some other cool libraries and frameworks."
  ),
  resumeLink:
    "", 
  displayGreeting: true 
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/karandesai24",
  linkedin: "https://www.linkedin.com/in/karan-desai-80b7a4148/",
  gmail: "karan181716@gmail.com",
  twitter:"https://twitter.com/Karandesai09",
  display: true 
};

// Skills Section

const skillsSection = {
  title: "Tools & Languages Fluent With",
  //subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE TECH STACKS",
  skills: [
    emoji(
      "⚡ I Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    
    emoji(
      "⚡ And Create Efficient Back end service for highly interactive User Interfaces"
    )
  ],

  

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true 
};

// Education Section

const educationInfo= {
  display: true, 
  schools: [
    {
      schoolName: "Sarvajanik College of Engineering & Technology",
      logo: require("./assets/images/logo.png").default,
      subHeader: "B.Tech in Computer Engineering",
      duration: "July 2019 - July 2023",
      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};



// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Developed Projects",
  projects: [
    {
      image: require("./assets/images/spotify.png").default,
      projectName: "Spotify-clone",
      projectDesc: "Spotify clone, made with ReactJS using Spotify API, which uses Spotify authentication and shows logged in user's username,avatar & playlists with song player.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://spotify-clone-73a9c.web.app/"
        }
      ]
    },
    {
      image: require("./assets/images/newsapp.png").default,
      projectName: "Newsapp",
      projectDesc: "Newsapp which fetches news of through API.Technologies used HTML,CSS,JAVASCRIPT,BOOSTRAP,  DJANGO,PYTHON.",
      footerLink: [
        {
          name: "Check-out",
          url: "https://github.com/karandesai24/NEWSAPP-django"

        }
      ]
    },
    {
      image: require('./assets/images/mern.png').default,
      projectName: "MERN Stack Project",
      projectDesc: "User registration-login-authentication,bcrpts user's password for end to end security & generates different unique cookies for different sessions.",
      footerLink: [
        {
          name: "Check-out",
          url: "https://github.com/karandesai24/mern-fullstack"
        }
      ]
    },
    {
      image: require("./assets/images/wheather.png").default,
      projectName: "React.js-Wheather-App",
      projectDesc: "A ReactJS app which shows wheather and related fuctionalities of entered city",
      footerLink: [
        {
          name: "Check-out",
          url: "https://github.com/karandesai24/React-wheather-app-"
        }
      ]
    },
    {
      image: require("./assets/images/restro.png").default ,
      projectName: "Restro Website",
      projectDesc: "Complete front end responsive restaurant website made with HTML,CSS,JAVASCRIPT.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dkrestro.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/music.png").default,
      projectName: "Music Player",
      projectDesc: "Music Player with dark-light mode & other pause-play-shuffle-next-previous like functions.",
      footerLink: [
        {
          name: "Check-out",
          url: "https://github.com/karandesai24/Music-Player"
        }
      ]
    },
    
 
    {
      image: require("./assets/images/cart.png").default,
      projectName: "Shopping-cart",
      projectDesc: "Basic shopping-cart made using HTML,CSS,JAVASCRIPT as front end and PHP & mysql as back end-database.",
      footerLink: [
        {
          name: "Check-out",
          url: "https://github.com/karandesai24/Shopping-cart"
        }
      ]
    }
  ],
  display: true 
};

//
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or want to say hi? My Inbox is open for all.",
  email_address: "karan181716@gmail.com"
};


export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  bigProjects,
  contactInfo
};
