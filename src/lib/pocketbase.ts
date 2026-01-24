import PocketBase from "pocketbase";
import {
  Collections,
  type TypedPocketBase,
  type PostsResponse,
  type ReadingListResponse,
  type PhotosResponse,
} from "./pocketbase-types";

const pb = new PocketBase(import.meta.env.POCKETBASE_URL) as TypedPocketBase;

pb.autoCancellation(false);

/**
 * Get the URL for a file stored in PocketBase
 */
export function getFileUrl(record: { id: string; collectionId: string }, filename: string): string {
  return pb.files.getURL(record, filename);
}

/**
 * Fetch all posts, sorted by created date (newest first)
 */
export async function getPosts(): Promise<PostsResponse[]> {
  return pb.collection(Collections.Posts).getFullList({
    sort: "-created",
  });
}

/**
 * Fetch a single post by slug
 */
export async function getPost(slug: string): Promise<PostsResponse | null> {
  try {
    return await pb
      .collection(Collections.Posts)
      .getFirstListItem(`slug = "${slug}"`);
  } catch {
    return null;
  }
}

/**
 * Fetch all reading list items, sorted by created date (newest first)
 */
export async function getReadingList(): Promise<ReadingListResponse[]> {
  return pb.collection(Collections.ReadingList).getFullList({
    sort: "-created",
  });
}

/**
 * Fetch all photos, sorted by taken date (newest first)
 */
export async function getPhotos(): Promise<PhotosResponse[]> {
  return pb.collection(Collections.Photos).getFullList({
    sort: "-taken,-created",
  });
}

export { pb };
