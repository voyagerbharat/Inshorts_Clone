import express from "express";
import { getNews } from "../Controller/news-controller.js";

const route = express.Router();

route.get("/news", getNews);

export default route;
