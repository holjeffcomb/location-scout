import React from "react";
import Main from "./components/Main";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

function App() {
  return (
    <>
      <Flowbite>
        <DarkThemeToggle />
        <Main />
      </Flowbite>
    </>
  );
}

export default App;
