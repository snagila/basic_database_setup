import express from "express";
import {
  insetTask,
  getData,
  updateData,
  deleteData,
} from "../models/FormModel.js";

const router = express.Router();

// get
router.get("/", async (req, res) => {
  const result = await getData();
  //   console.log(result);
  res.json({
    message: "Tasks read",
    data: result,
  });
});

// post
router.post("/", async (req, res) => {
  try {
    const result = await insetTask(req.body);
    // console.log(result)
    result?._id
      ? res.json({
          message: "Added the data",
        })
      : res.json({
          message: "Error adding the data",
        });
  } catch (error) {
    console.log(error);
  }
});

// update
router.patch("/", async (req, res) => {
  try {
    const result = await updateData(req.body);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
});

export default router;
