export const navLinks = [
    { name: "Who I am", 
     path: "/",
    },
    {
      name: "What I bring",
      path: "/skills",
    },
    {
      name: "Live Projects",
      path: "/projects",
    },
    {
      name: "Contact",
      path: '',
    },
]

export const interests = [
  {
    title: 'Save our planet',
    gif: '/images/trees.gif',
    gif_static: '/images/trees_static.png',
    text: 'The fight against desctruction of habitat and pollution of our atmospheres for the gain of a few is something that is very close to my heart...',
    bg: '#ade006',
    id: 1,
  },
  {
    title: 'Balanced Societies',
    gif: '/images/equal.gif',
    gif_static: '/images/equal_static.png',
    text: 'together with the right for a safe, peaceful and meaningful environment to live in, for every person on this planet...',
    bg: '#fe5f55',
    id: 2,
  },
  {
    title: 'Clean Tech to the rescue',
    gif: '/images/tech.gif',
    gif_static: '/images/tech_static.png',
    text: 'are the reasons for me to change my life and get into development. I believe that technology is one of the big solutions and I am hoping to contribute in my own small way.',
    bg: '#7fdcff',
    id: 3,
  }
]

export const personality =[
  'Inquisitive', 'Independent', 'Problem solver', 'Team player', 'Creative Thinker',
  'Excellent Communication skills', 'Excellent People skills', 'Multilingual'
]

export const media = ['Free Code Camp', 'LeetCode & Hackerrank', 'Egghead', 'Scrimba', 'Framework', 'Udemy', 'Exercism', 'Codesmith']

export const pastTrades = [
  {
    img: '/images/salou.png',
    textOne: '"Spent several years managing a multi-site hospitality business in Spain, with 50 - 70 staff members (seasonal variances). These very fast paced years of my life taught me determination, people skills and more determination. We hit our targets year in year out and made it into a very succesful business"',
    textTwo: '',
    id: 1,
  },
  {
    img: '/images/farming.png',
    textOne: '"Lived in France for several years, managing a large beef farm with one other member of staff (only french speaking). Living and working in very remote places teaches you to be inventive, quick thinking, responsible and problem solving skills."',
    textTwo: '"Also spent several seasons working as a snowsports instructor, taking many students into off-piste areas. Teaching me risk-assesment and people skills."',
    id: 2,
  },
  {
    img: '/images/trading.png',
    textOne: '"The last six years I have been working as a self employed tradesman. Renovating bathrooms was the main trade and I especially enjoy plumbing, tiling and paving."',
    textTwo: '"I combined this with stock trading which is something I have been doing as a hobby for years. This is where I got interested in development as I was always trying to adapt the trading indicators/programs to my liking and most of them are written in Javascript."',
    id: 3,
  }
]

