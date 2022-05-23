import React from 'react';
import styled from "styled-components";

class CustomerDel extends React.Component {

    deleteCustomer(id) {
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        window.location.reload();
    }

    render() {
        return (
            <div>
                <DeleteButton onClick={(e) => {this.deleteCustomer(this.props.id)}}>삭제</DeleteButton>
            </div>
        )
    }

}
const DeleteButton = styled.div`
    margin-top: 30px;
    background-color: #353535;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #6B6B6B;

    &:hover {
        background-color: #6B6B6B;
    }
`
export default CustomerDel;