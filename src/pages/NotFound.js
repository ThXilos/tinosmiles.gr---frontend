import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/AppContext";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  const { setToggleWarning } = useGlobalContext();
  useEffect(() => {
    setToggleWarning();
  }, [setToggleWarning]);
  return (
    <Wrapper>
      <div className="container">
        <p className="--primary">-404-</p>
        <p className="--subtitle">
          Ooops, seems like you made i wrong turn somewhere, better go back to
          the last known place on your map...
          <br /> Dont want to run out of gas in the middle of nowhere.
        </p>
        <div className="--btn-container">
          <NavLink to="/" className="btn">
            Lets go back ...
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

  .--primary {
    font-size: 5rem;
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

export default NotFound;
