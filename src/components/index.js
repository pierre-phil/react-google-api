import React, { useState, useEffect } from "react";
import Recent from "./Recent";

const Fonts = () => {
  return (
    <>
      <section className="mb-5">
        <hr></hr>
        <h3>Les plus récentes</h3>
        <Recent />
      </section>
    </>
  );
};

export default Fonts;
