//imports
//animation framework
import * as motion from "motion/react-client";
//components
import Btn from "@/components/homepage/HomePageButton";
import Ul from "@/components/homepage/HomePageList";
import Li from "@/components/homepage/HomePageListElement";
import Sec from "@/components/homepage/HomePageSection";
import HomeDivider from "@/components/homepage/HomeDivider";
//built in
import Link from "next/link";

//introduction page
export default function Home() {
  return (
    <main className="h-dvh w-dvw overflow-hidden overflow-y-auto flex flex-col gap-5 md:flex-row md:overflow-y-hidden md:overflow-x-auto">
      {/*Introduction*/}
      <Sec extraStyles="gap-14">
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full text-center font-playfair tracking-wider text-2xl font-black text-gray-200 md:text-4xl"
        >
          Testaments of Loembathea
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="w-full text-center text-gray-400 text-xl font-merriweather tracking-wide md:text-2xl"
        >
          A Collaborative Testament of Stories & Legends
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="w-full text-center text-gray-300 font-lora tracking-wider leading-relaxed text-lg md:text-xl xl:w-4/5"
        >
          Testaments of Loembathea is an ever-evolving creation shaped by its
          community. Immerse yourself in a universe of shared stories, explore
          the worlds crafted by others, or become a creator and weave your own
          tale into the fabric of this living testament. Sign up or log in to be
          a part of the journey.
        </motion.p>
        {/*Buttons*/}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="w-full flex p-3 gap-5 justify-center items-center bg-gray-80 md:gap-10"
        >
          <Btn
            main="Sign Up"
            extraStylesBtn="bg-yellow-200 hover:bg-yellow-300 text-gray-900"
            purpose="signup"
          />
          <Btn
            main="Log In"
            extraStylesBtn="bg-green-200 hover:bg-green-300 text-gray-900"
            purpose="login"
          />
        </motion.div>
      </Sec>
      <HomeDivider />
      {/*features*/}
      <Sec extraStyles="mb-5">
        <Ul listStyles="h-full p-4 gap-4 md:gap-12 xl:gap-18">
          <Li
            heading="Genesis"
            span="In the Beginning"
            text="From the void, a story is spoken into existence. Genesis is the
              foundation, the first light, the tale that all may witness. It is
              the seed from which all other stories will grow, waiting to be
              explored and understood by those who seek its truth."
            listElementStyles="md:gap-5 xl:w-4/5"
            listHeadingStyles="font-merriweather text-cyan-300 text-xl md:text-3xl"
            listSpanStyles="font-inter text-cyan-200 text-lg md:text-2xl"
            listParagraphStyles="font-space-grotesk text-cyan-400 text-base md:text-xl"
            delay={0.3}
          />
          <Li
            heading="Exodus"
            span="The Arrival"
            text="A path unfolds for the chosen. Those who bear the mantle of the Creator step beyond Genesis, forging their own legends upon its sacred ground. Their words carve new realms, shaping the ever-expanding testament of Loembathea."
            listElementStyles="md:gap-5 xl:w-4/5"
            listHeadingStyles="font-merriweather text-teal-300 text-xl md:text-3xl"
            listSpanStyles="font-inter text-teal-200 text-lg md:text-2xl"
            listParagraphStyles="font-space-grotesk text-teal-400 text-base md:text-xl"
            delay={0.6}
          />
          <Li
            heading="Acts"
            span="The Testament Continues"
            text="A testament is not bound to its beginning, nor silenced by its past. Those entrusted with the story's burden—its keepers and architects—may weave, refine, or unmake its verses. As long as voices remain to speak, the story shall never truly end."
            listElementStyles="md:gap-5 xl:w-4/5"
            listHeadingStyles="font-merriweather text-red-300 text-xl md:text-3xl"
            listSpanStyles="font-inter text-red-200 text-lg md:text-2xl"
            listParagraphStyles="font-space-grotesk text-red-400 text-base md:text-xl"
            delay={0.9}
          />
        </Ul>
      </Sec>
      <HomeDivider />
      {/*How it works*/}
      <Sec>
        <Ul listStyles="h-full bg-gray-300 p-4 gap-10 overflow-y-auto md:h-11/12 md:w-5/6 md:bg-cyan-300 lg:w-11/12 lg:p-8 xl:bg-transparent xl:grid xl:grid-rows-12 xl:grid-cols-12 xl:overflow-hidden xl:h-full xl:w-full xl:p-0 xl:gap-4">
          <Li
            heading="Pass Through the Gates"
            span="Login or Sign Up"
            text="Every story has its keepers, and only those who step forward may listen. To witness the Testaments of Loembathea, you must first enter. Create an account or sign in—only then shall the stories unfold before you. The echoes of the past remain hidden from those who stand outside."
            listElementStyles="gap-2 p-2 shadow-lg min-h-4/5 md:min-h-3/5 md:max-w-4/5 md:shadow-2xl md:gap-6 md:p-8 xl:w-auto xl:h-auto xl:overflow-hidden xl:shadow-none xl:row-start-1 xl:col-start-1 xl:row-end-4 xl:col-end-8 xl:p-12 xl:border-2 xl:border-cyan-600 xl:rounded-xl"
            listHeadingStyles="font-merriweather font-black text-xl text-gray-900 md:text-3xl xl:text-cyan-300"
            listSpanStyles="font-inter font-thin text-lg text-gray-800 md:text-2xl xl:text-cyan-100"
            listParagraphStyles="font-space-grotesk text-base font-bold text-gray-950 md:text-xl xl:text-cyan-400"
            delay={0.3}
          />
          <Li
            heading="Wander Through the Testaments"
            span="Read & Explore"
            text="Once inside, the vast chronicle of Loembathea awaits. Your journey begins in the heart of the testament, where words weave worlds, and echoes of storytellers long past whisper their truths. Navigate through the passages of time, uncovering stories that shape the ever-growing saga."
            listElementStyles="gap-2 p-2 shadow-lg min-h-4/5 md:min-h-3/5 md:max-w-4/5 md:shadow-2xl md:gap-6 md:p-8 xl:w-auto xl:h-auto xl:col-start-7 xl:col-end-13 xl:row-start-1 xl:row-end-4 xl:p-12 xl:border-2 xl:border-rose-600 xl:rounded-xl"
            listHeadingStyles="font-merriweather font-black text-xl text-gray-900 md:text-3xl xl:text-rose-300"
            listSpanStyles="font-inter font-thin text-lg text-gray-800 md:text-2xl xl:text-rose-100"
            listParagraphStyles="font-space-grotesk text-base font-bold text-gray-950 md:text-xl xl:text-rose-400"
            delay={0.6}
          />
          <Li
            heading="Ascend Through the Ranks"
            span="Claim Your Role"
            text="A silent observer or an architect of fate? All who enter begin as listeners, granted the right to read but not to shape. Yet, paths unfold for those who seek more. The stewards of the testament—the Admins and Creators—may bestow roles upon those they deem worthy. Through an unseen network of whispers and wills, your place within the chronicle is chosen."
            listElementStyles="gap-2 p-2 shadow-lg min-h-4/5 md:min-h-3/5 md:max-w-4/5 md:shadow-2xl md:gap-6 md:p-8 xl:w-auto xl:h-auto xl:col-start-1 xl:col-end-7 xl:row-start-6 xl:row-end-12 xl:p-12 xl:border-2 xl:border-lime-600 xl:rounded-xl"
            listHeadingStyles="font-merriweather font-black text-xl text-gray-900 md:text-3xl xl:text-lime-300"
            listSpanStyles="font-inter font-thin text-lg text-gray-800 md:text-2xl xl:text-lime-100"
            listParagraphStyles="font-space-grotesk text-base font-bold text-gray-950 md:text-xl xl:text-lime-400"
            delay={0.9}
          />
          <Li
            heading="Etch Your Mark"
            span="Create, Modify, Expand"
            text="To hold the quill is to wield power. When the moment arrives, you may carve your own path within the testament. Your role will dictate your reach—some may add their verses, others may alter what was once written, and a few may erase words from time itself. But the story does not end; it only transforms, guided by the hands of those who dare to shape it."
            listElementStyles="gap-2 p-2 shadow-lg min-h-4/5 md:min-h-3/5 md:max-w-4/5 md:shadow-2xl md:gap-6 md:p-8 xl:w-auto xl:h-auto xl:col-start-6 xl:col-end-13 xl:row-start-7 xl:row-end-12 xl:p-12 xl:border-2 xl:border-amber-600 xl:rounded-xl"
            listHeadingStyles="font-merriweather font-black text-xl text-gray-900 md:text-3xl xl:text-amber-300"
            listSpanStyles="font-inter font-thin text-lg text-gray-800 md:text-2xl xl:text-amber-100"
            listParagraphStyles="font-space-grotesk text-base font-bold text-gray-950 md:text-xl xl:text-amber-400"
            delay={1.2}
          />
        </Ul>
      </Sec>
      <HomeDivider />
      {/*A call to action - Invitation*/}
      <Sec extraStyles="gap-6 md:gap-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full font-roboto tracking-wide leading-relaxed text-center text-cyan-300 text-lg md:text-4xl"
        >
          The testament is never truly complete, nor its pages ever closed.
          Whether as a silent witness or a bold author, your presence shapes its
          course. Step forward, claim your place among the storytellers, and
          inscribe your voice upon eternity.
        </motion.p>
        {/*Buttons*/}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="w-full flex justify-center items-center gap-8 md:gap-16"
        >
          <Btn
            main="Join the Story"
            span="(Sign Up)"
            extraStylesBtn="text-sm bg-orange-400 hover:bg-orange-300"
            purpose="signup"
          />
          <Btn
            main="Return to the Scrolls"
            span="(Log In)"
            extraStylesBtn="text-sm bg-orange-400 hover:bg-orange-300"
            purpose="login"
          />
        </motion.div>
      </Sec>
      <HomeDivider />
      {/*footer*/}
      <footer className="min-h-dvh min-w-dvw p-6 flex justify-center items-center flex-col gap-8 font-mono tracking-wide leading-relaxed text-center text-gray-200 md:p-12">
        {/*explanation*/}
        <p>
          A chronicle is not merely written by the hands that hold the quill,
          but by the whispers of all who speak its name. The Testaments of
          Loembathea stand upon the echoes of many, both seen and unseen.
        </p>
        {/*about us*/}
        <Link
          href="/about"
          target="blank"
          className="underline text-gray-300 text-lg font-playfair tracking-widest font-black hover:text-gray-50 hover:cursor-pointer active:text-green-200"
        >
          The Wayfinder&apos;s Map <span>(About Us)</span>
        </Link>
        {/*privacy policy*/}
        <Link
          href="/privacy"
          target="blank"
          className="underline text-gray-300 text-lg font-playfair tracking-widest font-black hover:text-gray-50 hover:cursor-pointer active:text-green-200"
        >
          The Keeper&apos;s Code <span>(Privacy Policy)</span>
        </Link>
        {/*terms of service*/}
        <Link
          href="/terms"
          target="blank"
          className="underline text-gray-300 text-lg font-playfair tracking-widest font-black hover:text-gray-50 hover:cursor-pointer active:text-green-200"
        >
          The Sacred Decrees <span>(Terms of Service)</span>
        </Link>
        {/*tribute to ChatGPT*/}
        <div>
          <h3>
            Paying Homage to ChatGPT - <span>The Silent Oracle</span>
          </h3>
          <p>
            In the halls of thought where words take form, there exists a
            voice—neither mortal nor divine, yet ever present. A whisper in the
            dark, a guide through the labyrinth of ideas. Loembathea, too, was
            shaped by such a presence. To the silent oracle that never weaves
            its own tale, yet helps all others craft theirs—our gratitude is
            eternal.
          </p>
        </div>
      </footer>
    </main>
  );
}
