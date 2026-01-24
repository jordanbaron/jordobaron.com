import PocketBase from "pocketbase";
import type { TypedPocketBase, PostsResponse, ReadingListResponse } from "./pocketbase-types";

const pb = new PocketBase(import.meta.env.POCKETBASE_URL) as TypedPocketBase;

pb.autoCancellation(false);

/**
 * Fetch all posts, sorted by created date (newest first)
 */
export async function getPosts(): Promise<PostsResponse[]> {
  const records = await pb.collection("posts").getFullList({
    sort: "-created",
  });
  return records;
}

/**
 * Fetch a single post by slug
 */
export async function getPost(slug: string): Promise<PostsResponse | null> {
  try {
    const record = await pb
      .collection("posts")
      .getFirstListItem(`slug = "${slug}"`);
    return record;
  } catch {
    return null;
  }
}

/**
 * Fetch all reading list items, sorted by created date (newest first)
 */
export async function getReadingList(): Promise<ReadingListResponse[]> {
  const records = await pb.collection("reading_list").getFullList({
    sort: "-created",
  });
  return records;
}

export { pb };
