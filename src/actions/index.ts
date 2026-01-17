import { defineAction, ActionError } from "astro:actions";
import { z } from "astro/zod";
import { db } from "../lib/db";
import { readingListItem } from "../lib/schema";
import { eq, and } from "drizzle-orm";

export const server = {
  deleteReadingListItem: defineAction({
    accept: "form",
    input: z.object({
      id: z.string().min(1, "ID is required"),
    }),
    handler: async (input, context) => {
      if (!context.locals.user) {
        throw new ActionError({
          code: "UNAUTHORIZED",
          message: "You must be logged in to delete items",
        });
      }

      await db
        .delete(readingListItem)
        .where(
          and(
            eq(readingListItem.id, input.id),
            eq(readingListItem.userId, context.locals.user.id)
          )
        );

      return { success: true };
    },
  }),

  createReadingListItem: defineAction({
    accept: "form",
    input: z.object({
      title: z.string().min(1, "Title is required"),
      author: z.string().nullable(),
      url: z.string().url().nullable(),
      type: z.enum(["article", "book"]),
    }),
    handler: async (input, context) => {
      console.log(input);
      if (!context.locals.user) {
        throw new ActionError({
          code: "UNAUTHORIZED",
          message: "You must be logged in to add items",
        });
      }

      const id = crypto.randomUUID();

      await db.insert(readingListItem).values({
        id,
        title: input.title,
        author: input.author || null,
        url: input.url || null,
        type: input.type,
        userId: context.locals.user.id,
      });

      return { id };
    },
  }),
};
