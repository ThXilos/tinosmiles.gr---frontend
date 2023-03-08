import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/AppContext";

const About = () => {
  const { setToggleWarning } = useGlobalContext();
  useEffect(() => {
    setToggleWarning();
  }, [setToggleWarning]);
  return (
    <Wrapper>
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
