import React, { createContext, useContext } from "react";
const helloText = {
  message: "Hey Ashok",
};
const HelloContext = createContext();

const Header = ({ helloMsg }) => {
  const defaultContext = useContext(HelloContext);
  const { message } = defaultContext;
  return <div>{message}</div>;
};

const MainHeader = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default function App() {
  return (
    <div>
      <HelloContext.Provider value={helloText}>
        <MainHeader />
      </HelloContext.Provider>
    </div>
  );
}
