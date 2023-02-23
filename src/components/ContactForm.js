import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ContactForm = () => {
  const [acceptAgreement, setAcceptAgreement] = useState(false);
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    pickupDate: "",
    returnDate: "",
    pickupTime: "",
    returnTime: "",
    pickupLocation: "",
  });

  const handleClick = () => {
    setAcceptAgreement(!acceptAgreement);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      process.env.REACT_APP_MAIL_ROUTE,
      payload
    );
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="contact-form-container">
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
            type="email"
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
            value={payload.pickupDate}
            onChange={handleChange}
          />
          <p className="field-tertiaty">return date</p>
          <input
            className="input-field"
            id="returnDate"
            type="date"
            name="returnDate"
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
            <option value="" selected="" disabled="">
              Select Time
            </option>
            <option value="1">10.00am</option>
            <option value="2">14.00pm</option>
            <option value="3">17.00pm</option>
          </select>
          <p className="field-tertiaty">return time</p>
          <select
            className="input-field select"
            id="returnTime"
            name="returnTime"
            value={payload.returnTime}
            onChange={handleChange}
          >
            <option value="" selected="" disabled="">
              Select Time
            </option>
            <option value="1">10.00am</option>
            <option value="2">14.00pm</option>
            <option value="3">17.00pm</option>
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
            <option value="" selected="" disabled="">
              Location
            </option>
            <option value="1">Harbor</option>
            <option value="2">Hotel</option>
            <option value="3">Other</option>
          </select>
          <button className="submit-btn" disabled={!acceptAgreement}>
            send inquiry
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
          I agree to the Privacy Policy terms.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2rem 1rem;
  border-radius: 9px;

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
    font-weight: 500;
    color: #0a9695;
  }

  .field-tertiaty {
    color: #777;
    font-weight: 500;
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

  .submit-btn {
    margin-top: 2rem;
    background-color: #6ac1b7;
    color: #fff;
    font-size: 1.6rem;
    text-transform: uppercase;
    border: none;
    border-radius: 9px;
    padding: 1.5rem 0;
    transition: all 0.3s;
  }

  .submit-btn:hover {
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
    color: #0a9695;
    font-weight: 500;
  }

  .check-box {
    width: 10px;
    height: 10px;
    border: 3px solid #79c7be;
  }

  .check-box__filled {
    background-color: #fda14f;
  }

  .check-box:hover {
    width: 10px;
    height: 10px;
    cursor: pointer;
  }
`;

export default ContactForm;
