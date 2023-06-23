import { pool } from "../db.js";

export const getItems = async (req, res) => {
  try {
    const { precio } = req.body;
    const [result] = await pool.query(
      "SELECT * FROM producto WHERE precio <= ?",
      [precio]
    );
    if (result.length === 0) {
      res.json("Cantidades no encontradas");
    } else {
      res.json(result);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const [result] = await pool.query(
      "SELECT * FROM empleados WHERE status=?",
      [status]
    );
    if (result.length === 0) {
      res.json("Empleados no encontrados");
    } else {
      res.json(result);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getReport = async (req, res) => {
  try {
    const { dateStart, dateFinal } = req.body;
    const [result] = await pool.query(
      "SELECT * FROM ventas WHERE beetwen(?,?)",
      [dateStart, dateFinal]
    );
    if (result.length === 0) {
      res.json("datos no encontrados");
    } else {
      res.json(result);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getRegister = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT e.nombre, e.apellidoP, e.apellidoM, e.carnet, e.telefono, v.idProducto, v.cantidadVend, v.total FROM empleados e, ventas v WHERE e.CodEmpleado=v.idEmpleado;"
    );
    if (result.length === 0) {
      res.json("datos no encontrados");
    } else {
      res.json(result);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
