import { useState, useEffect } from "react";
function App() {
  const [greeting, setGreeting] = useState<string>("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.text())
      .then(setGreeting);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-center font-bold pt-8">{greeting}</h1>
    </div>
  );
}

export default App;