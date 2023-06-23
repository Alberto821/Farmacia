import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="notFound">
      <div class="container">
        <h2>Oops! Página no encontrada.</h2>
        <h1>404</h1>
        <p>No podemos encontrar la página.</p>
        <a href="#">
          <Link to="/">Retornar</Link>
        </a>
      </div>
    </div>
  );
}

export default NotFound;
