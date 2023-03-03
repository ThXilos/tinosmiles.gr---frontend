import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/AppContext";

const Terms = () => {
  const { setToggleWarning } = useGlobalContext();
  useEffect(() => {
    setToggleWarning();
  }, [setToggleWarning]);
  return (
    <Wrapper>
      <div className="container">
        <div className="--title-container">
          <p className="--primary">Tinos Miles services Terms & Conditions</p>
        </div>
        <p className="--subtitle">
          The car which is delivered to the renter is in good overall condition,
          without any faults or imperfections which is verified from the renter
          after checking, without setting out any reservations and he/she agreed
          to return it in the same condition, with the accessories, tools tires
          and documents which the vehicle had at the date of delivery.
        </p>
        <p className="--subtitle">
          The renter is fully responsible for the vehicle’s ignition key and in
          case of loss within the period of the rental agreement; he/she shall
          cover the expenses of reissuing the vehicle’s key.
        </p>
        <p className="--subtitle">
          The renter by signing agrees that if he/she causes and accident,
          damages the vehicle that he/she rented or to third parties (included
          passengers of the car), intentionally or negligently, he/she
          undertakes full responsibility and the obligation to settle and pay
          off the whole expenses of repairs and their restitution as well as
          compensation to the rent-a-car business (Tinos Miles) of the daily
          charge rate, until the vehicle is available again for renting. The
          renter is also responsible to pay any damages not covered by the
          insurance contract of the vehicle.
        </p>
        <p className="--subtitle">
          The renter agrees that he read the terms and conditions of the third
          party liability insurance which covers the vehicle and driver, as well
          as that he/she is not insured if a passenger of the car has an
          accident and the renter was responsible and or there is an accident
          and the renter was not driving the vehicle.
        </p>
        <p className="--subtitle">
          The renter must not allow anybody else to drive/use the car, as well
          as not allow him-self to drive/use the car under the influence of
          alcohol or drugs.
        </p>
        <p className="--subtitle">
          In case of an accident or damages to the car, the renter must do the
          following:
          <ul className="--list">
            <li>
              Park the car is a safe point and report immediately to the
              rent-a-car business (Tinos Miles).
            </li>
            <li>Report the accident to the police.</li>
            <li>
              Obtain details of the accident and damages as well as name and
              address of possible witnesses.
            </li>
          </ul>
        </p>
        <p className="--subtitle">
          The driver’s minimum age limit is 23 years and the renter’s driving
          license must have been issued at least one year before.
        </p>
        <p className="--subtitle">
          The renter is obligated to conform and drive the car according to the
          traffic rules and not to use it for racing or contest, to drive on
          sandy areas or rough ground, as well as any other areas or in any
          other way that might cause damage to the car, or is forbidden by the
          Traffic Authorities. If the car is damaged due to driving on rough
          ground the renter will be fully responsible to pay for the damages.
          The renter has full liability to pay for all fines of parking and
          traffic violations, given to him or to the car during the period
          mentioned is this rental agreement.
        </p>
        <p className="--subtitle">
          The renter acknowledges and agrees the he/she is obligated to settle
          and pay immediately, upon return of the vehicle the whole sum due to
          the rent-a-car business (Tinos Miles) such as rent, taxes and rates as
          well as charges for delays, damages, damages to tiers, or fines for
          parking and traffic violations.
        </p>
        <p className="--subtitle">
          Sea transport of the car is allowed only with written consent/approval
          of the rent-a-car business (Tinos Miles).
        </p>
        <p className="--subtitle">
          The renter is obligated to return the vehicle with the same quantity
          of fuel mentioned in the front page of the rental agreement.
        </p>
        <p className="--subtitle">
          For any misunderstanding, disputes or disagreements between renter and
          the rent-a-car business (Tinos Miles) will be settled under the
          jurisdiction of the Greek Legal Authorities and especially the Legal
          Authorities of Ermoupoli Syros.
        </p>
        <p className="--subtitle">
          The renter is informed that Smoking is NOT Allowed within the vehicle
          at any point and he/she will be obligated to cover cleaning expenses
          to remove smells.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #555;
  display: flex;
  justify-content: center;

  .container {
    max-width: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 3rem;
    padding: 1rem 0 2rem 0;
  }

  .--title-container {
  }

  .--list {
    padding: 1rem 0 0 2rem;
  }

  .--primary {
    margin-top: 2rem;
    font-size: 1.6rem;
    font-weight: 600;
  }

  .--subtitle {
    font-size: 1.6rem;
    line-height: 1.8;
    letter-spacing: 1px;
    text-align: left;
  }

  @media (max-width: 600px) {
    .container {
      flex-direction: column;
      padding: 0 1rem;
    }
  }
`;

export default Terms;
