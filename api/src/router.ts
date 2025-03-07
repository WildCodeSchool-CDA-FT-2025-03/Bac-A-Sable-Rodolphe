import express, { Response } from "express";router
import repos from "./repos/repos.controller";

const router = express.Router();

router.get("/", (_, res: Response) => {
  res.status(200).send("ca roule ma poule");
});

router.use("/repos", repos);

export default router;
