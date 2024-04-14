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
  MdLocalGasStation,
} from "../utils/icons";

import { gasStationInfo } from "../utils/stations";

function getUpcomingSunday() {
  const today = new Date(); // get the current date
  const dayOfWeek = today.getDay(); // get the current day of the week (0 is Sunday, 1 is Monday, etc.)
  let difference = 7 - dayOfWeek; // calculate how many days to add to reach the next Sunday
  if (dayOfWeek === 0) {
    // if today is already Sunday
    difference = 0; // set difference to 0 to keep today's date
  }
  const upcomingSunday = new Date(today); // create a new Date object to avoid modifying the original date
  upcomingSunday.setDate(today.getDate() + difference); // set the date to the upcoming Sunday

  return upcomingSunday.toDateString(); // format the date as a readable string
}

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
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/dtekdjcan/image/upload/v1678443852/tinosmiles.gr/tinos-miles-fiat-panda-image_niq7ai_gfiifp.webp"
              alt="a white Fiat Panda with no background"
              className="car-image"
            />
          </div>
          <div className="info-container">
            <div className="title-container">
              <p className="tertiary">New Fiat Panda</p>
              <p className="tertiary --strong">Economy</p>
            </div>
            <div className="car-info-container">
              <p className="info-item">5 Person</p>
              <p className="info-item">Manual Drive</p>
              <p className="info-item">2 Luggage</p>
              <p className="info-item">1.2 Cc</p>
            </div>
          </div>
        </div>
        <div className="col col-4">
          <div className="container --cta-box bg1 col-item-1">
            <p className="tertiary --bg-text">Quick pick-up Service</p>
            <p className="tertiary --bg-text --information">coming soon</p>
          </div>
          <div className="container --cta-box bg2 col-item-2">
            <p className="tertiary --bg-text">Explore the island</p>
          </div>
          <div className="container --cta-box bg3 col-item-3">
            <p className="tertiary --bg-text">Open Gas Station:</p>
            <p className="tertiary --bg-text --information">
              {getUpcomingSunday()}
            </p>
            <MdLocalGasStation className="icon-gas" />
            <div className="station-list">
              {gasStationInfo.map((el, index) => {
                if (el.active !== true) {
                  return "";
                }
                return (
                  <div key={index}>
                    <div className="station-list-item">
                      <a
                        href={el.location}
                        target="_blank"
                        rel="noreferrer"
                        className="hyper-link-tag"
                      >
                        {" "}
                        <p className="--text">{el.company}</p>
                        <HiLocationMarker className="--icon" />
                      </a>
                    </div>

                    <p>{el.locationName}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 1600px;
  margin: 0 auto;

  .col-container {
    padding: 5rem 2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    gap:2rem;
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
    border-radius:9px;
    overflow:hidden;
    box-shadow: rgba(149, 157, 165, 0.7) 0px 8px 24px;
  }
  .col-4{

  } 
  
  .col-5{
    display:none;
  }

  .--cta-box{
    height:48%;
    background-size:cover;
    background-position:center;
    justify-content: center;
  }

  .bg1{
    background-image: url(https://res.cloudinary.com/dtekdjcan/image/upload/v1678443852/tinosmiles.gr/tinos-miles-front-door_wyfr0h.webp);
  }

  .bg2{
    background-image: url(https://res.cloudinary.com/dtekdjcan/image/upload/v1678443852/tinosmiles.gr/tinos-miles-explore-image_ukkkvn.webp);
  }

  .bg3{
    background-color:#0a9695;
  }

  .--bg-text{
    background:rgba(106,193,183, 0.7);
    padding:0 1rem;
  }

  .col-2{
    background-image: linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.6)),url(https://res.cloudinary.com/dtekdjcan/image/upload/v1678443852/tinosmiles.gr/tinos-miles-about-image_wdx7zl.webp);
    background-size:cover;
    background-position: right;
  }

  .col-3{
    color:#555;

  }

  .car-image{
    width:100%;
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

  .info-container{
    display:flex;
    flex-direction:column;
    gap:1rem;
    padding:2rem;
  }

  .car-info-container{
    padding:1rem;
    display:grid;
    grid-template-columns:1fr 1fr;
    row-gap:1rem;
    column-gap:0.5rem;
  }

  .info-item{
    background-color:#6ac1b7;
    color:#fff;
    padding:1rem;
    font-size:1.2rem;
    border-radius:9px;
    text-align:center;
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

  .--information{
    align-self:flex-end;
    text-transform:uppercase;
    font-size:1.2rem;
    margin-top:1rem;
    background-color:#ffc107;
    
    color:#666;
  }

  .col-item-3{
    display:none;
  }

  @media(max-width:1200px){
   .col-container{
       flex-wrap:wrap;
   }

   .col-2{
    display:none;
   }
  }

  @media (max-width: 768px) {

    .station-list{
    display:flex;
    flex-direction: row;
    justify-content:center;
    gap:2rem;
    }

    .station-list-item{
      display:flex;
      gap:0.3rem;
      justify-content:center;
      align-items:center;
    }

    .hyper-link-tag{
      text-decoration:none;
      display:flex;
      color:#fff;
    }

    .--icon{
      font-size:2rem;
    }

    .--text{
      font-size:1.8rem;
    }

    .col-container{
      flex-direction:column;
      gap:2rem;
      padding:2rem 1rem;
    }
    
    .contact-info{
      display:none;
    }

    .col {
      width:auto;
    }

    .col-1{
      height:auto;
    }

    .col-4{
      height:80rem;
      gap:2rem;
    }

    .col-item-1{
        order:3;
    }

    .col-item-2{
      order:1;
    }

    .col-item-3{
      order:2;
      display:flex;
    }
    
    .icon-gas{
      align-self:center;
      font-size:10rem;
    }
  }
`;

export default Content;
