import express from "express";
import "dotenv/config";
import dbConnect from "./utils/dbConnect.js";

const app = express();
const PORT = process.env.PORT || 3000;
const API_VERSION = process.env.API_VERSION || "api/v1";

app.use(express.json());

// heatl check route
app.get(`${API_VERSION}/health`, (req, res) => {
  res.status(200).json({
    message: "Welcome to the Basic Auth App",
    version: API_VERSION,
  });
});

// Import routes
import authRouter from "./routes/auth.routes.js";

// Use routes
app.use(`${API_VERSION}/auth`, authRouter);

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Server is running on http://localhost:${PORT}`);
});
