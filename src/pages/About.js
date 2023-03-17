import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { useGlobalContext } from "../context/AppContext";

const About = () => {
  const { setToggleWarning } = useGlobalContext();
  useEffect(() => {
    setToggleWarning();
  }, [setToggleWarning]);
  return (
    <Wrapper>
      <Helmet>
        <title>About Us - Tinos Miles</title>
        <meta
          name="description"
          content="Learn more about Tinos Miles, a car rental business based in Tinos, Greece. Our experienced team is dedicated to providing exceptional customer service and helping you make the most of your time on the island."
        />
        <link rel="canonical" href="https://www.tinosmiles.gr/about" />
        <meta property="og:title" content="About Us - Tinos Miles" />
        <meta
          property="og:description"
          content="Learn more about Tinos Miles, a car rental business based in Tinos, Greece. Our experienced team is dedicated to providing exceptional customer service and helping you make the most of your time on the island."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dtekdjcan/image/upload/v1678443852/tinosmiles.gr/tinos-miles-fast-pick-up-img_lfwchy.webp"
        />
        <meta property="og:url" content="https://www.tinosmiles.gr/about" />
      </Helmet>
      <div className="container">
        <h1 className="--secondary">About Tinos Miles</h1>
        <p className="--primary">Our Story</p>
        <p className="--subtitle">
          Tinos Miles is a new car rental business in Tinos which offers the
          ability to its customers of pick-up and returns of their vehicle at
          any location of the island.
        </p>
        <p className="--subtitle">
          Our goal is when guests rent a car in Tinos they discover its secrets
          and ensure the best authentic experiences the island has to offer.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #0a9695;
  color: #fff;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 60vh;
  }

  .--primary {
    font-size: 5rem;
    padding-top: 2rem;
  }

  .--secondary {
    font-size: 3rem;
  }
  .--subtitle {
    font-size: 1.6rem;
    max-width: 500px;
    line-height: 1.8;
    letter-spacing: 1.2px;
    text-align: left;
  }

  @media (max-width: 600px) {
    .container {
      padding: 0 1rem;
    }
  }
`;

export default About;
