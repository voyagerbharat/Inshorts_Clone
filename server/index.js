import Connection from "./connection/db.js";

import express from "express";
import DefaultData from "./default.js";

const app = express();

const PORT = 8900;

Connection();

app.listen(PORT, () => {
  console.log(`Server is ruuning on ${PORT}`);
});

DefaultData();
