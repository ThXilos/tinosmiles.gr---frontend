import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/AppContext";
import { Helmet } from "react-helmet";
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
  const { setToggleWarning } = useGlobalContext();
  const [route, setRoute] = useState("");
  useEffect(() => {
    setToggleWarning();
  }, [setToggleWarning]);
  return (
    <Wrapper>
      <Helmet>
        <title>Island Guide - Tinos Miles</title>
        <meta
          name="description"
          content="Discover the best places to visit and things to do in Tinos, Greece with our island guide. From beaches to museums, we've got everything you need to plan your perfect trip."
        />
        <meta
          name="keywords"
          content="car rental, Tinos Island guide, rent a car, Greece, exlore,vilages,activities"
        />
        <link
          rel="canonical"
          href="https://www.tinosmiles.gr/tinos-island-guide"
        />
        <meta property="og:title" content="Island Guide - Tinos Miles" />
        <meta
          property="og:description"
          content="Discover the best places to visit and things to do in Tinos, Greece with our island guide. From beaches to museums, we've got everything you need to plan your perfect trip."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dtekdjcan/image/upload/v1679470116/tinosmiles.gr/Meta%20OG/go_tinos-miles-guide_dhymjk.webp"
        />
        <meta
          property="og:url"
          content="https://www.tinosmiles.gr/tinos-island-guide"
        />
      </Helmet>
      <div className="side-options">
        <div className="--card --title-card --side">
          <h1 className="--primary">tinos island guide</h1>
          <p className="info-text">
            Welcome to our guide of Tinos island. We have put together some of
            our favorite villages to visit and use icons to give some tips on
            what to expect once you get there.
          </p>
          <div className="icon-list">
            <div className="list-item">
              <BsEyeFill />
              <p>beautifull view</p>
            </div>
            <div className="list-item">
              <BiDrink />
              <p>cocktails & driks</p>
            </div>
            <div className="list-item">
              <FaCoffee />
              <p>traditional cafeteria</p>
            </div>
            <div className="list-item">
              <GiKnifeFork />
              <p>taverns & restaurants</p>
            </div>
            <div className="list-item">
              <TbSunset />
              <p>sunset view</p>
            </div>
            <div className="list-item">
              <MdPhotoCamera />
              <p>picturesque scenery</p>
            </div>
            <div className="list-item">
              <MdMuseum />
              <p>museum & local art</p>
            </div>
          </div>
          <p className="info-text">
            We have some prefered routes setup for you that group up the vilages
            by location.
          </p>
          <div className="router-btn-container">
            <p
              className={`route-select ${route === "1" ? "--active" : ""}`}
              onClick={() => setRoute("1")}
            >
              Route 1{" "}
            </p>
            <p
              className={`route-select ${route === "2" ? "--active" : ""}`}
              onClick={() => setRoute("2")}
            >
              Route 2
            </p>
            <p
              className={`route-select ${route === "3" ? "--active" : ""}`}
              onClick={() => setRoute("3")}
            >
              Route 3
            </p>
          </div>
          <div>
            <p className="info-text --ver1">
              {!route &&
                "You are now currently viewing all the villages in the guide, select a route to see our proposals."}
              {route === "1" && (
                <div>
                  <p>Time to spend: The whole day.</p>
                  <p className="--ver2">
                    This will be the longest route in the guide. We propose
                    taking a walk in Kardiani, eating in one of the fish taverns
                    in Panormos, having a traditional desssert in the central
                    square of Pirgos and finally enjoying the sunset with a
                    drink in one the all day bars in Isternia on your way back.
                  </p>
                </div>
              )}
              {route === "2" && "Under Construction"}
              {route === "3" && "Under Construction"}
            </p>
          </div>
        </div>
      </div>
      <div className="card-container">
        {vilages.map((vilage, index) => {
          if (route !== vilage.group && route) {
            return "";
          }
          return (
            <div
              key={index}
              className="--card --flex-col"
              style={{ order: `${vilage.order}` }}
            >
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
                <p className="info-text">{vilage.description}</p>
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

  .side-options {
    padding: 3rem 0 0 1rem;
  }

  .route-select {
    font-size: 1.2rem;
    padding: 1rem 2rem;
    border: 1px solid #0a9695;
    color: #0a9695;
    transition: all 0.3s ease-in;
  }

  .--active {
    background-color: #0a9695;
    color: #fff;
  }

  .route-select:hover {
    cursor: pointer;
    background-color: #0a9695;
    color: #fff;
  }

  .--card {
    height: 350px;
    width: 300px;
  }

  .--side {
    height: auto;
  }

  .router-btn-container {
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem;
  }

  .icon-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 1rem;
    gap: 0.5rem;
  }

  .list-item {
    display: flex;
    gap: 0.5rem;
    font-size: 1.8rem;
    align-items: center;
    color: #666;

    p {
      font-size: 1.2rem;
      text-transform: capitalize;
    }
  }

  .--title-card {
    background-color: #ecf1f1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .--primary {
    padding: 1rem;
    font-size: 3rem;
    color: #0a9695;
    text-transform: capitalize;
  }

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
  .--ver1 {
    background-color: #0a9695;
    color: #fff;
  }

  .--ver2 {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .side-options {
      padding: 3rem 1rem;
    }

    .card-container {
      padding: 3rem 1rem;
    }

    .--card {
      width: 100%;
    }
  }
`;

export default Guide;
