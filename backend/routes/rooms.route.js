import { Router } from "express";
import {
  edit,
  get,
  getAll,
  remove,
  create,
} from "../controllers/room.controller.js";
import { verifyAdmin } from "../utils/auth.js";
const router = Router();
router.put("/:id", verifyAdmin, edit);
router.delete("/:hotelId/:id", verifyAdmin, remove);
router.get("/:id", get);
router.get("/", getAll);
router.post("/:hotelId", verifyAdmin, create);
export default router;
