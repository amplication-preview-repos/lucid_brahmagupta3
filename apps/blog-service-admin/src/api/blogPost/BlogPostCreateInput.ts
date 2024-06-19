import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { TagCreateNestedManyWithoutBlogPostsInput } from "./TagCreateNestedManyWithoutBlogPostsInput";

export type BlogPostCreateInput = {
  author?: AuthorWhereUniqueInput | null;
  category?: CategoryWhereUniqueInput | null;
  content?: string | null;
  published?: boolean | null;
  publishedAt?: Date | null;
  tags?: TagCreateNestedManyWithoutBlogPostsInput;
  title?: string | null;
};
