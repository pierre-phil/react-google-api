import React, { useState, useEffect } from "react";

const Recent = () => {
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
        setFonts(result.items.slice(0, 10));
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  console.log("fonts", fonts);

  return (
    <>
      {fonts.map((el) => {
        return <div key={el.family}>{el.family}</div>;
      })}
    </>
  );
};

export default Recent;
