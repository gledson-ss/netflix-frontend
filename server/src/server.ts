import express from "express";
import { createConnection } from "typeorm";
import MoviesRouter from "./routes/Movie/movie.routes";

const app = express();

createConnection();

app.use(express.json());
app.use(MoviesRouter);
app.listen(3333);
