import express from "express";
import {
  insetTask,
  getData,
  updateData,
  deleteData,
} from "../models/FormModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  console.log(aayoo);
});
