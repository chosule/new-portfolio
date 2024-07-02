import Link from "next/link";
import Title from "./commons/Title";
import { getProjects } from "@/service/projects";
import ProjectCard from "./commons/ProjectCard";

export default async function Project() {
  const projects = await getProjects();
  return (
    <>
      <Title title="Other Experience" />
      <ProjectCard projects={projects} />
    </>
  );
}
