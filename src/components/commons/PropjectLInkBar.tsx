"use client";
import Link from "next/link";
import fileIcon from "../../../public/img/fileIcon.svg";
import projectIcon from "../../../public/img/projectIcon.svg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Contents } from "@/service/projects";

type Props = {
  projectData: Contents[];
};
export default function PropjectsNavBar({ projectData }: Props) {
  const path = usePathname();
  const pathName = path.split("/")[2];
  return (
    <ul className="flex h-[52px] justify-between px-4">
      <li className="flex text-sm items-center gap-4">
        <Link
          className="cursor-pointer flex gap-2"
          href="https://chosule-portfolio-new.vercel.app/"
        >
          <Image src={projectIcon} alt="사람아이콘" width={20} height={20} />
          <p>김초슬 ㅣ portfolio / </p>
        </Link>
        <div className="flex gap-2">
          <Image src={fileIcon} alt="사람아이콘" width={20} height={20} />
          <p>{pathName}</p>
        </div>
      </li>
      <li className="flex gap-2 text-sm items-center">
        <Link
          href="https://chosule-blog.vercel.app/"
          className="rounded-lg p-2 border"
        >
          💻 My blog
        </Link>
      </li>
    </ul>
  );
}
