"use server";

//imports
import { VerseContent, VerseSubscriber } from "@/types/versesTypes";

/**
 * Get all verses
 * @param testamentId - id of the parent testament
 * @returns all the verses under the selected testament
 */
export async function getAllTestaments(testamentId: string) {
  try {
    //fetch verses from the server
    const res = await fetch(
      `${process.env.NEXT_BASE_SERVER_URL}/verses/${testamentId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      return { error: errorData.error || "Failed to fetch the verses" };
    }

    //testaments array
    const data = await res.json();

    return data;
  } catch (error) {
    return {
      error,
      message:
        "An unexpected error occured while trying to fetch all verses under the current testament.",
    };
  }
}

/**
 * Get a single verse, using the verse_id
 * @param testamentId - id of the parent testament
 * @param verseId - id of the selected verse
 * @returns the selected verse
 */
export async function getVerse(testamentId: string, verseId: string) {
  try {
    //fetch a single verse from the server
    const res = await fetch(
      `${process.env.NEXT_BASE_SERVER_URL}/verses/${testamentId}/${verseId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      return { error: errorData.error || "Failed to fetch the current verse" };
    }

    //testaments array
    const data = await res.json();

    return data;
  } catch (error) {
    return {
      error,
      message:
        "An unexpected error occured while trying to fetch the selected verse",
    };
  }
}

/**
 * Create a verse
 * @param subtitle - the title of the verse
 * @param content - the content of the verse
 * @param created_by - the id of the verse creator
 * @param subscribers - the verse subscribers
 * @param testament_id - the id of the parent testament
 * @returns the newly created verse
 */
export async function createVerse(
  subtitle: string,
  content: { [index: number]: VerseContent },
  created_by: string,
  subscribers: { [id: string]: VerseSubscriber },
  testament_id: string
) {
  try {
    const res = await fetch(`${process.env.NEXT_BASE_SERVER_URL}/verses/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        subtitle,
        content,
        created_by,
        subscribers,
        testament_id,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      return { error: errorData.error || "Failed to send the verse" };
    }

    //created verse
    const data = await res.json();
    return data;
  } catch (error) {
    return {
      error,
      message: "An unexpected error occured while trying to create a verse",
    };
  }
}

/**
 * Update an existing verse with the verse ID
 * @param testament_id - the id of the parent testament
 * @param verse_id - the id of the updated verse
 * @param optionals : at least one field (subtitle, content, or subscribers) must be provided, or the server will return a 400 in the case all of them are undefined
 * @param subtitle - the updated subtitle
 * @param content - the updated content
 * @param subscribers - the updated subscribers
 * @returns the updated verse
 */
export async function updateVerse(
  testament_id: string,
  verse_id: string,
  {
    subtitle,
    content,
    subscribers,
  }: {
    subtitle?: string;
    content?: { [index: number]: VerseContent };
    subscribers?: { [id: string]: VerseSubscriber };
  }
) {
  try {
    const res = await fetch(
      `${process.env.NEXT_BASE_SERVER_URL}/verses/updated/${testament_id}/${verse_id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subtitle, content, subscribers }),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      return {
        error: errorData.error || "Failed to update the current verse",
      };
    }

    const data = await res.json();
    return data;
  } catch (error) {
    return {
      error,
      message: "An unexpected error occured during updating the current verse.",
    };
  }
}

/**
 * Delete an existing verse
 * @param testament_id - the id of the parent testament of the deleted verse
 * @param verse_id  - the id of the deleted verse
 * @returns success messsage
 */
export async function deleteVerse(testament_id: string, verse_id: string) {
  try {
    //delete the current testament
    const res = await fetch(
      `${process.env.NEXT_BASE_SERVER_URL}/verses/deleted/${testament_id}/${verse_id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      return { error: errorData.error || "Failed to delete the verse" };
    }

    //success message
    const data = await res.json();
    return data;
  } catch (error) {
    return {
      error,
      message: "An unexpected error occured while trying to delete the verse",
    };
  }
}
