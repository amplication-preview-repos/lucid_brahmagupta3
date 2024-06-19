import { BlogPost } from "../blogPost/BlogPost";

export type Tag = {
  blogPost?: BlogPost | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
