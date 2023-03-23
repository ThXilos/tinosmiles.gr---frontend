import { useState } from "react";
import { format } from "date-fns";
import styled from "styled-components";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/AppContext";
import Spinner from "./Spinner";

const ContactForm = () => {
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

  const { loading, setLoading, setMessageSuccess, setMessageWarning } =
    useGlobalContext();

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

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="contact-form-container">
        <input
          type="hidden"
          name="phone"
          value={honeypot}
          onChange={handleHoneypot}
        />
        <div className="field-container">
          <p className="field-title">contact information:</p>
          <p className="field-tertiaty">please tell us your name</p>
          <input
            className="input-field"
            id="name"
            type="text"
            name="name"
            value={payload.name}
            onChange={handleChange}
            placeholder="Your name"
          />
          <p className="field-tertiaty">enter a contact email</p>
          <input
            className="input-field"
            id="email"
            name="email"
            value={payload.email}
            onChange={handleChange}
            placeholder="Your email address"
          />
        </div>
        <div className="field-container">
          <p className="field-title">select your dates:</p>
          <p className="field-tertiaty">pick up date</p>
          <input
            className="input-field"
            id="pickupDate"
            type="date"
            name="pickupDate"
            max={payload.returnDate && payload.returnDate}
            min={format(new Date(), `yyyy-MM-dd`)}
            value={payload.pickupDate}
            onChange={handleChange}
          />
          <p className="field-tertiaty">return date</p>
          <input
            className="input-field"
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
        <div className="field-container">
          <p className="field-title">choose time:</p>
          <p className="field-tertiaty">pick up time</p>
          <select
            className="input-field select"
            id="pickupTime"
            name="pickupTime"
            value={payload.pickupTime}
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              Select Time
            </option>
            <option value="10.00">10.00am</option>
            <option value="14.00">14.00pm</option>
            <option value="17.00">17.00pm</option>
            <option value="Other">Other</option>
          </select>
          <p className="field-tertiaty">return time</p>
          <select
            className="input-field select"
            id="returnTime"
            name="returnTime"
            value={payload.returnTime}
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              Select Time
            </option>
            <option value="10.00">10.00am</option>
            <option value="14.00">14.00pm</option>
            <option value="17.00">17.00pm</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="field-container">
          <p className="field-title">pick-up location:</p>
          <p className="field-tertiaty">choose a location</p>
          <select
            className="input-field select"
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
          <button
            className={`btn ${acceptAgreement ? "--active" : "--disabled"}`}
            disabled={!acceptAgreement}
          >
            {loading ? <Spinner /> : "send inquiry"}
          </button>
        </div>
      </form>
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
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 3rem 4rem;
  border-radius: 9px;
  counter-reset: section;

  .contact-form-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 2rem;
  }

  .field-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .field-title {
    font-size: 1.4rem;
    text-transform: capitalize;
    font-weight: 600;
    color: #0a9695;
  }

  .field-title::after {
    counter-increment: section;
    content: counter(section);
    background-color: rgb(10, 150, 149);
    width: 1.2rem;
    height: 1.2rem;
    line-height: 1.2rem;
    border-radius: 50%;
    position: absolute;
    color: #fff;
    text-align: center;
    top: -10px;
    margin-left: 4px;
    padding: 0.5rem;
  }

  .field-tertiaty {
    color: #888;
    font-weight: 600;
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  .input-field {
    width: 25rem;
    color: #777;
    font-size: 1.6rem;
    padding: 0.5rem 1rem;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    height: 3.5rem;
    background-color: rgba(255, 255, 255, 0.2);

    transition: all 0.3s;
  }

  .select {
    height: 4.5rem;
  }

  .select:hover {
    cursor: pointer;
  }

  .date {
    cursor: pointer;
  }

  .input-field:focus {
    outline: none;
    box-shadow: inset 0 0 0 3px #4dd8c7;
    border: none;
  }

  .btn {
    margin-top: 2rem;
    color: #fff;
    font-size: 1.6rem;
    text-transform: uppercase;
    border: none;
    border-radius: 9px;
    padding: 1.5rem 0;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
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

  .terms-accept-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
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

export default ContactForm;
