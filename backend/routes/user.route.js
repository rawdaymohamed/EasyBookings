import { Router } from "express";
import { edit, getAll, remove, get } from "../controllers/user.controller.js";
import { isAdmin, verifyToken } from "../utils/auth.js";
const router = Router();
router.put("/:id", verifyToken, edit);
router.delete("/:id", verifyToken, remove);
router.get("/:id", verifyToken, get);
router.get("/", verifyToken, isAdmin, getAll);

export default router;