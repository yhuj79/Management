import Customer from "./components/Customer";

const customer = {
  id: 1,
  image: "https://placeimg.com/64/64/any",
  name: "홍길동",
  birthday: "980709",
  gender: "남자",
  job: "대학생",
};

function App() {
  return (
    <div>
      <Customer
        id={customer.id}
        image={customer.image}
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    </div>
  );
}

export default App;
