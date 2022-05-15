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
