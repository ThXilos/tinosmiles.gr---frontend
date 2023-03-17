import { Hero, Content, Location } from "../components";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const Main = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Tinos Miles - Car Rental in Tinos, Greece</title>
        <meta
          name="description"
          content="Rent a car in Tinos, Greece with Tinos Miles. We offer small economy cars at competitive prices to help you explore the island in style and comfort."
        />
        <link rel="canonical" href="https://www.tinosmiles.gr/" />
        <meta
          property="og:title"
          content="Tinos Miles - Car Rental in Tinos, Greece"
        />
        <meta
          property="og:description"
          content="Rent a car in Tinos, Greece with Tinos Miles. We offer small economy cars at competitive prices to help you explore the island in style and comfort."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dtekdjcan/image/upload/v1678443852/tinosmiles.gr/tinos-miles-front-door_wyfr0h.webp"
        />
        <meta property="og:url" content="https://www.tinosmiles.gr/" />
      </Helmet>
      <Hero />
      <Content />
      <Location />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Main;
