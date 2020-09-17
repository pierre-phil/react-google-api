import React from "react";

const Preview = () => {
  return (
    <section className="col-lg-3">
      <div className="my-3">
        <label className="form-label font-weight-bold mb-3" htmlFor="textinput">
          Tapez votre texte
        </label>
        <textarea id="textinput" className="form-control" rows="4">
          Bâchez la queue du wagon-taxi avec les pyjamas du fakir. !? 123456789
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
          value="20"
          className="form-range"
          type="range"
        ></input>
      </div>
    </section>
  );
};

export default Preview;
