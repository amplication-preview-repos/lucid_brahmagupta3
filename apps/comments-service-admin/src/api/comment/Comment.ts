import { User } from "../user/User";

export type Comment = {
  createdAt: Date;
  id: string;
  text: string | null;
  updatedAt: Date;
  user?: User | null;
};
