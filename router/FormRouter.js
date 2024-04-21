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
    console.log(req.body);
    const result = await updateData(req.body.id, req.body);
    console.log(result);
    result.acknowledged
      ? res.json({
          message: "Your data has been updated",
        })
      : res.json({
          message: "Failed to add data",
        });
  } catch (error) {
    console.log(error);
  }
});

// delete
router.delete("/", async (req, res) => {
  try {
    const result = await deleteData(req.body.id);
    console.log(result);
    result.acknowledged
      ? res.json({
          message: "Your data has been deleted.",
        })
      : res.json({
          message: "Failed to delete data.",
        });
  } catch (error) {
    console.log(error);
  }
});

export default router;
