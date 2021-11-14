import Connection from "./connection/db.js";

import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import DefaultData from "./default.js";
import route from "./Route/Route.js";

const app = express();

const PORT = 8900;

Connection();

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json({ extended: true }));
app.use("/", route);

app.listen(PORT, () => {
  console.log(`Server is ruuning on ${PORT}`);
});

DefaultData();
