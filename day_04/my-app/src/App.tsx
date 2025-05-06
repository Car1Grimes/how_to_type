import { useState } from "react";

const App = () => {
  const [countClick, setCountClick] = useState<number>(0);

  function handleClick() {
    setCountClick(countClick + 1);
  }

  const jimmy: UserCard = {
    name: "Jimmy",
    age: 24,
  };
  return (
    <>
      <h1>Hello {jimmy.name}</h1>
      <User name="Jimmy" age={24} />
      <button onClick={() => handleClick()}>Test event</button>
      <div>
        <span>{countClick}</span>
      </div>
    </>
  );
};

function User({ name, age }: UserCard) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age} years old</p>
    </div>
  );
}

type UserCard = {
  name: string;
  age: number;
};
export default App;
