import styled from "styled-components";
import ContactForm from "./ContactForm";
import { ArrowDown } from "../utils/icons";

import { useGlobalContext } from "../context/AppContext";

const Hero = () => {
  const { messageSuccess } = useGlobalContext();
  return (
    <Wrapper>
      <div className="hero-text-container">
        <h1 className="primary-title">Rent a car in Tinos</h1>
        <p className="secondary-title">
          Quick and easy have your car waiting on arrival
        </p>
      </div>
      <div className="contact-form-container">
        <div className={`module ${messageSuccess ? "" : "hide"}`}>
          <p>We got your message, we will get right back to you.</p>
        </div>
        <ContactForm />
      </div>
      <div className="btn-container">
        <button className="btn__cta">
          <ArrowDown className="btn__cta__icon" />
          <span>see more</span>
        </button>
        <button className="--btn --call">
          <ArrowDown className="btn__cta__icon" />
          <div className="text-container">
            <span>+30 693-7696-704</span>
          </div>
        </button>
        <button className="--btn --inqu">
          <ArrowDown className="btn__cta__icon" />
          <div className="text-container">
            <span>Make an Inquiry</span>
          </div>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-image: url("img/tinosmiles-hero.jpg");
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .hide {
    display: none;
  }

  .--btn {
    display: none;
  }

  .hero-text-container {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .primary-title {
    font-size: 5rem;
  }

  .secondary-title {
    font-size: 3rem;
    font-weight: 500;
  }

  .contact-form-container {
    position: relative;
  }

  .module {
    border-radius: 9px;
    color: #fff;
    font-size: 1.6rem;
    padding: 1rem 2rem;
    background-color: #4bb543;
    text-align: center;
    position: absolute;
    top: -17%;
    left: 50%;
    transform: translateX(-50%);
    width: 30%;
  }

  .btn__cta {
    background-color: #6ac1b7;
    color: #fff;
    font-size: 2rem;
    text-transform: uppercase;
    border: none;
    border-radius: 9px;
    padding: 1.5rem 2rem;
    display: flex;
    gap: 1rem;
    align-items: center;

    transition: all 0.3s;
  }

  .btn__cta:hover {
    cursor: pointer;
    background-color: #79c7be;
  }

  .btn__cta__icon {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    height: 70vh;
    justify-content: space-between;
    padding: 2rem 0 2rem;

    .hero-text-container {
      justify-content: center;
      text-align: center;
    }

    .contact-form-container {
      display: none;
    }

    .btn__cta {
      display: none;
    }

    .btn-container {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    .--btn {
      display: flex;
      justify-content: flex-start;
      gap: 3rem;
      align-items: center;
      width: 40rem;
      font-size: 2rem;
      height: 5rem;
      border-style: none;
      color: #fff;
      padding: 0 2rem;

      border-radius: 3px;
    }

    .--btn:hover {
      cursor: pointer;
    }

    .text-container {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .--inqu {
      background-color: #0a9695;
      transition: all 0.3s;
    }

    .--call {
      background-color: #e67e22;
      transition: all 0.3s;
    }

    .--call:hover {
      background-color: #fda14f;
    }

    .--inqu:hover {
      background-color: #79c7be;
    }
  }
`;

export default Hero;
