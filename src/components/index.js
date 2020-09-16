import React, { useState, useEffect } from "react";

const Fonts = () => {
  const [fonts, setFonts] = useState([]);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_GFONTS_API_KEY;
    const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCmgOX-4uVu7DlmjOWrO-xD_dC_0-raOFc&sort=date`;
    // fonts triés par date

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("font introuvable");
      })
      .then((result) => {
        console.log(result);
        setFonts(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  return null;
};

export default Fonts;
