import React, { useContext } from "react";
import { PreviewContext } from "../context/PreviewContext";

const Preview = () => {
  const { previewText, setPreviewText } = useContext(PreviewContext);
  return (
    <section className="col-lg-3">
      <div className="my-3">
        <label className="form-label font-weight-bold mb-3" htmlFor="textinput">
          Tapez votre texte
        </label>
        <textarea id="textinput" className="form-control" rows="4">
          {setPreviewText(previewText)}
        </textarea>
      </div>
      <div className="my-3">
        <label className="form-label font-weight-bold mb-3" htmlFor="range">
          Taille de police
        </label>
        <input
          id="range"
          min="8"
          max="48"
          step="1"
          defaultValue="20"
          className="form-range"
          type="range"
        ></input>
      </div>
    </section>
  );
};

export default Preview;
