import mongoose from "mongoose";
const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: false,
  },
});
export default mongoose.model("Form", formSchema);
