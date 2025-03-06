/**
 * Presentational component for the li elements on home page
 * custom styling
 * @param heading - Main heading
 * @param span - short heading explanation
 * @param text - short explanation
 * @param listElementStyles - extra styles for li
 * @param listHeadingStyles - extra styles for h5
 * @param listTextStyles - extra styles for p
 * @returns jsx
 */
export default function Li({
  heading,
  span,
  text,
  listElementStyles = "",
  listHeadingStyles = "",
  listSpanStyles = "",
  listParagraphStyles = "",
}: {
  heading: string;
  span: string;
  text: string;
  listElementStyles?: string;
  listHeadingStyles?: string;
  listSpanStyles?: string;
  listParagraphStyles?: string;
}) {
  return (
    <li
      className={`w-full flex flex-col items-center justify-center ${listElementStyles}`}
    >
      <h5 className={`font-black ${listHeadingStyles}`}>
        {heading} - <span className={`${listSpanStyles}`}>{span}</span>
      </h5>
      <p className={`leading-relaxed ${listParagraphStyles}`}>{text}</p>
    </li>
  );
}
