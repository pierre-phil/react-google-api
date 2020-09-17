import React, { useState, useEffect } from "react";
import Recent from "./Recent";
import Popular from "./Popular";
import Trending from "./Trending";

const Fonts = () => {
  return (
    <>
      <section className="mb-5">
        <hr></hr>
        <h2>
          <span className="badge bg-danger badge-lg">Les plus récentes</span>
        </h2>
        <Recent />
      </section>
      <section className="mb-5">
        <hr></hr>
        <h2>
          <span className="badge bg-danger">Les plus populaires</span>
        </h2>
        <Popular />
      </section>
      <section className="mb-5">
        <hr></hr>
        <h2>
          <span className="badge bg-danger">Tendance</span>
        </h2>
        <Trending />
      </section>
    </>
  );
};

export default Fonts;
