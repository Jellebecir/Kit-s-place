import { Router } from "express";
import blogRoutes from "./blogRoutes";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "API is working!" });
});

router.use("/blog", blogRoutes);

export default router;
