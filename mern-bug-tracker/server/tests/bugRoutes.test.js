import request from "supertest";
import express from "express";
import bugRoutes from "../routes/bugRoutes.js";

const app = express();
app.use(express.json());
app.use("/api/bugs", bugRoutes);

test("POST /api/bugs should create a bug", async () => {
  const res = await request(app)
    .post("/api/bugs")
    .send({ title: "New bug" });

  expect(res.statusCode).toBe(201);
  expect(res.body.title).toBe("New bug");
});
