import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

function CustomerDel({ id , name , image }) {
  const deleteCustomer = () => {
    const url = "/api/customers/" + id;
    fetch(url, {
      method: "DELETE",
    });
    window.location.reload();
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <DeleteButton onClick={handleOpen}>삭제</DeleteButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
          <img src={image} alt="profile" loading="lazy" />
          <h1 id="modal-modal-title" variant="h6" component="h2">
            {name}(id:{id}) 님 삭제
          </h1>
          <div style={{ display: "flex" }}>
            <Button variant="contained" color="primary" onClick={(e) => deleteCustomer({ id })} style={{ marginRight: "65px" }}>
              확인
            </Button>
            <Button variant="contained" color="error" onClick={handleClose}>
              취소
            </Button>
          </div>
        </Box>
      </Modal>
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
const ModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#353535",
  border: "2px solid #6B6B6B",
  borderRadius: "15px",
  p: 5,
};
export default CustomerDel;
