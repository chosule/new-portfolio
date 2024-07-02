import ProjectIntro from "@/components/commons/ProjectIntro";
import { getProjects, getSlugsProjects } from "@/service/projects";
import Image from "next/image";

type Props = {
  params: {
    slugs: string[];
  };
};

export default async function ProjectPage({ params }: Props) {
  const slugs = params.slugs;
  const slugsFilterData = await getSlugsProjects(slugs);
  const { banner, title, logo } = slugsFilterData;

  return (
    <div>
      <Image
        src={`/img/${banner}`}
        alt={banner}
        width={1200}
        height={100}
        className="w-full"
      />
      <div className="max-w-[900px] mx-auto py-[40px] relative">
        <div className="absolute top-[-25px] bg-[#fff] py-3 px-2 border rounded-md">
          <Image src={`/img/${logo}`} alt={logo} width={40} height={40} />
        </div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <ProjectIntro slugData={slugsFilterData} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const projectsContents = await getProjects();
  const slugs = projectsContents.map((content) => ({
    slug: content.path,
  }));
  return slugs;
}
