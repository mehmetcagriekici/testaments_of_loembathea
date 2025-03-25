"user server";

//imports
import { TestamentContent, TestamentMember } from "@/types/testamentsTypes";

/**
 * get all testaments
 * @returns testaments array
 */
export async function getAllTestaments() {
  try {
    //fetch testaments from the server
    const res = await fetch(
      `${process.env.NEXT_BASE_SERVER_URL}/testaments/all`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      return { error: errorData.error || "Failed to fetch testaments" };
    }

    //testaments array
    const data = await res.json();

    return data;
  } catch (error) {
    return {
      error,
      message:
        "An unexpected error occured while trying to fetch all testaments.",
    };
  }
}

/**
 * get a single testament with an id
 * @param testamentId - string - testament id
 * @returns the requested testament
 */
export async function getTestament(testamentId: string) {
  try {
    //fetch a single testament from the server using testament id
    const res = await fetch(
      `${process.env.NEXT_BASE_SERVER_URL}/testaments/single/${testamentId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      return {
        error: errorData.error || "Failed to fetch the requested testament",
      };
    }

    //a single testament
    const data = await res.json();
    return data;
  } catch (error) {
    return {
      error,
      message:
        "An unexpected error occured while trying to fetch the requested testament.",
    };
  }
}

/**
 * post a testament
 * @param title - testament title
 * @param content - probably an empty object at first, testament verses store
 * @param members - probably an empty object at first, testament members store
 * @param created_by - the id of the creator
 * @returns newly created testametn
 */
export async function createTestament(
  title: string,
  content: { [id: string]: TestamentContent },
  members: { [id: string]: TestamentMember },
  created_by: string
) {
  try {
    const res = await fetch(
      `${process.env.NEXT_BASE_SERVER_URL}/testaments/new`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content, members, created_by }),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      return { error: errorData.error || "Failed to send the new testament" };
    }

    //created testament
    const data = await res.json();
    return data;
  } catch (error) {
    return {
      error,
      message:
        "An unexpected error occured while trying to send the new testament.",
    };
  }
}

/**
 * update a testament with an id
 * at least one field (title, content, or members) must be provided, or the server will return a 400 in the case all of them are undefined
 * @param testamentId - the target testament's id
 * @param title - updated title
 * @param content - updated testament content
 * @param members - updated testament members
 * @returns the updated testament
 */
export async function updateTestament(
  testamentId: string,
  tilte?: string,
  content?: { [id: string]: TestamentContent },
  members?: { [id: string]: TestamentMember }
) {
  try {
    //update the current testament
    const res = await fetch(
      `${process.env.NEXT_BASE_SERVER_URL}/testaments/modified/${testamentId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tilte, content, members }),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      return {
        error: errorData.error || "Failed to update the current testament",
      };
    }

    const data = await res.json();
    return data;
  } catch (error) {
    return {
      error,
      message:
        "An unexpected error occured during updating the current testament.",
    };
  }
}

/**
 * delete a testament with an id
 * @param testamentId - id of the testament that will be deleted
 * @returns success message from the server
 */
export async function deleteTestament(testamentId: string) {
  try {
    //delete the current testament
    const res = await fetch(
      `${process.env.NEXT_BASE_SERVER_URL}/testaments/expired/${testamentId}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      return { error: errorData.error || "Failed to delete the testament" };
    }

    //success message
    const data = await res.json();
    return data;
  } catch (error) {
    return {
      error,
      message:
        "An unexpected error occured while trying to delete the testament",
    };
  }
}
