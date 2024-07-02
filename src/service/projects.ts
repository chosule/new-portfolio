import { readFile } from "fs/promises";
import { redirect } from "next/navigation";

export type IntroProps = {
  introText?: string;
  intro?: string;
  periodText?: string;
  period?: string;
  skillsText?: string;
  skills?: string;
  teamText?: string;
  contriText?: string;
  contribution?: string;
};
export type Contents = {
  title: string;
  description: string;
  date: string;
  path: string;
  thumbnail: string;
  tags: { id: number; subtitle: string }[];
  icon: string;
  banner: string;
  logo: string;
  projectintro: IntroProps[];
};

export async function getProjects(): Promise<Contents[]> {
  const filePath = "projectData/data.json";
  const jsonData = await readFile(filePath, "utf-8");
  const projects: Contents[] = JSON.parse(jsonData);

  return projects;
}

export async function getSlugsProjects(slugs: any): Promise<Contents> {
  const projects = await getProjects();
  const slugsProjectFilter = projects.find((data) => data.path === slugs);
  if (!slugsProjectFilter) {
    redirect("/");
  }
  return slugsProjectFilter;
}
