import React from "react";
import styled from "styled-components";
import { vilages } from "../utils/vilages";
import {
  BsEyeFill,
  BiDrink,
  FaCoffee,
  GiKnifeFork,
  TbSunset,
  MdPhotoCamera,
  MdMuseum,
} from "../utils/icons";

const Guide = () => {
  return (
    <Wrapper>
      <div className="card-container">
        {vilages.map((vilage, index) => {
          return (
            <div key={index} className="--card --flex-col">
              <div
                className="title-container --flex-row"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.5)),url(${vilage.img})`,
                }}
              >
                <div className="icon-container --flex-col">
                  {vilage.icons.map((icon, index) => {
                    switch (icon) {
                      case "1":
                        return <BsEyeFill />;
                      case "2":
                        return <BiDrink />;
                      case "3":
                        return <FaCoffee />;
                      case "4":
                        return <GiKnifeFork />;
                      case "5":
                        return <TbSunset />;
                      case "6":
                        return <MdPhotoCamera />;
                      case "7":
                        return <MdMuseum />;
                      default:
                        return "";
                    }
                  })}
                </div>
                <p className="--title">{vilage.name}</p>
              </div>
              <div className="info-container">
                <p className="info-text">{vilage.description}?</p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;

  .card-container {
    max-width: 1200px;
    display: flex;
    justify-content: center;
    padding: 3rem 0;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .--flex-col {
    display: flex;
    flex-direction: column;
  }

  .--flex-row {
    display: flex;
    flex-direction: row;
  }

  .--card {
    height: 350px;
    width: 300px;
  }

  .icon-container {
    padding: 1rem;
    gap: 1rem;
    color: #fff;
    font-size: 2rem;
  }

  .title-container {
    height: 250px;
    align-items: flex-start;
    justify-content: space-between;
    background-size: cover;
    background-position: left;
    background-color: #79c7be;
  }

  .--title {
    padding: 1rem 2rem;
    background-color: #0a9695;
    font-size: 1.4rem;
    text-transform: uppercase;
    color: #fff;

    letter-spacing: 1.2px;
  }

  .info-container {
    height: 100px;
    background-color: #ecf1f1;
  }

  .info-text {
    color: #0a9695;
    font-size: 1.6rem;
    letter-spacing: 1.2px;
    line-height: 1.5;
    padding: 1rem;
  }

  @media (max-width: 768px) {
    .card-container {
      padding: 3rem 1rem;
    }

    .--card {
      width: 100%;
    }
  }
`;

export default Guide;
