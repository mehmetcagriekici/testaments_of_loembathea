//handle login, signup, and logout on the server
"use server";

//imports
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/**
 * login user to the server
 * @param formData - {email:string, password:string}
 */
export async function loginUser(formData: FormData) {
  //get user inputs
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    //post response from the tol_server
    const res = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    //check result
    if (!res.ok) {
      const errorData = await res.json();
      return { error: errorData.mesage || "Invalid email or password." };
    }

    const data = await res.json();
    //set token
    const cookieStore = await cookies();
    cookieStore.set("token", data.token, { httpOnly: true, secure: true });
  } catch {
    return {
      error: "Something unexpected happened during login. Please try again.",
    };
  }
}

/**
 * Signup User
 * @param FormData - {email:string; password:string; username:string}
 */
export async function signupUser(formData: FormData) {
  //get user inputs
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const username = formData.get("username") as string;

  try {
    //send data to server
    const res = await fetch("http://localhost:3001/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, username }),
    });

    //check res
    if (!res.ok) {
      const errorData = await res.json();
      return { error: errorData.message || "Signup Failed. Try again." };
    }

    //redirect user to the login page
    redirect("/auth/login");
  } catch {
    return {
      error: "An unexpected error occured during signup. Please try again.",
    };
  }
}

/**
 * logout function
 */
export async function logoutUser() {
  //clear cookies
  (await cookies()).delete("token");
  //redirect to login page
  redirect("/auth/login");
}
