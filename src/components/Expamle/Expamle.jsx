import React from "react";
import styled from "styled-components";

const Expamle = () => {
  const ExWrap = styled.div`
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    background: #ccc;
  `;

  const ExTittle = styled.h3`
    text-transform: uppercase;
    color: red;
  `;

  const ExP = styled.p`
    line-height: 1.3;
    color: blue;
  `;

  return (
    <ExWrap>
      <ExTittle>sdaasd</ExTittle>
      <ExP>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea hic, autem
        beatae saepe eveniet quae nesciunt, laboriosam cum reprehenderit numquam
        minus totam facere tempora vero velit distinctio iure aliquid debitis.
      </ExP>
    </ExWrap>
  );
};

export default Expamle;
