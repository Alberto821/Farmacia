import React, { useState, useEffect } from "react";
import Price from "../components/Price";

function Context() {
  return (
    <div className="Context">
      <section className="view-list">
        <div className="render-list">{<Price />}</div>
      </section>
    </div>
  );
}

export default Context;
