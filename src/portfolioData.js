let portfolioData = {
  name: 'Kelsey Eckelberry',
  role: 'Fullstack Developer + Graphic Designer',
  roleDesc:
    'I love combining my knowledge of design and marketing with my fullstack development skillset.',
  socials: [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kelsey-eckelberry-a97498b2/',
      class: 'fa fa-linkedin',
    },
    {
      name: 'github',
      url: 'https://github.com/kelseyeckelberry',
      class: 'fa fa-github',
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/kelseckelberry',
      class: 'fa fa-twitter',
    },
  ],
  about:
    'I am currently working as a graphic designer and living in the KC metro area. I am new to the Fullstack Development industry and excited to learn even more!',
  city: 'Kansas City Metro',
  email: 'kelseyeckelberry@gmail.com',
  education: [
    {
      school: 'KU Professional & Continuing Education',
      type: 'Fullstack Development Bootcamp',
      gradMonth: 'March',
      gradYear: '2021',
    },
    {
      school: 'John Brown University',
      type: 'Graphic and Web Design + Photography',
      gradMonth: 'May',
      gradYear: '2015',
    },
  ],
  work: [
    {
      company: 'Nabholz Construction',
      desc: 'Marketing Coordinator',
      startDate: 'October 2016',
      endDate: 'Present',
    },
    {
      company: 'Printtime',
      desc: 'Prepress Artist',
      startDate: 'September 2016',
      endDate: 'February 2016',
    },
    {
      company: 'Midwest Office',
      desc: 'Graphic Designer',
      startDate: 'July 2015',
      endDate: 'January 2016',
    },
  ],
  skillsDesc:
    'I am well-versed in the Adobe Suite, as well as many widely-used programming languages.',
  skills: [
    {
      skillName: 'Adobe XD',
    },
    {
      skillName: 'React.js',
    },
    {
      skillName: 'HTML5',
    },
  ],
  porfolio: [
    {
      name: 'See Something, Say Something',
      site: 'https://fierce-mountain-61777.herokuapp.com/',
      repo: 'https://github.com/kelseyeckelberry/Project02_Crime_Reporting.git',
      desc:
        'The user is able to visit the deployed website and is prompted to sign up or log in. Once logged in, the user is able to submit a crime report that records such details as where the crime occurred (location-specific), what crime was committed, and the user email. Once the user-generated crime report is submitted to the database, it is then posted on the Crimes page. The user is also able to view crimes that have been reported near their specific location (using Google Maps).',
      img: './public/images/home.png',
    },
    {
      name: 'Weather Dashboard',
      site: 'https://kelseyeckelberry.github.io/06_weather_dashboard/',
      repo: 'https://github.com/kelseyeckelberry/06_weather_dashboard.git',
      desc:
        'I was tasked with creating a weather dashboard that runs in the browser and features dynamically updated HTML and CSS. It displays weather conditions for any city that the users searches for, and will save recently searched for cities/weather information using localStorage.',
      img: './public/images/weather-dash-tall.png',
    },
    {
      name: 'Sportzilla',
      site: 'https://millsy4.github.io/sportz_project/',
      repo: 'https://github.com/Millsy4/sportz_project.git',
      desc:
        'Welcome to our project! Our team has created a responsive website that provides statistics from the 2019-2020 NBA season for each user-searched player. This was achieved by integrating data received from multiple server-side API requests.',
      img: './public/images/sportzilla-tall.png',
    },
  ],
};

export default portfolioData;
