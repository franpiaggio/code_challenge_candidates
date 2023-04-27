import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

import { candidates, columns } from "./fixtures";
import { UserModel } from "./userSchema";

dotenv.config();

const app = express();
app.use(cors());
const PORT = 4000;

// Pending: to migrate the json into a databse
app.post("/add-candidates", async (req: Request, res: Response) => {
  try {
    await UserModel.insertMany(candidates);
    res.json({ message: "Users added", candidates: candidates });
  } catch (error) {
    res.status(500).json({ message: "Error importing users" });
  }
});

// Pendind: add pagination
// Would be ideal if the endpoint can handle: searchText, page, pageSize
app.get("/candidates", async (req: Request, res: Response) => {
  try {
    res.json({ candidates: candidates, columns: columns });
  } catch (error) {
    res.status(500).json({ message: "Error importing users" });
  }
});

app.get("/health", async (req, res) => {
  res.send("Server up");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
