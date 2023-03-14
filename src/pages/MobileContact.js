import React from "react";
import { MobileContactForm } from "../components";
import styled from "styled-components";
import { useGlobalContext } from "../context/AppContext";
const MobileContact = () => {
  const {
    messageSuccess,
    messageWarning,
    setMessageSuccess,
    setMessageWarning,
  } = useGlobalContext();
  return (
    <Wrapper>
      <div
        className={`module ${messageSuccess ? "" : "hide"}`}
        style={{ backgroundColor: "#d4edda", color: "#155724" }}
      >
        <div
          className="--close"
          onClick={() => {
            setMessageSuccess(false);
          }}
        >
          X
        </div>
        <p className="--text">
          We got your message, we will get right back to you.
        </p>
      </div>
      <div
        className={`module ${messageWarning ? "" : "hide"}`}
        style={{ backgroundColor: "#fff3cd", color: "#856404" }}
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
    width: 80%;
    position: absolute;
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
    margin: 0 0 8rem 0;
  }
`;
export default MobileContact;
