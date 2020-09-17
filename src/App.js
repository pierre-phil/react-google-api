import React from "react";
import GoogleFontsLoader from "./components/GoogleFontsLoader";
import Recent from "./components/Recent";
import Fonts from "../src/components/index";
import AppContainer from "./components/AppContainer";

function App() {
  return (
    <>
      <AppContainer>
        <header className="container my-4">
          <h1 className="display-3 text-center mb-4">
            Quoi de neuf, Google Fonts ?
          </h1>
          <p className="h4 text-center mb-4">
            Les plus récentes, les plus <i>trendy</i> et les plus populaires
            polices Google.
          </p>
        </header>
        <main>
          <GoogleFontsLoader />
          <Fonts />
        </main>
      </AppContainer>
      <footer className="p-3 text-center bg-dark text-light">
        With love & React from [Orange Team] for Alyra
      </footer>
    </>
  );
}

export default App;
