import { Author } from "../author/Author";
import { Category } from "../category/Category";
import { Tag } from "../tag/Tag";

export type BlogPost = {
  author?: Author | null;
  category?: Category | null;
  content: string | null;
  createdAt: Date;
  id: string;
  published: boolean | null;
  publishedAt: Date | null;
  tags?: Array<Tag>;
  title: string | null;
  updatedAt: Date;
};
