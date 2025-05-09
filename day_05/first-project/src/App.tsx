import { Button } from "./components/Button";
import { useState } from "react";
function App() {
  const [countClick, setCountClick] = useState<number>(0);

  function handleClick() {
    setCountClick(countClick + 1);
  }
  return (
    <>
      <h1>Hello world</h1>
      <Button type="button" onClick={handleClick} label="Click" className="">
        <label>Test click</label>
        <p>Count clicks: {countClick}</p>
      </Button>
    </>
  );
}

export default App;
