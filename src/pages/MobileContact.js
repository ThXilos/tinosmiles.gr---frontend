import React from "react";
import { MobileContactForm } from "../components";
import styled from "styled-components";
const MobileContact = () => {
  return (
    <Wrapper>
      <MobileContactForm />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #ecf1f1;
  padding: 2rem 2rem;
`;
export default MobileContact;
