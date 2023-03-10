import React from "react";
import styled from "styled-components";

const Responce = () => {
  return (
    <Wrapper>
      <div className="main-container">
        <div className="logo-container">
          <img
            src="https://res.cloudinary.com/dtekdjcan/image/upload/v1677076389/tinosmiles.gr/tinosmiles_logo_site_400x100_lwb09n.png"
            alt=""
            className="--logo"
          />
        </div>
        <div className="text-container">
          <p className="--welcome">Hi, Theo</p>
          <p className="--subtitle">
            Thank you for contacting Tinos Miles with the following inquiry:{" "}
          </p>
          <ul className="--list">
            <li>Pick-up Location: Hotel</li>
            <li>Pick-up Date/Time: 2023-02-28 at 10.00</li>
            <li>Return Date/Time: 2023-03-10 at 14.00</li>
          </ul>
          <p className="--subtitle">
            We will get back to you as soon as possible.{" "}
          </p>
        </div>
        <div className="img-container"></div>
        <div className="text-container">
          <p className="--subtitle --guide">
            In the meantime click the button below to check out a our guide from
            Tinos with our tips on what to see and where to go.
          </p>
          <button className="btn">Guide to Tinos</button>
          <div className="--divider"></div>
          <div className="--info-container">
            <img
              src="https://res.cloudinary.com/dtekdjcan/image/upload/v1677076389/tinosmiles.gr/info_kwvubh.png"
              alt=""
              className="--info-image"
            />
            <div className="--info-text-container">
              <p className="--welcome --small">How to get to Tinos</p>
              <p className="--text">
                Get some information on how to travel to Tinos, accomendation
                prices, car rental prices, tickets and more.
              </p>
            </div>
          </div>
          <div className="--info-container">
            <img
              src="https://res.cloudinary.com/dtekdjcan/image/upload/v1677076389/tinosmiles.gr/covid_info_zjr4zv.png"
              alt=""
              className="--info-image"
            />
            <div className="--info-text-container">
              <p className="--welcome --small">Our responce to the covid-19</p>
              <p className="--text">
                Find out more on how we take measures to assure your safety and
                those around you.
              </p>
            </div>
          </div>
          <div className="--divider"></div>
          <div className="--footer">Have a question? contact@tinosmiles.gr</div>
        </div>
      </div>
      <div className="social-container">
        <img
          src="https://res.cloudinary.com/dtekdjcan/image/upload/v1677243765/tinosmiles.gr/instagram_ccav7w.png"
          alt=""
          className="--info-image"
        />
        <img
          src="https://res.cloudinary.com/dtekdjcan/image/upload/v1677243765/tinosmiles.gr/facebook_b5b6hr.png"
          alt=""
          className="--info-image"
        />
      </div>
      <div className=".--info-container">
        <p className="--footer-text">
          Tinos Miles | Car Rental Services | Ag.markos, Tinos 84200 GNTO Reg.
          <br />
          No:1178E81000946601 | Tel:+30 694 4187 668
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #f1f3f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  gap: 2rem;

  .--logo {
    width: 400px;
  }

  .--image {
    width: 400px;
  }

  .--info-image {
    width: 40px;
  }

  .main-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 0 1rem;
    max-width: 500px;
    background-color: #fff;
  }

  .logo-container {
    background-color: #6ac1b7;
    padding: 1rem;
    border-radius: 9px;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 0 0 1rem;
    font-size: 2rem;
  }

  .--welcome {
    font-weight: 600;
    color: #0a9695;
    font-size: 3rem;
  }

  .--subtitle {
    font-size: 1.8rem;
    letter-spacing: 0.8px;
    line-height: 1.2;
    color: #555;
  }

  .--list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
    color: #555;
    padding: 1rem 0;
  }

  .img-container {
    background-image: url(https://res.cloudinary.com/dtekdjcan/image/upload/v1678453185/tinosmiles.gr/Start-Exploring_kfvklb.webp);
    background-size: cover;
    background-position: center;
    height: 400px;
  }

  .--guide {
    color: #0a9695;
    font-weight: 600;
    text-align: center;
    padding: 2rem;
    font-size: 1.6rem;
    line-height: 1.2;
  }

  .btn {
    align-self: center;
    color: #fff;
    font-size: 2rem;
    border-radius: 9px;
    background-color: #e67e22;
    width: 200px;
    border: none;
    padding: 2rem 1rem;
    transition: all 0.3s;
  }

  .btn:hover {
    cursor: pointer;
    background-color: #fda14f;
  }

  .--divider {
    border-bottom: 2px solid #ccc;
    margin: 2rem 3rem;
  }

  .--info-container {
    padding-top: 2rem;
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    max-width: 450px;
    align-self: center;
  }

  .--info-text-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .--small {
    font-size: 1.6rem;
  }

  .--text {
    font-size: 1.6rem;
  }

  .--footer {
    align-self: center;
    font-size: 1.6rem;
    padding: 1rem 0;
  }

  .--footer-text {
    text-align: center;
    font-size: 1.2rem;
    color: #555;
  }

  .social-container {
    display: flex;
    gap: 2rem;
  }
`;

export default Responce;
