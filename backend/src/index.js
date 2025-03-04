import express from "express";
import authRoutes from "./routes/auth.route.js";

const app = express();

app.use("/api/auth",authRoutes);



const PORT = 5001;
app.listen(PORT,() => console.log(`Server Started at Port:${PORT}`));
