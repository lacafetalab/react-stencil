import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MyComponent } from "cafeta-components/react/dist";
import styled from "styled-components";
import tw from "tailwind.macro";

const Prueba = styled(MyComponent)`
  ${tw`flex items-center justify-center bg-primary mt-5`}
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <Prueba></Prueba>
      <MyComponent first="asdas" last="asdas" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
