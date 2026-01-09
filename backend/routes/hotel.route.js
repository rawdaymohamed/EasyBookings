import { Router } from "express";
import {
  create,
  edit,
  getAll,
  remove,
  get,
  getCountByCity,
  getCountByType,
} from "../controllers/hotel.controller.js";
import { verifyAdmin } from "../utils/auth.js";
const router = Router();
router.get("/countByCity", getCountByCity);
router.get("/countByType", getCountByType);
router.put("/:id", verifyAdmin, edit);
router.delete("/:id", verifyAdmin, remove);
router.get("/:id", get);
router.get("/", getAll);
router.post("/", verifyAdmin, create);
export default router;
