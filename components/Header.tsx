import React, { useState } from 'react';

import Image from 'next/image';

const Header = () => {
  const [active, setActive] = useState({ clicked: false, class: '' });

  const handleClick = () => {
    if (active.clicked) {
      setActive({ clicked: false, class: '' });
    } else {
      setActive({ clicked: true, class: 'active' });
    }
  };

  return (
    <div className='Header'>
      <div className='Header__logo'>
        <Image
          src='/logo.svg'
          alt='Disney Plus'
          layout='fill'
          objectFit='cover'
        />
      </div>

      <div className={`Header__sidebar ${active.class}`}>
        <div className='Header__button' onClick={handleClick}>
          {active.clicked ? (
            <div className='Header__xbutton'>x</div>
          ) : (
            <span>&#9776;</span>
          )}
        </div>
        <ul>
          <li>
            <Image src='/home-icon.svg' alt='Home' height='30px' width='30px' />
            HOME
          </li>
          <li>
            <Image
              src='/search-icon.svg'
              alt='Home'
              height='30px'
              width='30px'
            />
            SEARCH
          </li>
          <li>
            <Image
              src='/watchlist-icon.svg'
              alt='Home'
              height='30px'
              width='30px'
            />
            WATCHLIST
          </li>
          <li>
            <Image
              src='/original-icon.svg'
              alt='Home'
              height='30px'
              width='30px'
            />
            ORIGINALS
          </li>
          <li>
            <Image
              src='/movie-icon.svg'
              alt='Home'
              height='30px'
              width='30px'
            />
            MOVIES
          </li>
          <li>
            <Image
              src='/series-icon.svg'
              alt='Home'
              height='30px'
              width='30px'
            />
            SERIES
          </li>
        </ul>
      </div>
      <style jsx>{`
        .Header__logo {
          position: relative;
          margin-left: 5vw;
          height: 80%;
          width: 30%;
        }
        .Header {
          height: 10vh;
          background-color: #090b13;
          display: flex;
          align-items: center;
        }
        .Header__xbutton {
          font-weight: 300;
          font-size: 4rem;
          color: white;
        }
        .Header__sidebar {
          position: fixed;
          top: 0px;
          right: -150px;
          width: 150px;
          height: 100%;
          background-color: #090b13;
          color: white;
          transition: all 200ms linear;
          z-index: 1 !important;
        }
        .Header__sidebar ul li {
          margin: 1rem;
          display: flex;
          align-items: center;
        }
        .Header__sidebar ul li :hover {
          background-color: #10121b;
          cursor: pointer;
        }
        .Header__button {
          position: absolute;
          cursor: pointer;
          top: 0.5rem;
          right: 160px;
          font-size: 3rem;
        }
        .active {
          right: 0px;
        }
      `}</style>
    </div>
  );
};

export default Header;
