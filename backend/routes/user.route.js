import { Router } from "express";
import { edit, getAll, remove, get } from "../controllers/user.controller.js";
import { isAdmin, verifyToken, verifyUser } from "../utils/auth.js";
const router = Router();
router.put("/:id", verifyUser, edit);
router.delete("/:id", verifyUser, remove);
router.get("/:id", verifyUser, get);
router.get("/", verifyToken, isAdmin, getAll);

export default router;