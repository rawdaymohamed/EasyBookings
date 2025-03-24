import { Router } from "express";
import { edit, getAll, remove, get } from "../controllers/user.controller.js";
const router = Router();
router.put("/:id", edit);
router.delete("/:id", remove);
router.get("/:id", get);
router.get("/", getAll);

export default router;