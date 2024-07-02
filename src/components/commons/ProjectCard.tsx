import { Contents } from "@/service/projects";
import Image from "next/image";
import Link from "next/link";
import VisualBox from "../ui/VisualBox";
type Props = {
  projects: Contents[];
};

export default function ProjectCard({ projects }: Props) {
  return (
    <ul className="grid grid-cols-3 gap-10">
      {projects.map((project) => (
        <Link
          key={project.path}
          href={`/projects/${project.path}`}
          className="border-[#e0e0e0] border rounded-md transition-transform hover:-translate-y-1 cursor-pointer hover:bg-neutral-gray_3 "
        >
          <div className="cursor-pointer w-full">
            <Image
              className="rounded-t-md"
              src={`/img/${project.thumbnail}`}
              alt={`${project.thumbnail}`}
              width={600}
              height={10}
            />
          </div>
          <ul className="p-3 flex flex-col gap-3 rounded-b-md">
            <li className="flex flex-col gap-1">
              <span className="text-xl font-[500]">{project.title}</span>
              <span className="text-sm text-neutral-gray_1 font-[500]">{`${project.description}`}</span>
            </li>
            <li className="flex gap-3 flex-wrap">
              {project.tags?.map((tag) => (
                <VisualBox key={tag.id}>{tag.subtitle}</VisualBox>
              ))}
            </li>
          </ul>
        </Link>
      ))}
    </ul>
  );
}
