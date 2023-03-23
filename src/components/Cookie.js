import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Cookie = () => {
  const checkCookieStatus = () => {
    const cookieArr = document.cookie.split(";");
    console.log(cookieArr);
    console.log(cookieArr[2] === " acceptedCookies=true");
    return cookieArr[2] === " acceptedCookies=true";
  };
  console.log(checkCookieStatus());
  const [acceptCookie, setAcceptCookie] = useState(checkCookieStatus());
  console.log(acceptCookie);
  const handleClick = () => {
    setAcceptCookie(true);
    document.cookie =
      "acceptedCookies=true;expires=Thu, 31 Dec 2099 23:59:59 GMT;path=/;SameSite=None;Secure";
  };

  return acceptCookie ? (
    ""
  ) : (
    <Wrapper>
      <h2 className="--title">We use cookies 🍪</h2>
      <p className="--text">
        Our websites use cookies (also from third parties) for functional and
        analytical purposes. Learn more by reading our{" "}
        <NavLink to="/privacy-policy" className="--link">
          privacy policy
        </NavLink>
        .
      </p>
      <button className="btn-cookie" onClick={handleClick}>
        accept
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  * {
    text-decoration: none;
  }

  position: fixed;
  bottom: 0;
  left: 0;
  padding: 2rem;
  width: 350px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 9px;
  margin: 1rem;
  box-shadow: 0px 0px 10px;

  .--link {
    color: #6ac1b7;
  }

  .--title {
    font-size: 2.2rem;
  }

  .--text {
    font-size: 1.4rem;
    letter-spacing: 1px;
    line-height: 1.8;
  }

  .btn-cookie {
    width: 30%;
    padding: 1rem 2rem;
    background-color: #6ac1b7;
    border: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
  }

  .btn-cookie:hover {
    cursor: pointer;
  }
`;

export default Cookie;
