import { useState } from "react";
import { Button } from "@/components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="w-full max-w-screen-xl mx-auto p-8 flex flex-col gap-4">
      <h1>Vite + React</h1>

      <div>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </main>
  );
}

export default App;
