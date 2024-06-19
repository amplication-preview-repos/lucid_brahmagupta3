import { SortOrder } from "../../util/SortOrder";

export type TagOrderByInput = {
  blogPostId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
