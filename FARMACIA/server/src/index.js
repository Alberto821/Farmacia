import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import noteRoutes from "./Routes/farmacia.routes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(noteRoutes);
app.listen(PORT);
console.log("Servidor ejecutando en puerto", PORT);
