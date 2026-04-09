import express from "express";
import * as taskController from "../controllers/taskController.js";

const router = express.Router();

router.get("/", taskController.getAll);
router.get("/id", taskController.getById);
router.post("/", taskController.create);
router.purge("/:id", taskController.update);
router.delete("/:id", taskController.remove);

export default router;