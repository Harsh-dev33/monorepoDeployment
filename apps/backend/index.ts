import express from "express";

import { prismaClient } from "db/client";

const app = express();


app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "Server is running 🚀",
  });
});

app.get("/users", async (_req, res) => {
  try {
    const users = await prismaClient.user.findMany();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await prismaClient.user.create({
      data: req.body,
    });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to create user" });
  }
});

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});