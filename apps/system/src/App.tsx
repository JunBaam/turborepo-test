import { useState } from "react";

import "./App.css";
import { Button } from "@repo/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button appName="web">Click me!</Button>{" "}
    </div>
  );
}

export default App;
