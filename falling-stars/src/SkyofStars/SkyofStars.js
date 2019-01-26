import React, { PureComponent } from 'react';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import Routes from '../Routes';
import { navItems, siteHead } from '../data/nav.json';
import Navbar from '../Navbar/Navbar';

// The main container

class SkyOfStars extends PureComponent {
  render() {
    return (
      <div className="SkyOfStars">
        <Navbar navItems={navItems} siteHead={siteHead} />
        {/* <LeftSidebar sidebarLinks={this.props.sidebarLinks} /> */}
        <Routes />
      </div>
    );
  }
}

// Effectively a global object containing all the things
SkyOfStars.defaultProps = {
  navItems: [
    { name: 'home', link: '/index.html' },
    { name: 'meme-generator', link: '/index.html' },
    { name: 'matching-game', link: '/index.html' },
    { name: 'blackjack', link: '/index.html' },
    { name: 'stam-calc', link: '/index.html' },
    { name: 'github', link: '/index.html' }
  ],
  sidebarLinks: [
    {
      titleBox: 'Web Dev Links',
      links: [
        {
          logo: {
            image:
              'https://www.rithmschool.com/assets/logos/rithm_logo_black-b2e8a9fa354635ed5a5979961d4836a0bcc54b9751eadc6e023ccc350d0aeb3b.png',
            name: 'Rithm School Logo',
            height: '50px',
            width: '50px'
          },
          name: 'Rithm School',
          link: 'https://www.rithmschool.com'
        },
        {
          logo: {
            image:
              'http://linkis.com/url-image/https://cdn.css-tricks.com/wp-content/uploads/2014/03/css-tricks-star.png',
            name: 'CSS Tricks Logo',
            height: '50px',
            width: '50px'
          },
          link: 'https://css-tricks.com',
          name: 'CSS Tricks'
        }
      ]
    },
    {
      titleBox: 'Anime/Manga',
      links: [
        {
          logo: {
            image: 'https://mangadex.org/images/misc/navbar.svg?3',
            name: 'MangaDex Logo',
            height: '60px',
            width: '60px'
          },
          name: 'MangaDex',
          link: 'https://mangadex.org'
        },
        {
          logo: {
            image:
              'https://forum.novelupdates.com/attachments/nu-curvy-png.7846/',
            name: 'NovelUpdates Logo',
            height: '60px',
            width: '60px'
          },
          name: 'Novel Updates',
          link: 'https://www.novelupdates.com'
        },
        {
          logo: {
            image: 'http://www.userlogos.org/files/icn_reddit2.png',
            name: 'r/manga',
            height: '60px',
            width: '60px'
          },
          name: 'r/manga',
          link: 'https://www.reddit.com/r/manga'
        },
        {
          logo: {
            image: 'https://www.mangaupdates.com/images/mascot.gif',
            name: 'Baka Updates Logo',
            height: '60px',
            width: '60px'
          },
          name: 'Baka Updates',
          link: 'https://www.mangaupdates.com'
        }
      ]
    }
  ]
};

export default SkyOfStars;
