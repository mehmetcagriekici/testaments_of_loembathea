//imports
import * as motion from "motion/react-client";

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
  delay,
}: {
  heading: string;
  span: string;
  text: string;
  listElementStyles?: string;
  listHeadingStyles?: string;
  listSpanStyles?: string;
  listParagraphStyles?: string;
  delay: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 0.3, delay }}
      className={`w-full flex flex-col items-center justify-center ${listElementStyles}`}
    >
      <h5 className={`font-black ${listHeadingStyles}`}>
        {heading} - <span className={`${listSpanStyles}`}>{span}</span>
      </h5>
      <p className={`leading-relaxed ${listParagraphStyles}`}>{text}</p>
    </motion.li>
  );
}
