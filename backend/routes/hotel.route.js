import { Router } from "express";
import { create, edit, getAll, remove, get } from "../controllers/hotel.controller.js";
const router = Router();
router.put("/:id", edit);
router.delete("/:id", remove);
router.get("/:id", get);
router.get("/", getAll);
router.post("/", create);
export default router;