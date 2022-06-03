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

  // if (loading) { 2022.06.02. 인스턴스 중지.
  //   return (
  //     <div className="loader">
  //       <ClipLoader size={100} color="white" />
  //       <p>잠시만 기다려 주세요!</p>
  //     </div>
  //   );
  // }

  return (
    <div>
      <HeadDiv>
        <Title />
        <HeadFormLine>
          <div className="head-id">고유ID</div>
          <div className="head-image">프로필</div>
          <div className="head-name">이름</div>
          <div className="head-birthday">생년월일</div>
          <div className="head-gender">성별</div>
          <div className="head-job">직업</div>
          <CustomerAddDiv>
            <CustomerAdd />
          </CustomerAddDiv>
        </HeadFormLine>
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
    </div>
  );
}
const HeadDiv = styled.div`
  position: sticky;
  top: 0;
  margin-bottom: 20px;
`;
const HeadFormLine = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin-right: -20px;
  background-color: #353535;
  border-top: 1px solid #6b6b6b;
  border-bottom: 1px solid #6b6b6b;
  font-size: 18px;
  line-height: 2.5;

  .head-id,
  .head-image,
  .head-name,
  .head-birthday,
  .head-gender,
  .head-job {
    width: 200px;
  }
`;
const CustomerAddDiv = styled.div`
  margin-top: -1px;
`;
export default App;
