import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/AppContext";
import { NavLink } from "react-router-dom";

const Quick = () => {
  const { setToggleWarning } = useGlobalContext();
  useEffect(() => {
    setToggleWarning();
  }, [setToggleWarning]);
  return (
    <Wrapper>
      <div className="container">
        <p className="--information">coming soon</p>
        <p className="--primary">
          We are currently working on a new feature to allow faster pickup time.
        </p>
        <p className="--subtitle">
          this allows you to pickup your car as soon as you arrive on the island
          and start your holidays without delay.
        </p>
        <div className="--btn-container">
          <NavLink to="/" className="btn">
            back to home page
          </NavLink>
        </div>
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

  .--information {
    align-self: flex-start;
    margin-left: 1rem;
    text-transform: uppercase;
    font-size: 1.4rem;
    margin-top: 1rem;
    background-color: #ffc107;

    color: #666;
  }

  .--primary {
    font-size: 2.4rem;
    max-width: 500px;
    text-align: center;
    line-height: 1.2;
    letter-spacing: 1.2px;
  }

  .--subtitle {
    font-size: 1.6rem;
    max-width: 500px;
    line-height: 1.8;
    letter-spacing: 1.2px;
    text-align: center;
  }

  .--btn-container {
    padding-top: 2rem;
  }

  .btn {
    background-color: #6ac1b7;
    text-decoration: none;
    color: #fff;
    padding: 1rem 2rem;
    font-size: 2rem;
  }

  .btn:hover {
    cursor: pointer;
  }
`;

export default Quick;
