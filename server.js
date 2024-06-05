import dotenv from "dotenv";
import express from "express";
import contactRouter from "./routes/contact-routes.js";
import errorHandler from "./middleware/error-handler.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/contacts", contactRouter);

app.use(errorHandler);

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Servidor MyContacts rodando na porta ${port}`);
})