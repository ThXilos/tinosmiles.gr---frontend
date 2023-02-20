import styled from "styled-components";

const Content = () => {
  return (
    <Wrapper>
      <div className="col-container">
        <div className="col">
          <div className="container contact-info">
            <p className="tertiary">contact</p>
            <div className="contact-info-list">
              <div className="list-item">TEL</div>
              <div className="list-item">EMAIL</div>
              <div className="list-item">OPEN HOURS</div>
              <div className="list-item">MAP PIN</div>
            </div>
          </div>

          <div className="container payment-info">
            <p className="tertiary">pay on location</p>
            <p className="payment-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
              dicta?
            </p>
            <div className="payment-icons">ways of payment</div>
          </div>
        </div>
        <div className="col">
          <div className="col__cta">read more</div>
          <div className="col__text-container">
            <p className="tertiary">About</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              pariatur distinctio quas veniam dolorem incidunt obcaecati eveniet
              eum harum omnis.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="col__cta">book now</div>
        </div>
        <div className="col"></div>
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
    overflow: hidden;
    width: 300px;
    height: 500px;
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  .container {
    display: flex;
    flex-direction: column;
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

  .payment-info {
    gap: 1rem;
    padding: 1rem;
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
