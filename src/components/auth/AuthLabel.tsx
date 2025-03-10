export default function AuthLabel({
  text,
  extraStyles = "",
}: {
  text: string;
  extraStyles?: string;
}) {
  return (
    <label
      htmlFor={text}
      className={`w-full text-center tracking-wider text-lg font-roboto md:text-xl lg:text-2xl ${extraStyles}`}
    >
      {text}
    </label>
  );
}
