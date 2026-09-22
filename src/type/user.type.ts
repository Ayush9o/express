import type { UserRole } from "./enum.type";
export interface User {
  text: string;
  _id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}
