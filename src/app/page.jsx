import React from "react";

import MainComponent from "./components/MainComponent";
import HeaderComponent from "./components/HeaderComponent";

export default function Home() {
  return (
    <>
      <header className="headerComponent">
        <HeaderComponent />
      </header>
      <main className="mainCompenent">
        <MainComponent />
      </main>
    </>
  );
}
