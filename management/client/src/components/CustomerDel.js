import styled from "styled-components";

function CustomerDel({ id }) {
  const deleteCustomer = () => {
    const url = "/api/customers/" + id;
    fetch(url, {
      method: "DELETE",
    });
    window.location.reload();
  };

  return (
    <div>
      <DeleteButton onClick={(e) => deleteCustomer({ id })}>삭제</DeleteButton>
    </div>
  );
}
const DeleteButton = styled.div`
  margin-top: 30px;
  background-color: #353535;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #6b6b6b;

  &:hover {
    background-color: #6b6b6b;
  }
`
export default CustomerDel;
