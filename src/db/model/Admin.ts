import { Schema, model, models } from "mongoose";

const adminSchema = new Schema({
  name: String,
  email: String,
  password: String,
  createdAt: Date,
});

const Admin = models.User || model("User", adminSchema);
export default Admin;
