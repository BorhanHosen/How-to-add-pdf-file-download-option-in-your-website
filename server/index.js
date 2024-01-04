import express from "express";
import cors from "cors";
import ResumeRoutes from "./routes/ResumeRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", ResumeRoutes);

const port = process.env.PORT || 8000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
