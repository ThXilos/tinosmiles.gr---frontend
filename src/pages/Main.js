import { Hero, Content } from "../components";
import styled from "styled-components";
const Main = () => {
  return (
    <Wrapper>
      <Hero />
      <Content />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Main;
