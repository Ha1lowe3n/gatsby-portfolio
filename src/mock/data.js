import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'TI v IT | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Igor Trifonov',
  subtitle: "I'm the JavaScript Developer",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-main.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'google.jpg',
    title: 'Google seacrh',
    info: 'Клон Google-поиск с использованием firebase.',
    info2: '',
    url: 'https://search-clone-16051.web.app/',
    repo: 'https://github.com/Ha1lowe3n/react-google-search-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pizza.jpg',
    title: 'Pizza',
    info: 'Интернет-магазин с использованием Redux. Работал с react-skeleton, redux-thunk, хуками, react-router-dom, axios, json-server.',
    info2: '',
    url: 'https://trigan-pizza.herokuapp.com/',
    repo: 'https://github.com/Ha1lowe3n/react_pizza', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mini-twitter.jpg',
    title: 'Мини-твиттер',
    info: 'что-то вроде todo-list в ООП стиле.',
    info2: '',
    url: 'https://todo-twitter.herokuapp.com/',
    repo: 'https://github.com/Ha1lowe3n/react-mini-twitter', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'simple-chat.jpg',
    title: 'Simple chat',
    info: 'Минималистичный чат с использованием socket.io и Express.',
    info2: '',
    url: 'https://chat-s1mple.herokuapp.com/',
    repo: 'https://github.com/Ha1lowe3n/react-chat-simple', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'telo.jpg',
    title: 'Фитнес',
    info: 'Фитнес-сайт',
    info2: '',
    url: 'https://telo.netlify.app/',
    repo: 'https://github.com/Ha1lowe3n/js-middle', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'https://t.me/Ha1lowe3n',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ha1lowe3n/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Ha1lowe3n',
    },
    {
      id: nanoid(),
      name: 'vk',
      url: 'https://vk.com/ha1lowe3n',
    },
    {
      id: nanoid(),
      name: 'telegram',
      url: 'https://t.me/Ha1lowe3n',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
