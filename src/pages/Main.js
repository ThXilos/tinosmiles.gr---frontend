import { Hero, Content, Location } from "../components";
import styled from "styled-components";
const Main = () => {
  return (
    <Wrapper>
      <Hero />
      <Content />
      <Location />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Main;
