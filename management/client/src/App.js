import styled from "styled-components";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "홍길동",
    birthday: "980709",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "호날두",
    birthday: "850205",
    gender: "남자",
    job: "축구선수",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "메시",
    birthday: "870624",
    gender: "남자",
    job: "축구선수",
  },
];

function App() {
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
        {customers.map((m) => {
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
        })}
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
