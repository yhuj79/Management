import React from "react";
import styled from "styled-components";

function Customer({ id, image, name, birthday, gender, job }) {
  return (
    <CustomerDiv>
      <div className="customer-id">{id}</div>
      <div className="customer-image">
        <img src={image} alt="profile" />
      </div>
      <div className="customer-name">{name}</div>
      <div className="customer-birthday">{birthday}</div>
      <div className="customer-gender">{gender}</div>
      <div className="customer-job">{job}</div>
    </CustomerDiv>
  );
}
const CustomerDiv = styled.div`
  display: flex;
  justify-content: center;

  .customer-id, .customer-image, .customer-name,
  .customer-birthday, .customer-gender, .customer-job {
    width: 200px;
    height: 80px;
    line-height: 6;
  }

  .customer-image {
    margin-top: 18px;
  }
`
export default Customer;
