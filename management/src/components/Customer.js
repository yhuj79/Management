import React from "react";
import styled from "styled-components";

function Customer({ id, image, name, birthday, gender, job }) {
  return (
    <CustomerDiv>
      <div>{id}</div>
      <div>
        <img src={image} alt="profile" />
      </div>
      <div>{name}</div>
      <div>{birthday}</div>
      <div>{gender}</div>
      <div>{job}</div>
    </CustomerDiv>
  );
}
const CustomerDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default Customer;
