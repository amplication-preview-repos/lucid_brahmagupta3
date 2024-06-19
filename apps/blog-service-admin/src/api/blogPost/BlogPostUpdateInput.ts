import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { TagUpdateManyWithoutBlogPostsInput } from "./TagUpdateManyWithoutBlogPostsInput";

export type BlogPostUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  category?: CategoryWhereUniqueInput | null;
  content?: string | null;
  published?: boolean | null;
  publishedAt?: Date | null;
  tags?: TagUpdateManyWithoutBlogPostsInput;
  title?: string | null;
};
