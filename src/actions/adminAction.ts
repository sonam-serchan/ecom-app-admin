"use server";

import Admin from "@/db/model/Admin";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_DB_URL as string);

export const signupAction = async (formData: FormData) => {
  try {
    const admin = new Admin({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      createdAt: new Date(),
    });
    await admin.save();
  } catch (e) {
    console.log(e);
  }
};
