import React, { useState } from "react";
import { post } from "axios";

function CustomerAdd() {
  const [file, setFile] = useState(null);
  const [userName, setUserName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [job, setJob] = useState("");
  const [fileName, setFileName] = useState("");
  
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
      <form onSubmit={handleForSubmit}>
        <h1>고객추가</h1>
        프로필 이미지 : <input type="file" name="file" file={file} value={fileName} onChange={handleFileChange} /><br />
        이름 : <input tpye="text" name="userName" value={userName} onChange={handleValueChange} /><br />
        생년월일: <input type="text" name="birthday" value={birthday} onChange={handleValueChange} /><br />
        성별: <input tpye="text" name="gender" value={gender} onChange={handleValueChange} /><br />
        직업: <input tpye="text" name="job" value={job} onChange={handleValueChange} /><br />
        <button type="submit">제출</button>
      </form>
  );
}

export default CustomerAdd;
