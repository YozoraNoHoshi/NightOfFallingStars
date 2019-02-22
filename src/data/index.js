import github from '../static/GitHubLogo.png';
import linkedIn from '../static/LinkedInLogo.png';
import angelList from '../static/AngelListLogo.png';
import resume from '../static/resume.pdf';
import groupmuselogo from '../static/groupmuseLogo.png';
import gmBG from '../static/gm.mp4';
import appStore from '../static/AppStoreBadge.svg';
import hsnooze from '../static/hsz.mp4';
import hspreview from '../static/hspreview.png';
import joblypreview from '../static/joblypreview.png';
import jobly from '../static/jobly.mp4';
import mbpreview from '../static/mbpreview.png';
import wpreview from '../static/wpreview.png';
import wb from '../static/wb.mp4';

export const RESUME = resume;
export const CONTACT = [
  {
    name: 'github',
    link: 'https://github.com/YozoraNoHoshi',
    text: 'GitHub',
    logo: github
  },
  {
    name: 'linkedIn',
    link: 'https://www.linkedin.com/in/nathanchin-hoshi/',
    text: 'LinkedIn',
    logo: linkedIn
  },
  {
    name: 'angelList',
    link: 'https://angel.co/nathan-chin-2',
    text: 'AngelList',
    logo: angelList
  }
];

export const PORTFOLIO = {
  jobly: {
    title: 'Jobly',
    description:
      'A job board clone designed in React and Express. \n4 days were spent building a full CRUD RESTful backend complete with JWT-based authentication, while 3 more were spent developing a responsive single-page frontend.',
    link: '/portfolio/jobly',
    siteLink: 'https://jobly-hoshi.herokuapp.com/',
    image: jobly,
    imgType: 'video',
    cardImage: joblypreview,
    github: 'https://github.com/YozoraNoHoshi/react-jobly'
  },
  warbler: {
    title: 'Warbler',
    description:
      "Warbler is server-rendered site based off Social Media giant Twitter. \nWarbler features cookie-based authentication and is powered by Python's Flask framework.",
    link: '/portfolio/warbler',
    siteLink: 'https://warbler-hoshi.herokuapp.com',
    image: wb,
    imgType: 'video',
    cardImage: wpreview,
    github: 'https://github.com/YozoraNoHoshi/warbler'
  },

  hackorsnooze: {
    title: 'Hack or Snooze',
    description:
      "Hack-or-Snooze was a 2 day static HTML/CSS clone of popular site Hacker News.\n The frontend was built using jQuery and jQuery's built in AJAX library.",
    link: '/portfolio/hackorsnooze',
    siteLink: 'https://yozoranohoshi.github.io/Hack-Or-Snooze/',
    image: hsnooze,
    imgType: 'video',
    cardImage: hspreview,
    github: 'https://github.com/YozoraNoHoshi/Hack-Or-Snooze'
  },
  groupmuse: {
    title: 'Groupmuse',
    description:
      "As part of Rithm's curriculum, I worked with Groupmuse - a startup focused on bringing classical music into homely social gatherings - on their iOS mobile application. \n The application was built with React Native and we engineered a reusable template system for screen layout, along with an internal component library.",
    link: '/portfolio/groupmuse',
    siteLink: 'https://itunes.apple.com/us/app/groupmuse/id942675649',
    image: gmBG,
    imgType: 'video',
    cardImage: groupmuselogo,
    github: '',
    badge: appStore
  },
  microblog: {
    title: 'Microblog',
    description:
      'Built over the course of 3 days using React.js, Microblog was a full-stack challenge in managing data flow across multiple levels of components with Redux.js.',
    link: '/portfolio/microblog',
    siteLink: 'https://microblog-hoshi.herokuapp.com',
    image: '',
    imgType: '',
    cardImage: mbpreview,
    github: 'https://github.com/YozoraNoHoshi/microblog'
  }
};
