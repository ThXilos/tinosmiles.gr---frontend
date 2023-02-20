import styled from "styled-components";
import ContactForm from "./ContactForm";
import { ArrowDown } from "../utils/icons";

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-text-container">
        <h1 className="primary-title">Rent a car in Tinos</h1>
        <p className="secondary-title">
          Quick and easy have your car waiting on arrival
        </p>
      </div>
      <div className="contact-form-container">
        <ContactForm />
      </div>
      <div className="btn-container">
        <button className="btn__cta">
          <ArrowDown className="btn__cta__icon" />
          <span>see more</span>
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
`;

export default Hero;
