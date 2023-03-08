import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  FiInstagram,
  FiFacebook,
  FiXSquare,
  FiAlertCircle,
} from "../utils/icons";

import { useGlobalContext } from "../context/AppContext";

const Navigation = () => {
  const { toggleWarning, setToggleWarning } = useGlobalContext();
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const handleClick = () => {
    setToggleMobileMenu(!toggleMobileMenu);
  };

  return (
    <Wrapper>
      <div className="info-ribon">
        <div className="info-ribon__contact">
          <p className="info-ribon__contact__text">
            Contact Us: +306937696704 | <span>contact@tinosmiles.gr</span>
          </p>
        </div>
        <div className="info-ribon__social">
          <a
            href="https://www.instagram.com/tinosmiles/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram className="social-icon" />
          </a>
          <a
            href="https://www.facebook.com/tinossmiles/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFacebook className="social-icon" />
          </a>
        </div>
      </div>
      <div className="navigation-ribon">
        <div className="navigation-ribon__logo-container">
          <NavLink to="/">
            <img
              className="logo"
              src="/img/tinosmiles_logo_site_400x100.png"
              alt="The Tinos Miles Logo"
            />
          </NavLink>
        </div>
        <nav className="navigation-ribon__navigation-container">
          <div className="mobile-menu-btn" onClick={handleClick}>
            OPEN
          </div>
          <ul className={`menu-list ${toggleMobileMenu ? "--open" : ""}`}>
            <li>
              <NavLink
                to="/about"
                className="menu-list__item"
                onClick={() => setToggleMobileMenu(false)}
              >
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tinos-island-guide"
                className="menu-list__item"
                onClick={() => setToggleMobileMenu(false)}
              >
                island guide
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/quick-pickup"
                className="menu-list__item"
                onClick={() => setToggleMobileMenu(false)}
              >
                quick-pickup
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={
          toggleWarning ? "warning-ribon" : "warning-ribon warning-ribon__hide"
        }
      >
        <div className="warning-ribon__message">
          <FiAlertCircle />
          <NavLink to="/safety" className="warning-ribon__message__text">
            Tinos Miles Car Rental Response to Covid-19
          </NavLink>
        </div>
        <FiXSquare
          className="warning-ribon__close_btn"
          onClick={() => {
            setToggleWarning();
          }}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 1.6rem;
  position: relative;

  .mobile-menu-btn {
    display: none;
  }

  .info-ribon {
    display: flex;
    justify-content: space-between;
    padding: 1rem 10rem;
    background-color: #0a9695;
    align-items: center;
  }

  .info-ribon__contact__text {
    font-size: 1.6rem;
  }

  .info-ribon__social {
    display: flex;
    gap: 2rem;
  }

  .social-icon {
    font-size: 3rem;
    opacity: 0.8;
    transition: all 0.3s;

    color: #fff;
  }

  .social-icon:hover {
    cursor: pointer;
    opacity: 1;
  }

  .navigation-ribon {
    display: flex;
    background-color: #6ac1b7;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 11rem;
  }

  .logo {
    max-width: 25rem;
  }

  .menu-list {
    display: flex;
    list-style: none;
    font-size: 1.8rem;
    gap: 4rem;
  }

  .menu-list__item {
    opacity: 0.8;
    transition: all 0.3s;
    text-decoration: none;
    color: #fff;
    text-transform: capitalize;
  }

  .menu-list__item:hover {
    opacity: 1;
    cursor: pointer;
  }

  .warning-ribon {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #555;
    background-color: #ffc107;
    transition: all 0.3s;
  }

  .warning-ribon__message {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
  }

  .warning-ribon__message__text {
    text-decoration: none;
    color: #555;
  }

  .warning-ribon__close_btn:hover {
    cursor: pointer;
  }

  .warning-ribon__hide {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }

  @media (max-width: 768px) {
    .info-ribon {
      flex-direction: column;
      padding: 1rem 0;
      gap: 1rem;
    }

    .info-ribon__contact__text {
      font-size: 1.4rem;
    }

    .navigation-ribon {
      display: flex;
      background-color: #6ac1b7;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 1rem;

      position: relative;
    }

    .logo {
      max-width: 20rem;
    }

    .mobile-menu-btn {
      display: block;
    }

    .menu-list {
      background-color: #0a9695;
      position: absolute;
      left: 0;
      top: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 0px;
      overflow: hidden;
      transition: height 0.3s ease-in;
      font-size: 3rem;
    }

    .--open {
      height: 300px;
    }
  }
`;

export default Navigation;
