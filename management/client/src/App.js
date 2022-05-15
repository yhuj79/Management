import styled from "styled-components";
import Customer from "./components/Customer";
import { useState, useEffect } from "react";

function App() {

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('/api/customers')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setCustomers(data);
    })
  }, []);

  // state = {
  //   customers: ""
  // }

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ customers: res }))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('/api/customers');
  //   const body = await response.json();
  // }

  return (
    <div>
      <HeadDiv>
        <div className="head-id">번호</div>
        <div className="head-image">프로필 이미지</div>
        <div className="head-name">이름</div>
        <div className="head-birthday">생년월일</div>
        <div className="head-gender">성별</div>
        <div className="head-job">직업</div>
      </HeadDiv>
      <div>
        {customers!==0 ? customers.map((m) => {
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
        }) : ""}
      </div>
    </div>
  );
}
const HeadDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;

  .head-id, .head-image, .head-name,
  .head-birthday, .head-gender, .head-job {
    width: 200px;
  }
`;
export default App;
