import { BlogPost } from "../blogPost/BlogPost";

export type Author = {
  blogPosts?: Array<BlogPost>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
};
