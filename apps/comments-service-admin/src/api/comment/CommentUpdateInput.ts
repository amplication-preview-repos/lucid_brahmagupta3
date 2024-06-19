import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  text?: string | null;
  user?: UserWhereUniqueInput | null;
};
