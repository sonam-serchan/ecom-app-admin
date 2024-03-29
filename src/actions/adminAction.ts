"use server";

import Admin from "@/db/model/Admin";
import mongoose from "mongoose";
import { redirect } from "next/navigation";

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
  } catch (error) {
    console.log(error);
    throw error;
  }
  redirect("/login");
};

export async function signInUser(_: any, formData: FormData) {
  try {
    const user = await Admin.findOne({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    if (!user) {
      return {
        error: "Email/password is invalid!",
      };
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  redirect("/");
}
