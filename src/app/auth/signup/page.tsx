//imports
import { signupUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import * as motion from "motion/react-client";
//components
import AuthSection from "@/components/auth/AuthSection";
import AuthLabel from "@/components/auth/AuthLabel";
import AuthInput from "@/components/auth/AuthInput";
import AuthNavigation from "@/components/auth/AuthNavigation";
import AuthError from "@/components/auth/AuthError";
import AuthForm from "@/components/auth/AuthForm";
import AuthSubmit from "@/components/auth/AuthSubmit";

//Fully server-rendered login page
export default async function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  /**
   * Form action
   * @param formData - username, email, password
   */
  async function handleSignup(formData: FormData) {
    "use server"; //required for Next.js to treat this as a server action

    //signup
    const result = await signupUser(formData);

    //if login fails add error to the params
    if (result?.error) {
      redirect(`/auth/signup?error=${encodeURIComponent(result.error)}`);
    }

    if (result.success) {
      redirect("/dashboard");
    }
  }

  const errorMessage = searchParams?.error
    ? decodeURIComponent(searchParams.error)
    : null;

  return (
    <div className="h-dvh w-dvw relative">
      <AuthNavigation message="Already have an account?" link="/auth/login" />
      <AuthForm action={handleSignup}>
        <motion.h2
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full p-5 text-center text-gray-200 font-space-grotesk text-xl font-black tracking-wide leading-relaxed md:text-2xl xl:text-3xl"
        >
          Every Story Needs a Scribe—Will You Be One?
        </motion.h2>
        {/*username*/}
        <AuthSection delay={0.4}>
          <AuthLabel text="username" extraStyles="text-green-200" />
          <AuthInput
            type="text"
            name="username"
            extraStyles="text-green-100 bg-green-900 focus:text-green-950 focus:bg-green-500"
          />
        </AuthSection>
        {/*email*/}
        <AuthSection delay={0.7}>
          <AuthLabel text="email" extraStyles="text-rose-200" />
          <AuthInput
            type="email"
            name="email"
            extraStyles="text-rose-100 bg-rose-900 focus:text-rose-950 focus:bg-rose-500"
          />
        </AuthSection>
        {/*password*/}
        <AuthSection delay={1}>
          <AuthLabel text="password" extraStyles="text-sky-200" />
          <AuthInput
            type="password"
            name="password"
            extraStyles="text-sky-100 bg-sky-900 focus:text-sky-950 focus:bg-sky-500"
          />
        </AuthSection>
        {/*submit*/}
        <AuthSubmit text="Sign up" />
        {/*error handling*/}
        {errorMessage && <AuthError error={errorMessage} />}
      </AuthForm>
    </div>
  );
}
