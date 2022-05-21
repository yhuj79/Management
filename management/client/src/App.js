import { useState, useEffect } from "react";
import Customer from "./components/Customer";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import "./App.css";
import CustomerAdd from "./components/CustomerAdd";
import Title from "./components/Title";

function App() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/customers")
      .then((res) => {
        setLoading(true);
        return res.json();
      })
      .then((data) => {
        setCustomers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <ClipLoader size={100} color="white" />
        <p>잠시만 기다려 주세요!</p>
      </div>
    );
  }

  return (
    <div>
      <Title />
      <HeadDiv>
        <div className="head-id">번호</div>
        <div className="head-image">프로필</div>
        <div className="head-name">이름</div>
        <div className="head-birthday">생년월일</div>
        <div className="head-gender">성별</div>
        <div className="head-job">직업</div>
      </HeadDiv>
      <div>
        {customers !== 0
          ? customers.map((m) => {
              return (
                <Customer
                  key={m.id}
                  id={m.id}
                  image={m.image}
                  name={m.name}
                  birthday={m.birthday}
                  gender={m.gender}
                  job={m.job}
                />
              );
            })
          : ""}
      </div>
      <CustomerAdd />
    </div>
  );
}
const HeadDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #353535;
  border-top: 1px solid #6B6B6B;
  border-bottom: 1px solid #6B6B6B;
  font-size: 18px;

  .head-id,
  .head-image,
  .head-name,
  .head-birthday,
  .head-gender,
  .head-job {
    width: 200px;
  }
`;
export default App;
