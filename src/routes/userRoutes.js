import express from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();

router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.post("/", userController.create);
router.put("/:id", userController.update);
router.delete("/:id", userController.remove);

export default router;

import {authMiddleware } from"../middlewares/authMiddlewares.js";

router.get("/", authMiddleware,
    userController.getAll);