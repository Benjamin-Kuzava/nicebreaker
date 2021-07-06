import { Router } from "express";
import levelsRouter from "./levels.js";
// import usersRouter from './users'

const router = Router();

router.get("/", (_, res) => res.send("This is the Icebreaker API route"));

router.use("/levels", levelsRouter);
// router.use("/users", usersRouter);

export default router;
