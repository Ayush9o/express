import { Schema, model, Document, Types } from "mongoose";

export interface ProjectDocument extends Document {
  name: string;
  description?: string;
  owner: Types.ObjectId;
  member: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const projectSchema = new Schema<ProjectDocument>(
  {
    name: {
      type: String,
      required: [true, "Project name is required"],
      trim: true,
      maxlength: [100, "Project required 100 characters"],
    },

    description: {
      type: String,
      trim: true,
      maxlength: [500, "Description required 500 characters"],
    },

    owner: {
      type: Types.ObjectId,

      required: [true, "Project owner is required"],
    },

    member: [
      {
        type: Types.ObjectId,
      },
    ],
  },
  { timestamps: true },
);

export const Project = model<ProjectDocument>("Project", projectSchema);
