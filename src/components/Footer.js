import React from "react";
import styled from "styled-components";
import {
  FiInstagram,
  FiFacebook,
  BsTelephone,
  HiOutlineMail,
} from "../utils/icons";
import Cookie from "./Cookie";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <Cookie />
      <div className="container --col">
        <div className="col-1">
          <p className="--col-title">quick payment option</p>
          <a
            href="https://pay.vivawallet.com/tinos-miles-rent-a-car"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dtekdjcan/image/upload/v1677243757/tinosmiles.gr/viva-payment-image_de4q7r.png"
              alt="viva wallet online payment banner"
              className="payment-image"
            />
          </a>
        </div>
        <div className="col-2">
          <p className="--col-title">office hours 9:00 am - 9:00 pm</p>
          <ul className="--ul">
            <li className="--list-item">
              <BsTelephone className="--item-icon" />
              +30 6944187668
            </li>
            <li className="--list-item">
              <HiOutlineMail className="--item-icon" />
              contact@tinosmiles.gr
            </li>
            <li>GNTO Reg. No:1178E81000946601</li>
          </ul>
        </div>
        <div className="col-3">
          <p className="--col-title">terms and privacy</p>
          <ul className="--ul">
            <li>
              <NavLink className="--link-item" to="/privacy-policy">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink className="--link-item" to="/terms-conditions">
                Terms & Conditions
              </NavLink>
            </li>
            <li>Special Purpose Compensation 2019-2020</li>
          </ul>
        </div>
      </div>
      <div className="container --cp">
        <p className="cp-text">tinos miles &#169; 2024</p>
        <div className="container --sis">
          <a
            href="https://www.instagram.com/tinosmiles/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram className="--si" />
          </a>
          <a
            href="https://www.facebook.com/tinossmiles/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFacebook className="--si" />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #0a9695;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  .--col {
    padding: 4rem 15rem;
    flex-direction: row;
    justify-content: space-between;
    color: #fff;
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  .--col-title {
    font-size: 1.4rem;
    font-weight: 600;
  }

  .--ul {
    text-transform: none;
    list-style: none;
    padding: 2rem 0 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .payment-image {
    margin-top: 1rem;
    border-radius: 9px;
    width: 80%;
  }

  .--link-item {
    text-decoration: none;
    color: #fff;
  }

  .--cp {
    padding: 2rem 15rem;
    background-color: #1d242d;
    color: #999;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.2rem;
    text-transform: capitalize;
  }

  .--sis {
    flex-direction: row;
    gap: 1rem;
  }

  .--si {
    font-size: 2.4rem;
    opacity: 0.8;
    transition: all 0.3s;
    color: #fff;
  }

  .--si:hover {
    cursor: pointer;
    opacity: 1;
  }

  .--list-item {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .--item-icon {
    font-size: 2rem;
  }

  @media (max-width: 1300px) {
    .--col {
      padding: 4rem 2rem;
    }
  }

  @media (max-width: 950px) {
    .--col {
      flex-direction: column;
      align-items: flex-start;
      gap: 3rem;
      padding: 2rem 4rem 3rem;
    }

    .--cp {
      flex-direction: column;
      align-items: center;
      padding: 2rem 0 0 0;
    }
  }
`;

export default Footer;
