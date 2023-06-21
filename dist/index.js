import express from "express";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);
app.get("/", (req, res) => {
    res.send("Server is ready");
});
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
