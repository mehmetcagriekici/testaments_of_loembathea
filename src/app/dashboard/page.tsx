//imports
import Blob from "@/components/dashboard/Blob";

export default function Dashboard() {
  //blobl wrapper
  return (
    <div className="h-dvh w-dvw overflow-hidden">
      {/*Redirect to map (testaments + verses)*/}
      <Blob
        href="dashboard/map"
        text="Step into the stars and trace the paths of the Testaments."
        route="Testaments"
        extraStyles={{
          outer:
            "h-[120px] w-[120px] md:h-[160px] md:w-[160px] lg:h-[200px] lg:w-[200px] bg-rose-500",
          link: "font-mono text-gray-900 text-center font-semibold",
        }}
      />
    </div>
  );
}
