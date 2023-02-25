import React from "react";
import styled from "styled-components";
import { FiInstagram, FiFacebook } from "../utils/icons";
const Footer = () => {
  return (
    <Wrapper>
      <div className="container --col">
        <div className="col-1">
          <p className="--col-title">quick payment option</p>
          <img
            src="https://res.cloudinary.com/dtekdjcan/image/upload/v1677243757/tinosmiles.gr/viva-payment-image_de4q7r.png"
            alt="viva wallet online payment banner"
            className="payment-image"
          />
        </div>
        <div className="col-2">
          <p className="--col-title">office hours 9:00 am - 9:00 pm</p>
          <ul className="--ul">
            <li>+30 6944187668</li>
            <li>contact@tinosmiles.gr</li>
            <li>GNTO Reg. No:1178E81000946601</li>
          </ul>
        </div>
        <div className="col-3">
          <p className="--col-title">terms and privacy</p>
          <ul className="--ul">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Special Purpose Compensation 2019-2020</li>
          </ul>
        </div>
      </div>
      <div className="container --cp">
        <p className="cp-text">&#169; 2019-2023 tinos miles</p>
        <div className="container --sis">
          <FiInstagram className="--si" />
          <FiFacebook className="--si" />
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
    font-weight: 500;
  }

  .--ul {
    text-transform: none;
    list-style: none;
    padding: 2rem 0 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .payment-image {
    margin-top: 1rem;
    border-radius: 9px;
    width: 80%;
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
  }
`;

export default Footer;
