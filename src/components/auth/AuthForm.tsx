//imports
import React from "react";

export default function AuthForm({
  children,
  action,
}: {
  children: React.ReactNode;
  action: (formdata: FormData) => void;
}) {
  return (
    <form
      action={action}
      className="h-full w-full flex justify-center items-center flex-col gap-2 md:w-4/5 md:mx-auto md:gap-4 lg:w-3/5 lg:gap-8 xl:w-2/5"
    >
      {children}
    </form>
  );
}
