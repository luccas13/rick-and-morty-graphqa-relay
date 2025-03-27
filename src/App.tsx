import { useState } from "react";
import { Button } from "@/components";
import Characters from "@/components/Characters/Characters";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <Characters />
    </>
  );
}

export default App;
