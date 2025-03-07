import express, { Response, Request } from "express";
import data from "../../data.json";
import { Repos } from "./repos.type";

const repos = express.Router();

repos.get("/", (_, res: Response) => {
  res.status(200).json(data);
});

repos.get("/:reposid", (req: Request, res: Response) => {
  const repo = data.find((rep) => rep.id === req.params.reposid) as Repos;

  if (repo) {
    res.status(200).json(repo);
  } else {
    res.sendStatus(404);
  }
});

repos.post("/", (req, res) => {
  res.status(200).send("Tout est ok pour ajouter");
});

export default repos;