import { User, UserDocument } from "../model/User.model";
import type { UserRole } from "../type/enum.type";
export interface CreateUserData {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  avatarUrl?: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export type UpdateUserData = Partial<Omit<CreateUserData, "email">>;

export async function listUser(): Promise<UserDocument[]> {
  return User.find();
}
export async function getUserId(id: string): Promise<UserDocument | null> {
  return User.findById(id);
}
export async function creatUser(data: CreateUserData): Promise<UserDocument> {
  return User.create(data);
}
export async function updateUser(
  id: string,
  data: CreateUserData,
): Promise<UserDocument | null> {
  return User.findByIdAndUpdate(id, data);
}
export async function deleteUser(id: string): Promise<UserDocument | null> {
  return User.findByIdAndDelete(id);
}
export function createUser(arg0: { name: any; email: any; password: any; role: any; avatarUrl: any; isVerified: any; }) {
    throw new Error("Function not implemented.");
}

