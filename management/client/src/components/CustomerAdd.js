import React, { useState } from "react";
import { post } from "axios";
import styled from "styled-components";

// material
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function CustomerAdd() {
  const [file, setFile] = useState(null);
  const [userName, setUserName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [job, setJob] = useState("");
  const [fileName, setFileName] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setFile(null);
    setUserName("");
    setBirthday("");
    setGender("");
    setJob("");
    setFileName("");
    setOpen(false);
  };

  const addCustomer = () => {
    const url = `/api/customers`;
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", userName);
    formData.append("birthday", birthday);
    formData.append("gender", gender);
    formData.append("job", job);
    const config = {
      headers: {
        "content-type": "multipart/form-data", // file
      },
    };
    return post(url, formData, config);
  };

  const handleForSubmit = (e) => {
    e.preventDefault();
    addCustomer().then((res) => console.log(res));
    setFile(null);
    setUserName("");
    setBirthday("");
    setGender("");
    setJob("");
    setFileName("");
    window.location.reload();
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.value);
  };

  const handleValueChange = (e) => {
    e.preventDefault();
    if (e.target.name === "userName") {
      setUserName(e.target.value);
    } else if (e.target.name === "birthday") {
      setBirthday(e.target.value);
    } else if (e.target.name === "gender") {
      setGender(e.target.value);
    } else if (e.target.name === "job") {
      setJob(e.target.value);
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        고객추가
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
          <h1 id="modal-modal-title" variant="h6" component="h2">
            고객추가
          </h1>
          <label className="input-file-button" htmlFor="input-file">
            {!file ? (
              <FileLabel>이미지 선택</FileLabel>
            ) : (
              <FileLabel>{fileName}</FileLabel>
            )}
          </label>
          <input type="file" name="file" file={file} value={fileName} onChange={handleFileChange} id="input-file" style={{ display: "none" }} />
          <br />
          <CssTextField label="이름" type="text" name="userName" value={userName} onChange={handleValueChange} />
          <br />
          <br />
          <CssTextField label="생년월일" type="text" name="birthday" value={birthday} onChange={handleValueChange} />
          <br />
          <br />
          <CssTextField label="성별" type="text" name="gender" value={gender} onChange={handleValueChange} />
          <br />
          <br />
          <CssTextField label="직업" type="text" name="job" value={job} onChange={handleValueChange} />
          <br />
          <br />
          <div style={{ display: "flex" }}>
            <Button variant="contained" color="primary" onClick={handleForSubmit} style={{ marginRight: "65px" }}>
              제출
            </Button>
            <Button variant="contained" color="error" onClick={handleClose}>
              닫기
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
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
const FileLabel = styled.div`
  background-color: #dcdcdc;
  border: 2px solid #6b6b6b;
  color: black;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #b1b1b1;
    font-weight: bold;
  }
`;
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#DCDCDC",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#DCDCDC",
  },
  "& .MuiOutlinedInput-root": {
    color: "#47C83E",
    fontWeight: "bold",
    "& fieldset": {
      borderColor: "#DCDCDC",
    },
    "&:hover fieldset": {
      borderColor: "#6B6B6B",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#DCDCDC",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#DCDCDC",
  },
});
export default CustomerAdd;
