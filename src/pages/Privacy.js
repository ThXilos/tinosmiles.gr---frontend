import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/AppContext";

const Privacy = () => {
  const { setToggleWarning } = useGlobalContext();
  useEffect(() => {
    window.scrollTo(0, 0);
    setToggleWarning();
  }, [setToggleWarning]);
  return (
    <Wrapper>
      <div className="container">
        <div className="--section --first">
          <h1 className="--primary">Privacy Policy</h1>
          <p className="--subtitle">
            We take your privacy seriously and we are committed to protecting
            your personal information. This Privacy Policy outlines the type of
            information we collect, how we use it and how we protect it.
          </p>
        </div>

        <div className="--section">
          <p className="--secondary">What information do we collect?</p>
          <p className="--subtitle">
            We collect information that you voluntarily provide to us when you
            fill out our contact form. This information may include your name,
            email address, phone number, and any other information you choose to
            provide.
          </p>
        </div>
        <div className="--section">
          <p className="--secondary">How do we use this information?</p>
          <p className="--subtitle">
            The information you provide is used solely for the purpose of
            contacting you in response to your inquiry or message. We do not use
            this information for any other purpose, nor do we share or sell it
            to any third party.
          </p>
        </div>
        <div className="--section">
          <p className="--secondary">How do we protect your information?</p>
          <p className="--subtitle">
            We take appropriate measures to protect your personal information
            from unauthorized access, use, alteration, and disclosure. We use
            industry-standard security measures, such as encryption and secure
            socket layer (SSL) technology, to protect your information.
          </p>
        </div>
        <div className="--section">
          <p className="--secondary">Your rights</p>
          <p className="--subtitle">
            You have the right to access and update the personal information we
            hold about you. You also have the right to request that we delete
            your personal information from our records.
          </p>
        </div>
        <div className="--section">
          <p className="--secondary">Third-party links</p>
          <p className="--subtitle">
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or the content of these
            websites. We encourage you to review the privacy policies of any
            third-party websites you visit.
          </p>
        </div>
        <div className="--section">
          <p className="--secondary">Changes to this Privacy Policy</p>
          <p className="--subtitle">
            We reserve the right to modify this Privacy Policy at any time. Any
            changes will be posted on this page.
          </p>
        </div>
        <div className="--section">
          <p className="--secondary">Contact us</p>
          <p className="--subtitle">
            If you have any questions or concerns about this Privacy Policy,
            please contact us through our contact form.
          </p>
        </div>
        <p className="--date">Last updated: 03/03/2023</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #555;
  display: flex;
  justify-content: center;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 3rem;
    padding: 1rem 0 0 0;
    max-width: 900px;
    padding: 0 0 2rem 0;
  }

  .--first {
    background-color: #ffc107;
    border-radius: 9px;
    padding: 1rem;
    color: #555;
    margin-top: 1rem;
  }

  .--primary {
    font-size: 2.6rem;
    padding: 0 0 1rem;
  }

  .--secondary {
    font-size: 1.6rem;
    font-weight: 600;
    padding-bottom: 1rem;
  }
  .--subtitle {
    font-size: 1.6rem;
    line-height: 1.8;
    letter-spacing: 1.2px;
    text-align: left;
  }

  .--date {
    font-size: 1.6rem;
  }

  @media (max-width: 600px) {
    .container {
      flex-direction: column;
      padding: 2rem;
    }
  }
`;

export default Privacy;
