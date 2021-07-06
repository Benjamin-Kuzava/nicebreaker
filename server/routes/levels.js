import { Router } from "express";
import controllers from "../controllers/levels.js";
// import restrict from '../helpers/restrict'

const router = Router();

// Routes

router.get("/", controllers.getLevels);
router.get("/:id", controllers.getLevel);
// router.post('/', controllers.createLevel)
// router.put('/:id', controllers.updateLevel)
// router.delete('/:id', controllers.deleteLevel)

export default router;
