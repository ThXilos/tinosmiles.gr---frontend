import { useState, useEffect } from "react";
import { format } from "date-fns";
import styled from "styled-components";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/AppContext";
import Spinner from "./Spinner";

const MobileContactForm = () => {
  const initState = {
    name: "",
    email: "",
    pickupDate: "",
    returnDate: "",
    pickupTime: "",
    returnTime: "",
    pickupLocation: "",
  };

  const [honeypot, setHoneypot] = useState("");

  const {
    loading,
    setLoading,
    setMessageSuccess,
    setMessageWarning,
    setToggleWarning,
  } = useGlobalContext();

  const [acceptAgreement, setAcceptAgreement] = useState(false);

  const [payload, setPayload] = useState(initState);

  const checkEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleClick = () => {
    setAcceptAgreement(!acceptAgreement);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload((prev) => ({ ...prev, [name]: value }));
  };

  const handleHoneypot = (e) => {
    setHoneypot(e.traget.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (honeypot) {
      alert("Sorry, your submission could not be processed at this time.");
      return;
    }
    if (!checkEmail(payload.email)) {
      setLoading(false);
      setMessageWarning(true);
      setTimeout(() => {
        setMessageWarning(false);
      }, 3000);
      return;
    }
    try {
      const res = await axios.post(process.env.REACT_APP_MAIL_ROUTE, payload);
      setMessageSuccess(true);
      setLoading(false);
      setPayload(initState);
      setAcceptAgreement(false);
      setTimeout(() => {
        setMessageSuccess(false);
      }, 3000);

      console.log(res.data.message);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  useEffect(() => {
    setToggleWarning();
  }, [setToggleWarning]);

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} class="container inner --center">
        <div className="container --left --col" style={{ gap: "1rem" }}>
          <h1 className="title">
            Feel free
            <br /> to make an inquiry
          </h1>
          <div className="divider"></div>
        </div>

        <input
          type="hidden"
          name="phone"
          value={honeypot}
          onChange={handleHoneypot}
        />
        <div class="container --col">
          <p class="head">name</p>
          <div class="container --col">
            <p class="sub">tell us your name</p>
            <input
              class="input --custom"
              id="name"
              type="text"
              name="name"
              value={payload.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>
        </div>
        <div class="container --col">
          <p class="head">email</p>
          <div class="container --col">
            <p class="sub">enter a contact email</p>
            <input
              class="input --custom"
              id="email"
              name="email"
              value={payload.email}
              onChange={handleChange}
              placeholder="Your email address"
            />
          </div>
        </div>
        <div class="container --col">
          <p class="head">Pick-up location:</p>
          <div class="container --col">
            <p class="sub">the location you would like to pick up your car</p>
            <select
              class="input select --custom"
              id="pickupLocation"
              name="pickupLocation"
              value={payload.pickupLocation}
              onChange={handleChange}
            >
              <option value="" disabled hidden>
                Location
              </option>
              <option value="Harbor">Harbor</option>
              <option value="Hotel">Hotel</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div class="container --col">
          <p class="head">Select your dates</p>
          <div class="container --row">
            <div class="container --col">
              <p class="sub">Pick up date</p>
              <input
                class="input --1 select --custom"
                id="pickupDate"
                type="date"
                name="pickupDate"
                max={payload.returnDate && payload.returnDate}
                min={format(new Date(), `yyyy-MM-dd`)}
                value={payload.pickupDate}
                onChange={handleChange}
              />
            </div>
            <div class="container --col --center">
              <p class="sub">Pick up Time</p>
              <select
                class="input --2 select --custom"
                id="pickupTime"
                name="pickupTime"
                value={payload.pickupTime}
                onChange={handleChange}
              >
                <option value="" disabled hidden></option>
                <option value="10.00">10.00am</option>
                <option value="14.00">14.00pm</option>
                <option value="17.00">17.00pm</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>
        <div class="container --col">
          <div class="container --row">
            <div class="container --col">
              <p class="sub">drop off date</p>
              <input
                class="input --1 select --custom"
                id="returnDate"
                type="date"
                name="returnDate"
                min={
                  payload.pickupDate
                    ? payload.pickupDate
                    : format(new Date(), `yyy-MM-dd`)
                }
                value={payload.returnDate}
                onChange={handleChange}
              />
            </div>
            <div class="container --col --center">
              <p class="sub">drop off Time</p>
              <select
                class="input --2 select --custom"
                id="returnTime"
                name="returnTime"
                value={payload.returnTime}
                onChange={handleChange}
              >
                <option value="" disabled hidden></option>
                <option value="10.00">10.00am</option>
                <option value="14.00">14.00pm</option>
                <option value="17.00">17.00pm</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>
        <div className="terms-accept-container">
          <div
            className={
              acceptAgreement ? "check-box check-box__filled" : "check-box"
            }
            onClick={() => {
              handleClick();
            }}
          ></div>
          <p className="terms-accept-text">
            I agree to the{" "}
            <NavLink className="--link" to="/privacy-policy">
              Privacy Policy
            </NavLink>{" "}
            terms.
          </p>
        </div>
        <button
          className={`btn ${acceptAgreement ? "--active" : "--disabled"}`}
          disabled={!acceptAgreement}
        >
          {loading ? <Spinner /> : "send inquiry"}
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .--left {
    text-align: center;
    color: #0a9695;
  }

  .divider {
    border-bottom: 3px solid #0a9695;
    width: 100%;
  }

  .title {
    font-size: 3rem;
  }

  .--center {
    justify-content: center;
    align-items: center;
  }

  .--col {
    width: 100%;
    flex-direction: column;
    gap: 0.3rem;
  }

  .--row {
    gap: 1rem;
  }

  .--1 {
    max-width: 10em;
  }
  .--2 {
    max-width: 10rem;
    align-self: flex-end;
  }

  .--custom {
    background-color: #b5e0db;
    color: #666;
    height: 4rem;
  }

  .container {
    display: flex;
  }

  .inner {
    gap: 2rem;
    background-color: #fff;
    padding: 2rem;
    border-radius: 9px;
    flex-direction: column;
    justify-content: flex-start;
  }

  .outer {
    padding: 2rem 0;
    background-image: linear-gradient(to right, #0a9695, #0a9695);
    height: 100vh;
  }

  .head {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: #0a9695;
  }

  .sub {
    margin-bottom: 0.3rem;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.2rem;
    color: #666;
  }

  .input {
    padding: 0 0.5rem;
    font-size: 2rem;
    height: 4rem;
    border: none;
    border-radius: 9px;
  }

  .select:hover {
    cursor: pointer;
  }

  .date {
    cursor: pointer;
  }

  .input:focus {
    outline: none;
    box-shadow: inset 0 0 0 3px #4dd8c7;
    border: none;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    min-width: 100px;
    font-size: 2rem;
    padding: 1rem 2rem;
    border-radius: 9px;
    border: none;
    background-color: #6ac1b7;
    color: #fff;
    text-transform: uppercase;
    transition: all 0.3s ease-in;
  }

  .terms-accept-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0 0;
    gap: 1rem;
  }
  .terms-accept-text {
    font-size: 1.6rem;
    color: #777;
    font-weight: 500;
  }

  .check-box {
    width: 10px;
    height: 10px;
    border: 3px solid #777;
  }

  .check-box__filled {
    background-color: #fda14f;
  }

  .check-box:hover {
    width: 10px;
    height: 10px;
    cursor: pointer;
  }

  .--disabled {
    background-color: #555;
  }

  .--active {
    background-color: #6ac1b7;
  }

  .--active:hover {
    cursor: pointer;
    background-color: #79c7be;
  }

  .--link {
    text-decoration: none;
    color: #0a9695;
    transition: all 0.3s;
  }

  .--link:hover {
    text-decoration: none;
    color: #6ac1b7;
  }
`;

export default MobileContactForm;
