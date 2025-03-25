import ContentContainer from "@/components/dashboard/ContentContainer";
import SideBar from "@/components/dashboard/SideBar";

export default function Dashboard() {
  return (
    <div className="h-dvh w-dvw">
      {/*notifications and updates*/}
      {/**Content
       * testaments
       */}
      <ContentContainer></ContentContainer>
      {/**navigation (side bar)
       *access user profile and settings
       */}
      <SideBar></SideBar>
    </div>
  );
}
