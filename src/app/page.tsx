import AboutMe from "@/components/AboutMe";
import Introduce from "@/components/Introduce";
import Profile from "@/components/Profile";
import Project from "@/components/Project";
import TechStack from "@/components/TechStack";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <section className="max-w-[1200px] mx-auto">
      <Introduce />
      <Profile />
      <AboutMe />
      <WorkExperience />
      <Project />
      <TechStack />
    </section>
  );
}
