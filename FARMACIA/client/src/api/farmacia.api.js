import axios from "axios";

export const getLists = async (precio) =>
  await axios.get("http://localhost:4000/items", precio);

export const getRegistro = async () =>
  await axios.get("http://localhost:4000/registro");
