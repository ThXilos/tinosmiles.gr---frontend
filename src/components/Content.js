import styled from "styled-components";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcApplePay,
  FaCcDinersClub,
  FaCcAmex,
  HiLocationMarker,
  BsFillDoorOpenFill,
  BsTelephone,
  HiOutlineMail,
} from "../utils/icons";

const Content = () => {
  return (
    <Wrapper>
      <div className="col-container">
        <div className="col col-1">
          <div className="container contact-info shadow">
            <p className="tertiary">contact</p>
            <div className="contact-info-list">
              <div className="list-item">
                <BsTelephone className="contact-icon" /> +30 6937696704
              </div>
              <div className="list-item">
                <HiOutlineMail className="contact-icon" />
                contact@tinosmiles.gr
              </div>
              <div className="list-item">
                <BsFillDoorOpenFill className="contact-icon" />
                9:00 am &mdash; 9:00 pm
              </div>
              <div className="list-item">
                <HiLocationMarker className="contact-icon" />
                <p>Agios Markos, Kionia, 84200</p>
              </div>
            </div>
          </div>

          <div className="container payment-info shadow">
            <p className="tertiary">pay on location</p>
            <p className="card-text">
              Cash or card Payment is made on drop-off on your location
            </p>
            <div className="payment-icons">
              <FaCcVisa className="payment-icon" />
              <FaCcMastercard className="payment-icon" />
              <FaCcApplePay className="payment-icon" />
              <FaCcDinersClub className="payment-icon" />
              <FaCcAmex className="payment-icon" />
            </div>
          </div>
        </div>
        <div className="col col-2 shadow">
          <div className="col__cta">read more</div>
          <div className="col__text-container">
            <p className="tertiary">About</p>
            <p className="card-text">
              We are a small car rental start-up based in Tinos, with a
              selection of economy cars.
            </p>
          </div>
        </div>
        <div className="col col-3 shadow">
          <div className="col__cta">book now</div>
        </div>
        <div className="col col-4 shadow"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 1600px;
  margin: 0 auto;

  .col-container {
    padding: 5rem 0;
    display: flex;
    justify-content: space-between;
  }

  .col {
    color:#fff;
    width: 300px;
    height: 540px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .col-1{}
  .col-2, .col-3{
    background-color:#79c7be;
    border-radius:9px;
    overflow:hidden;
    box-shadow: rgba(149, 157, 165, 0.7) 0px 8px 24px;
  }
  .col-4{

  }  

  .container {
    display: flex;
    flex-direction: column;
    background-color: #0a9695;
    color: #fff;
    border-radius:9px;
    box-shadow: rgba(149, 157, 165, 0.7) 0px 8px 24px;
  }

  .tertiary {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: capitalize;
  }

  .contact-info {
    gap: 1rem;
    padding: 1rem;
  }

  .contact-info-list{
    display:flex;
    flex-direction:column;
    gap:1rem;
    padding:0 0 1rem;
  }

  .contact-icon{
    font-size:2.4rem;
  }

  .list-item{
    display:flex;
    align-items:center;
    gap:1rem;
    background-color:#79c7be;
    padding:1rem 1rem;
    font-size:1.6rem;
  }

  .payment-info {
    gap: 1rem;
    padding: 1rem 1rem 2rem;
  }

  .card-text {
    font-size: 2rem;
    letter-spacing: 1.2px;
    line-height:1.4;
    padding: 0 0 2rem; 0
  }

  .payment-icons {
    justify-content: space-between;
    display: flex;
    gap: 1rem;
  }

  .payment-icon {
    font-size: 3.6rem;
  }
  .col__cta {
    text-transform: uppercase;
    font-size: 2rem;
    color: #fff;
    padding: 2rem 3rem;
    background-color: #6ac1b7;
    flex-grow: 0;
    align-self: flex-end;
  }

  .col__text-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem 1rem;
  }
`;

export default Content;
