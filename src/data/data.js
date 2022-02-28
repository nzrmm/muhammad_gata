import Html from '@iconify/icons-bx/bxl-html5';
import Css from '@iconify/icons-bx/bxl-css3';
import Javascript from '@iconify/icons-bx/bxl-javascript';
import Sass from '@iconify/icons-bx/bxl-sass';
import Bootstrap from '@iconify/icons-bx/bxl-bootstrap';
import Tailwind from '@iconify/icons-bx/bxl-tailwind-css';
import Vue from '@iconify/icons-bx/bxl-vuejs';
import Github from '@iconify/icons-bx/bxl-github';
import Facebook from '@iconify/icons-bx/bxl-facebook-circle';
import Linkedin from '@iconify/icons-bx/bxl-linkedin';

export const socials = [
  {
    id: 1,
    icon: Github,
    link: 'https://github.com/nzrmm',
  },
  {
    id: 2,
    icon: Facebook,
    link: 'https://web.facebook.com/profile.php?id=100010330266856',
  },
  {
    id: 1,
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/muhammad-gata-44a66b1b5/',
  },
];

export const skills = [
  {
    id: 1,
    name: 'Html',
    icon: Html,
  },
  {
    id: 2,
    name: 'Css',
    icon: Css,
  },
  {
    id: 3,
    name: 'Javascript',
    icon: Javascript,
  },
  {
    id: 4,
    name: 'SASS',
    icon: Sass,
  },
  {
    id: 5,
    name: 'Bootstrap',
    icon: Bootstrap,
  },
  {
    id: 6,
    name: 'Tailwind',
    icon: Tailwind,
  },
  {
    id: 7,
    name: 'Vue',
    icon: Vue,
  },
];

export const projects = [
  {
    id: 1,
    slug: 'cuanmaker-dashboard',
    img: 'projects/project-1.webp',
    title: 'Cuanmaker Dashboard',
    tags: ['tailwindcss', 'vue 3'],
    snippet:
      'Slicing dashboard design from discord challenge Mas Azarie Muhammad.',
    description:
      'I am interested in the challange of this project because dashboard layout is pretty good for increasing my learning progress. I build this project with Vue JS, Tailwind CSS, Axios. Thank you for @azarie_muhammad and @mhdfariz in waveast discord for this design.',
    linkGithub: 'https://github.com/nzrmm/cuanmakers',
    linkLiveProject: 'https://cuanmakers-nzrmm.vercel.app/',
  },
  {
    id: 2,
    slug: 'countries',
    img: 'projects/project-2.webp',
    title: 'Countries Finder',
    tags: ['tailwindcss', 'vue 3', 'axios'],
    snippet:
      'Countries finder from Frontend Mentor Challenge and API from restcountries.com',
    description:
      'I first heard of this challenge from frontendmentor.com, this website. This website provides several challenges to be done. In this challange, i explore about routing in website, state management, reusable component, and flexbox.',
    linkGithub: 'https://github.com/nzrmm/countries',
    linkLiveProject: 'https://countries-nzrmm.vercel.app/',
  },
  {
    id: 3,
    slug: 'gpt3-slicing',
    img: 'projects/project-3.webp',
    title: 'GPT 3 Slicing',
    tags: ['bootstrap 5', 'sass'],
    snippet: 'Slicing landing page design from arshakir dribbble collection.',
    description:
      'I found this free design in Arshakir portfolio, i choose this design because i think it is very beautifull and colorfull. In this challenge, i explore more about sass and bootstrap 5. Sass is very helpful to write css code more easily.',
    linkGithub: 'https://github.com/nzrmm/gpt3-slicing',
    linkLiveProject: 'https://gpt3-slicing.vercel.app',
  },
];

export const certificates = [
  {
    id: 1,
    name: 'Dicoding',
    snippet: 'Start learning directed with the learning path.',
    images: [
      {
        id: 1,
        slug: 'dicoding-web-beginner',
        img: 'certificates/dicoding-web-beginner.webp',
      },
      {
        id: 2,
        slug: 'dicoding-web-frontend-fundamental',
        img: 'certificates/dicoding-web-frontend-fundamental.webp',
      },
    ],
  },
  {
    id: 2,
    name: 'Freecodecamp',
    snippet: 'Learn to code — for free, build projects, earn certifications.',
    images: [
      {
        id: 1,
        slug: 'freecodecamp-responsive-web-design',
        img: 'certificates/freecodecamp-responsive-web-design.webp',
      },
    ],
  },
];
