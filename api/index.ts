import express from "express";
import cors from "cors";
import router from "../src/routes/index.route";

const app = express();

app.use(cors());
app.use(express.json());

router(app)

export default app;
