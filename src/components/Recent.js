import React, { useState, useEffect, useContext } from "react";
import { PreviewContext } from "../context/PreviewContext";
import GoogleFontLoader from "react-google-font-loader";
import { SizeContext } from "../context/SizeContext";

const Recent = () => {
  const [recentFonts, setRecentFonts] = useState([]);
  const { previewText } = useContext(PreviewContext);
  const { size } = useContext(SizeContext);

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
        setRecentFonts(result.items.slice(0, 10));
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  return (
    <section className="row my-3">
      {recentFonts.map((el) => {
        return (
          <article className="col-lg-6 mb-3" key={el.family}>
            <div className="shadow p-3">
              <GoogleFontLoader
                fonts={[
                  {
                    font: `${el.family}`,
                    weights: [400],
                  },
                ]}
                subsets={[]}
              />
              <h3 className="d-flex align-items-center justify-content-between">
                <span>{el.family}</span>
                <small className="h6">{`${el.variants.length} variant(s)`}</small>
              </h3>
              <p>
                <span className="badge bg-dark">{el.category}</span>
              </p>
              <p
                className="sample"
                style={{
                  fontFamily: `${el.family}, monospaced`,
                  fontSize: `${size}px`,
                }}
              >
                {previewText}
              </p>
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="text-danger"
                href={`https://fonts.google.com/specimen/${el.family}`}
              >
                Voir sur Google Fonts
              </a>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Recent;
