import React from "react";
import GoogleFontsLoader from "./components/GoogleFontsLoader";
import Recent from "./components/Recent";
import Fonts from "../src/components/index";

function App() {
  return (
    <>
      <header className="container my-4">
        <h1 className="display-3 text-center mb-4">
          Quoi de neuf, Google Fonts ?
        </h1>
        <h2 className="text-center mb-4">
          Les plus récentes, les plus <i>trendy</i> et les plus populaires
          polices Google.
        </h2>
      </header>
      <main>
        <GoogleFontsLoader />
        <Fonts />
      </main>
    </>
  );
}

export default App;
