import React from "react";
import Header from "../components/Header";
import CardContainer from "../components/CardsContainer/CardsContainer";

function App() {
  return (
    <>
      <Header />
      <main className="container pt-5">
        <CardContainer />
      </main>
    </>
  );
}

export default App;
