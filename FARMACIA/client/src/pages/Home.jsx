import React, { useState, useEffect } from "react";
import { getLists, getRegistro } from "../api/farmacia.api";
import Registro from "../components/Registro";
import List from "../components/List.jsx";

function Home() {
  const [lists, setLists] = useState([]);
  // const [precio, setPrecio] = useState({ precio: 10 });

  //controlamos la cantidad de recargas al iniciar en el navegador
  useEffect(() => {
    loadLists();
  }, []);

  async function loadLists() {
    //const response = await getLists();
    const response = await getRegistro();
    setLists(response.data);
  }

  function renderMain() {
    if (lists.length === 0) return <h1>No se tienen ventas registradas</h1>;
    /*return lists.map((list) => <List item={list} key={list.id} />);*/
    return lists.map((list, i) => <Registro persona={list} key={i} />);
  }

  return (
    <div className="home">
      <section className="nav-bar">
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Medicamentos</a></li>
            <li><a href="#">Lista</a></li>
            <li><a href="#">Registro</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </section>
	    <section class="service text-center" id="service">
              <div class="container">
                <div class="row">
                  <h2>servicio</h2>
                  <h4>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h4>
                </div>
              </div>
	    </section>
      <section className="view-list">
        <div className="render-list">{renderMain()}</div>

      </section>
      <section>
        <div className="contact">
          <div className="contact-content">
            <h4>Services</h4>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact</a></li>
          </div>
          <div className="contact-content">
            <h4>Follow Us</h4>
            <li><a href="#home">TikTok</a></li>
            <li><a href="#about">Twitter</a></li>
            <li><a href="#menu">Facebook</a></li>
            <li><a href="#menu">Instagramm</a></li>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
