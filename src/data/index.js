import github from '../static/GitHubLogo.png';
import linkedIn from '../static/LinkedInLogo.png';
import angelList from '../static/AngelListLogo.png';
import resume from '../static/resume.pdf';
import groupmuselogo from '../static/groupmuseLogo.png';
import gmBG from '../static/gb-bg.png';

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
    link: 'https://www.linkedin.com/in/nathan-chin-1b033814a/',
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
      'Jobly was a 7 day sprint, split into two parts of 4 and 3 days. The first 4 days were spent building a backend in node.js using Express, while the last three were spent developing a fluid and responsive single-page front-end.',
    link: '/portfolio/jobly',
    siteLink: 'https://jobly-hoshi.herokuapp.com/',
    image: '',
    cardImage: 'https://i.imgur.com/MKmtLgv.jpg',
    github: 'https://github.com/YozoraNoHoshi/react-jobly'
  },
  groupmuse: {
    title: 'Groupmuse',
    description: 'Details to come',
    link: '/portfolio/groupmuse',
    siteLink: 'https://itunes.apple.com/us/app/groupmuse/id942675649',
    image: gmBG,
    cardImage: groupmuselogo,
    github: ''
  }
};
