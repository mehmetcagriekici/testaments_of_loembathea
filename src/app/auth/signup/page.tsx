//imports
import { signupUser } from "@/lib/auth";
import { redirect } from "next/navigation";

//Fully server-rendered login page
export default async function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  async function handleSignup(formData: FormData) {
    "use server"; //required for Next.js to treat this as a server action

    //login
    const result = await signupUser(formData);

    //if login fails add error to the params
    if (result?.error) {
      redirect(`/auth/signup?error=${encodeURIComponent(result.error)}`);
    }
  }

  return (
    <div>
      <form action={handleSignup}>
        <h2>signup</h2>
        {/*error handling*/}
        {searchParams.error && <p>{decodeURIComponent(searchParams.error)}</p>}
      </form>
    </div>
  );
}
