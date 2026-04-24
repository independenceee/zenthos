import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "Chào từ Express chạy trên Bun!", platform: "Vercel" });
});
router.route("/mint").post();
router.route("/burn").post();
router.route("/update").post();

export default router;
