import React from "react";
import GoogleFontsLoader from "./components/GoogleFontsLoader";
import Recent from "./components/Recent";
import Fonts from "../src/components/index";
import AppContainer from "./components/AppContainer";
import Preview from "./components/Preview";

function App() {
  return (
    <>
      <header className="p-5 bg-danger text-white text-center mb-4">
        <h1 className="display-2">Quoi de neuf, Google Fonts ?</h1>
        <p className="h4">
          Les plus récentes, les plus <i>trendy</i> et les plus populaires
          polices Google.
        </p>
      </header>
      <AppContainer>
        <main>
          <GoogleFontsLoader />
          <div className="row">
            <Preview />
            <Fonts />
          </div>
        </main>
      </AppContainer>
      <footer className="p-3 text-center bg-dark text-light">
        With love & React from [Orange Team] for Alyra
      </footer>
    </>
  );
}

export default App;
