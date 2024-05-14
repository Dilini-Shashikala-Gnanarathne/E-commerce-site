import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number },
  photo: { type: String },
  role: {
    type: String,
    enum: ["viewer", "admin"],
    default: "viewer",
  },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  bloodType: { type: String },
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
});

export default mongoose.model("User", UserSchema);