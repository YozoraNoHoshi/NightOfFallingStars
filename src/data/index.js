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
      'Jobly was a 7 day sprint, split into two parts of 4 and 3 days. The first 4 days were spent building a backend in node.js using Express, while the last three were spent developing a fluid and responsive single-page frontend.',
    link: '/portfolio/jobly',
    siteLink: 'https://jobly-hoshi.herokuapp.com/',
    image: jobly,
    imgType: 'video',
    cardImage: joblypreview,
    github: 'https://github.com/YozoraNoHoshi/react-jobly'
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
  microblog: {
    title: 'Microblog',
    description:
      'Built over the course of 3 days using React.js and Redux.js, Microblog was a full-stack challenge in managing data flow.\n The project features user authentication through server-generated JSON web tokens stored in local storage and a full CRUD RESTful API.',
    link: '/portfolio/microblog',
    siteLink: 'https://microblog-hoshi.herokuapp.com',
    image: '',
    imgType: '',
    cardImage: groupmuselogo,
    github: 'https://github.com/YozoraNoHoshi/microblog'
  }
};
