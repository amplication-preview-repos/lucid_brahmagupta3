import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TagListRelationFilter } from "../tag/TagListRelationFilter";

export type BlogPostWhereInput = {
  author?: AuthorWhereUniqueInput;
  category?: CategoryWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  published?: BooleanNullableFilter;
  publishedAt?: DateTimeNullableFilter;
  tags?: TagListRelationFilter;
  title?: StringNullableFilter;
};
