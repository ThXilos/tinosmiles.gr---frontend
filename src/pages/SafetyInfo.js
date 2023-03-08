import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/AppContext";

const SafetyInfo = () => {
  const { setToggleWarning } = useGlobalContext();

  useEffect(() => {
    setToggleWarning();
  }, [setToggleWarning]);
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h1 className="--primary">Health and safety</h1>
          <p className="--subtitle">
            At our car rental company, we take health and safety seriously,
            especially during the current pandemic. We want to ensure that you
            have a safe and comfortable experience when renting our vehicles.
          </p>
        </div>
        <ul className="--list">
          <li className="--secondary">
            As part of our commitment to health and safety, we have implemented
            strict cleaning protocols for all of our cars.
          </li>
          <li>
            <p className="--text">
              Before and after each rental, we thoroughly clean and sanitize the
              interior and exterior of our vehicles using disinfectant sprays
              and wipes.
            </p>
          </li>
          <li>
            <p className="--text">
              This includes high-touch areas such as door handles, steering
              wheels, gear shifts, and seat belts.
            </p>
          </li>
          <li>
            <p className="--text">
              We also clean the dashboard, windows, and seats to remove any dirt
              or debris.
            </p>
          </li>
          <li>
            <p className="--text">
              Additionally, we encourage our customers to practice good hygiene
              habits while using our rental cars. This includes wearing a mask,
              washing your hands frequently, and using hand sanitizer.
            </p>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #0a9695;
  color: #fff;
  padding: 10rem 1rem;
  display: flex;
  justify-content: center;

  .container {
    display: flex;
    max-width: 1200px;
    gap: 3rem;
  }

  .--primary {
    font-size: 5rem;
    margin-bottom: 1rem;
  }

  .--subtitle {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  .--secondary {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .--list {
    color: #555;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #ffc107;
    padding: 1rem 1.5rem;
    border-radius: 9px;
  }

  .--text {
    font-size: 2rem;
    letter-spacing: 1px;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }
  }
`;

export default SafetyInfo;
