//imports
import { loginUser } from "@/lib/auth";
import { redirect } from "next/navigation";

//Fully server-rendered login page
export default async function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  async function handleLogin(formData: FormData) {
    "use server"; //required for Next.js to treat this as a server action

    //login
    const result = await loginUser(formData);

    //if login fails add error to the params
    if (result?.error) {
      redirect(`/auth/login?error=${encodeURIComponent(result.error)}`);
    }
  }

  return (
    <div>
      <form action={handleLogin}>
        <h2>Login</h2>
        {/*error handling*/}
        {searchParams.error && <p>{decodeURIComponent(searchParams.error)}</p>}
      </form>
    </div>
  );
}
