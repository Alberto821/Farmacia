import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLists } from "../api/farmacia.api";
import List from "./List";

function Price() {
  const navigate = useNavigate();

  const [lists, setLists] = useState([]);
  const [value, setValue] = useState({
    precio: "",
  });

  const [status, setStatus] = useState(false);

  const handleInput = (event) => {
    setValue((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    loadLists();
  };

  async function loadLists() {
    const response = await getLists(value);
    //const response = await getRegistro();
    setLists(response.data);
    setStatus(true);
  }

  function renderMain() {
    if (lists.length === 0) return <h1>No se tienen ventas registradas</h1>;
    return lists.map((list, i) => <List item={list} key={i} />);
    /*return lists.map((list, i) => <Registro persona={list} key={i} />);*/
  }

  return (
    <div>
      <div>
        <h1>Introduzca un valor</h1>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Precio: ">Precio</label>
            <input
              type="number"
              placeholder="Introduzca un número entero"
              name="precio"
              onChange={handleInput}
              required
            />
          </div>

          <button type="submit">Obtener</button>
        </form>
      </div>
      <div> {status ? renderMain() : ""}</div>
    </div>
  );
}

export default Price;
