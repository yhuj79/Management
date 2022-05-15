## RestApi

**Commit : express module , rest api**

Project root 에서 client 폴더 만들고 구분

root 에서 package.json 생성 후 server와 client를 동시에 실행시켜줄 수 있도록 처리 해주기

```json
{
    "name": "management",
    "version": "1.0.0",
    "private": true, // error Command "dev" not found. 관련
    "scripts": {
        "client": "cd client && yarn start", // client 의 실행 순서
        "server": "nodemon server.js", // server.js 파일의 실행
        "dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\""
    },      // yarn dev 를 통해 client와 server를 동시에 실행
    "dependencies": {
        "body-parser": "^1.18.3",
        "express": "^4.16.4",
        // "global": "^4.4.0",
        // "react": "^18.1.0",
        // "react-dom": "^18.1.0",
        // "react-scripts": "^5.0.1"
    },
    "devDependencies": {
        "concurrently": "^4.0.1"
    }
}
```

client 폴더의 gitignore를 root에도 생성

root에 nodemon 설치

nodemon 설치 시 node_modules 폴더 생성됨?

yarn install?

yarn dev 시 ...

```bash
npm i concurrently express --save

yarn add express

yarn add global react-scripts

npm i react react-dom
```

server.js 작성

```javascript
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
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
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

```

client package.json에서 proxy 설정을 해주어야함

```json
    "proxy": "http://localhost:5500/"
```

App.js 에서 /api/customers 의 데이터를 불러오기

```javascript
import styled from "styled-components";
import Customer from "./components/Customer";
import { useState, useEffect } from "react";

function App() {

  const [customers, setCustomers] = useState([]); // 배열 값!

  useEffect(() => {
    fetch('/api/customers') // api 비동기 통신
    .then(res => {
      return res.json(); // res : http 응답
    })
    .then(data => {
      setCustomers(data); // data를 받아서 setCustomers로
    })
  }, []);

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
        {/* 비동기적으로 가져왔기 때문에 비어있게 되기 때문에, 존재하는 경우 map 하는 식으로 */}
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
        }) : ""} {/* 참 값이 아닌 경우 공백 */}
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

```