export const myCode = [
  //icon: 1=js, 2=ts, 3=react, 4=next
  {
    img: '/images/brewery.jpg',
    text: 'First PWA. I kept styling very simple so I could focus on learning webpack, serviceworkers/caching and testing. It uses the openbrewerydb API which is American, so the results in Europe are a bit limited. It is a PWA, so not designed for desktop screens. Location needed.',
    tags: 'JavaScript, CSS, Jest, Leaflet, API, PWA',
    link: 'https://github.com/Bponthemove/Breweries',
    live: 'https://piquant-order.surge.sh/',
    icon: ['1'],
    id: 1,
  },
  {
    img: '/images/weather.jpg',
    text: 'A weather app built with Next.js and served on Netlify. Easy accessible right menu for mobile hand-held devices. Weather Outlook with responsive temperature visualization, air pollution chart and weather map with various layers.',
    tags: 'Next, Typescript, Sass, Netlify functions, Chartist, Leaflet maps',
    link: 'https://github.com/Bponthemove/weatherapp',
    live: 'https://optimistic-lewin-59be2b.netlify.app/',
    icon: ['2','4'],
    id: 2,
  },
  {
    img: '/images/landingPageK2.jpg',
    text: 'Landing page for one of my favourite brands. Practising with Next, positioning, scroll behaviour and colors.',
    tags: "Next, Typescript, Sass",
    link: 'https://github.com/Bponthemove/winter_holidays',
    live: 'https://fascinating-gaufre-4f82a8.netlify.app',
    icon: ['2', '4'],
    id: 3,
  },
  {
    img: '/images/news.jpg',
    text: 'News ticker run on a free tier of gNews api. Practising with API calls and handling data.',
    tags: "React, Axios, API's",
    link: 'https://github.com/Bponthemove/news',
    live: 'https://amazing-morse-8d93e7.netlify.app/',
    icon: ['3'],
    id: 4,
  },
  {
    img: '/images/calculatorJS.jpg',
    text: 'Simple calculator made as project for free code camp.',
    tags: "HTML, CSS, JavaScript",
    link: 'https://github.com/Bponthemove/calculatorJS/tree/main',
    live: 'https://golden-griffin-e70875.netlify.app/',
    icon: ['1'],
    id: 5,
  },
  {
    img: '/images/oldPortfolio.jpg',
    text: 'This is my old portfolio, which I made while learning Express and Mongo. Images are served from Cloudinary and authorization is with UserFront. It has a little blog page which is "members only", but sign in has test user and password, so that you dont have to sign up for real.',
    tags: 'Express, Mongo, Mongoose, Userfront, Cloudinary, React',
    link: 'https://github.com/Bponthemove/portfolio',
    live: 'https://kind-shaw-87f836.netlify.app/',
    icon: ['3'],
    id: 6,
  },
  {
    img: '/images/memory.jpg',
    text: 'One of the first things I built when I was learning javascript. My children absolutely love playing memory so I thought it would be a good idea to do that in js. I have later rewritten it in React. And currenlty I am adding TypeScript and making it more responsive.',
    tags: 'JavaScript, board games, React',
    link: 'https://github.com/Bponthemove/Memory',
    live: 'https://memorybp.herokuapp.com/',
    icon: ['3'],
    id: 7,
  },
]

export const stickmanArr = [
  '/images/stickman-pushing1.png',
  '/images/stickman-pushing2.png'
]

export const certificates = [
  {
    url: 'https://www.freecodecamp.org/certification/bpvanzalk/front-end-development-libraries',
    title: 'Front End Development Libraries',
    company: 'freeCodeCamp',
    certId: '01',
  },
  {
    url: 'https://www.freecodecamp.org/certification/bpvanzalk/data-visualization',
    title: 'Data Visualization',
    company: 'freeCodeCamp',
    certId: '02',
  },
  {
    url: 'https://www.freecodecamp.org/certification/bpvanzalk/javascript-algorithms-and-data-structures',
    title: 'JavaScript Algorithms and Data Structures',
    company: 'freeCodeCamp',
    certId: '03',
  },
  {
    url: 'https://www.freecodecamp.org/certification/bpvanzalk/responsive-web-design',
    title: 'Responsive Web Design',
    company: 'freeCodeCamp',
    certId: '04',
  },
  {
    url: 'https://www.freecodecamp.org/certification/bpvanzalk/responsive-web-design',
    title: "Back End Development and Api's",
    company: 'freeCodeCamp',
    certId: '05',
  },
  {
    url: 'https://www.credential.net/27674766-9037-4ab4-9f92-18f4e5e99df4#gs.y1vfm5',
    title: 'Designated HTML5 Specialist',
    company: 'FrameWork',
    certId: '06',
  },
  {
    url: 'https://www.credential.net/bad3c0a0-0e43-4247-9cd2-98565ed9b5b0#gs.vs623t',
    title: 'Designated JavaScript Specialist 2020',
    company: 'FrameWork',
    certId: '07',
  },
  { url: 'https://www.credential.net/87a88871-67c9-4040-8ce4-8bc8a1bc3664#gs.vs60ni',
    title: 'Designated CSS Specialist 2020',
    company: 'FrameWork',
    certId: '08',
  },
  {
    url: 'https://www.hackerrank.com/certificates/60fd8ddfb186',
    title: 'JavaScript (Basic)',
    company: 'HackerRank',
    certId: '09',
  },
  {
    url: 'https://www.hackerrank.com/certificates/612178730f48',
    title: 'JavaScript (Intermediate)',
    company: 'HackerRank',
    certId: '10',
  },
  {
    url: 'https://www.hackerrank.com/certificates/f1b75d297ddd',
    title: 'CSS',
    company: 'HackerRank',
    certId: '11',
  },
  {
    url: 'https://www.hackerrank.com/certificates/3f2b4e3c3776',
    title: 'React',
    company: 'HackerRank',
    certId: '12',
  }
]