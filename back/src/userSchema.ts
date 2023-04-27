import { Document, model, Schema } from "mongoose";

export type User = Document & {
  id: string;
  name: string;
  document: number;
  cv_zonajobs?: string;
  cv_bumeran?: string;
  phone?: string;
  email: string;
  date: Date;
  age?: number;
  has_university?: string;
  career?: string;
  graduated?: string;
  courses_approved?: string;
  location?: string;
  accepts_working_hours?: string;
  desired_salary?: string;
  had_interview?: string;
  reason?: string;
};

/*
Ideally
 * Normalise values, not everything needs to be a string
 * Values like had_interview can be a boolean for example
*/
const userSchema = new Schema<User>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  document: { type: Number, required: true },
  cv_zonajobs: { type: String },
  cv_bumeran: { type: String },
  phone: { type: String },
  email: { type: String, required: true },
  date: { type: Date, default: Date.now },
  age: { type: Number },
  has_university: { type: String },
  career: { type: String },
  graduated: { type: String },
  courses_approved: { type: String },
  location: { type: String },
  accepts_working_hours: { type: String },
  desired_salary: { type: String },
  had_interview: { type: String },
  reason: { type: String },
});

export const UserModel = model<User>("User", userSchema);
