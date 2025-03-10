//imports
import Link from "next/link";

export default function AuthNavigation({
  message,
  link,
}: {
  message: string;
  link: string;
}) {
  return (
    <div className="absolute bottom-1/12 left-1/2 -translate-x-1/2 p-4 w-full flex flex-col justify-center items-center gap-2 font-roboto text-gray-200 text-sm tracking-wide font-bold underline md:text-base md:bottom-1/6 lg:text-lg xl:bottom-1/12">
      {/*Back to Homepage*/}
      <Link
        href="/"
        className="active:text-lime-200 hover:text-sky-200 hover:cursor-pointer"
      >
        Return to the Homepage
      </Link>
      {/*Redirect to login/signup page*/}
      <Link
        href={link}
        className="active:text-lime-200 hover:text-sky-200 hover:cursor-pointer"
      >
        {message}
      </Link>
    </div>
  );
}
