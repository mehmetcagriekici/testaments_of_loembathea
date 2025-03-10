export default function AuthSubmit({ text }: { text: string }) {
  return (
    <button
      type="submit"
      className="text-gray-200 font-inter font-bold tracking-wider hover:cursor-pointer hover:text-gray-300 md:text-xl lg:text-2xl"
    >
      {text}
    </button>
  );
}
