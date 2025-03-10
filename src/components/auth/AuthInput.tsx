export default function AuthInput({
  type,
  name,
  extraStyles = "",
}: {
  type: string;
  name: string;
  extraStyles?: string;
}) {
  return (
    <input
      type={type}
      id={name}
      name={name}
      required
      className={`w-4/5 border-none outline-none rounded-sm text-lg indent-3 font-inter md:text-xl lg:text-2xl ${extraStyles}`}
    />
  );
}
