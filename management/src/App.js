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
  );
}

export default App;
