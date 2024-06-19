/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AuthorService } from "../author.service";
import { AuthorCreateInput } from "./AuthorCreateInput";
import { Author } from "./Author";
import { AuthorFindManyArgs } from "./AuthorFindManyArgs";
import { AuthorWhereUniqueInput } from "./AuthorWhereUniqueInput";
import { AuthorUpdateInput } from "./AuthorUpdateInput";
import { BlogPostFindManyArgs } from "../../blogPost/base/BlogPostFindManyArgs";
import { BlogPost } from "../../blogPost/base/BlogPost";
import { BlogPostWhereUniqueInput } from "../../blogPost/base/BlogPostWhereUniqueInput";

export class AuthorControllerBase {
  constructor(protected readonly service: AuthorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Author })
  async createAuthor(@common.Body() data: AuthorCreateInput): Promise<Author> {
    return await this.service.createAuthor({
      data: data,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Author] })
  @ApiNestedQuery(AuthorFindManyArgs)
  async authors(@common.Req() request: Request): Promise<Author[]> {
    const args = plainToClass(AuthorFindManyArgs, request.query);
    return this.service.authors({
      ...args,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Author })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async author(
    @common.Param() params: AuthorWhereUniqueInput
  ): Promise<Author | null> {
    const result = await this.service.author({
      where: params,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Author })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAuthor(
    @common.Param() params: AuthorWhereUniqueInput,
    @common.Body() data: AuthorUpdateInput
  ): Promise<Author | null> {
    try {
      return await this.service.updateAuthor({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Author })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAuthor(
    @common.Param() params: AuthorWhereUniqueInput
  ): Promise<Author | null> {
    try {
      return await this.service.deleteAuthor({
        where: params,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/blogPosts")
  @ApiNestedQuery(BlogPostFindManyArgs)
  async findBlogPosts(
    @common.Req() request: Request,
    @common.Param() params: AuthorWhereUniqueInput
  ): Promise<BlogPost[]> {
    const query = plainToClass(BlogPostFindManyArgs, request.query);
    const results = await this.service.findBlogPosts(params.id, {
      ...query,
      select: {
        author: {
          select: {
            id: true,
          },
        },

        category: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        published: true,
        publishedAt: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/blogPosts")
  async connectBlogPosts(
    @common.Param() params: AuthorWhereUniqueInput,
    @common.Body() body: BlogPostWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      blogPosts: {
        connect: body,
      },
    };
    await this.service.updateAuthor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/blogPosts")
  async updateBlogPosts(
    @common.Param() params: AuthorWhereUniqueInput,
    @common.Body() body: BlogPostWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      blogPosts: {
        set: body,
      },
    };
    await this.service.updateAuthor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/blogPosts")
  async disconnectBlogPosts(
    @common.Param() params: AuthorWhereUniqueInput,
    @common.Body() body: BlogPostWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      blogPosts: {
        disconnect: body,
      },
    };
    await this.service.updateAuthor({
      where: params,
      data,
      select: { id: true },
    });
  }
}