import express, { Request, Response } from "express";
import data from "../data";
import { Repos } from "./repos.type";

const repos = express.Router();

repos.get("/:reposid", (req: Request, res: Response) => {
  const repo = data.find((rep) => rep.id === +req.params.reposid) as Repos;

  if (repo) {
    res.status(200).json(repo);
  } else {
    res.sendStatus(404);
  }
});

export default repos;
