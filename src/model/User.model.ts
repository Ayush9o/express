import { Schema, model, Document } from "mongoose";
import type { UserRole } from "../type/enum.type";

export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  avatarUrl?: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<UserDocument>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [60, "Name cannot exceed 60 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters"],
      select: false,
    },
    role: {
      type: String,
      enum: ["admin", "manager", "member"],
      default: "member",
    },
    avatarUrl: { type: String },
    isVerified: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    collection: "user"
}
);

export const User = model<UserDocument>("User", userSchema);
