import React from "react";
import { useGlobalContext } from "../context/AppContext";
import { MobileContactForm } from "../components";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const MobileContact = () => {
  const {
    messageSuccess,
    messageWarning,
    setMessageSuccess,
    setMessageWarning,
  } = useGlobalContext();
  return (
    <Wrapper>
      <Helmet>
        <title>Contact Us - Tinos Miles</title>
        <meta
          name="description"
          content="Get in touch with Tinos Miles, a car rental business based in Tinos, Greece. We're here to answer your questions and help you plan your perfect trip to the island."
        />
        <link rel="canonical" href="https://www.tinosmiles.gr/contact" />
        <meta property="og:title" content="Contact Us - Tinos Miles" />
        <meta
          property="og:description"
          content="Get in touch with Tinos Miles, a car rental business based in Tinos, Greece. We're here to answer your questions and help you plan your perfect trip to the island."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dtekdjcan/image/upload/v1679044241/tinosmiles.gr/Meta%20OG/go_tinos-miles-contact_tzv68b.webp"
        />
        <meta property="og:url" content="https://www.tinosmiles.gr/contact" />
      </Helmet>
      <div
        className={`module ${messageSuccess ? "" : "hide"}`}
        style={{
          backgroundColor: "#d4edda",
          color: "#155724",
          border: "1px solid green",
        }}
      >
        <div
          className="--close"
          onClick={() => {
            setMessageSuccess(false);
          }}
        >
          X
        </div>
        <p className="--text">We got your message.</p>
      </div>
      <div
        className={`module ${messageWarning ? "" : "hide"}`}
        style={{
          backgroundColor: "#fff3cd",
          color: "#856404",
          border: "1px solid #ad4a46",
        }}
      >
        <div
          className="--close"
          onClick={() => {
            setMessageWarning(false);
          }}
        >
          X
        </div>
        <p className="--text">woops, is your email correct?</p>
      </div>
      <MobileContactForm />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #ecf1f1;
  padding: 2rem 2rem;
  position: relative;
  display: flex;
  justify-content: center;

  .module {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    font-size: 2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 200px;
    width: 85%;
    position: absolute;
    border-radius: 9px;
  }

  .hide {
    display: none;
  }

  .--close {
    align-self: flex-end;
    padding: 1rem 2rem 0 0;
  }

  .--close:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  .--text {
    margin: 0 0 9rem 0;
  }
`;
export default MobileContact;
