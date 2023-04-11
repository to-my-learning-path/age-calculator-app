import { useState } from "react";
import "./App.css";
import AgeCalculator from "./components/AgeCalculator";

function App() {
  return (
    <main className=" bg-offWhite min-h-screen grid place-content-center">
      <AgeCalculator />
    </main>
  );
}

export default App;
