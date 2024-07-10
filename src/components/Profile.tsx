"use client";
import Title from "./commons/Title";
import id_photo from "../../public/img/id_photo.png";
import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/constants/animations";

const INFO = [
  { title: "name", datail: "김초슬" },
  { title: "birth", datail: "1992.10.20" },
  { title: "phone", datail: "010.9724.3290" },
  { title: "email", datail: "kimchosule1@gmail.com" },
];

const LINK = [
  { id: 1, linkTitle: "Github", link: "https://github.com/chosule" },
  { id: 2, linkTitle: "Blog", link: "https://chosule-blog.vercel.app/" },
  { id: 3, linkTitle: "Velog", link: "https://velog.io/@chosule/posts" },
];
export default function Profile() {
  return (
    <motion.div variants={fadeIn}>
      <Title title="Profile" />
      <div className="flex gap-12">
        <Image src={id_photo} alt="증명사진" width={200} />
        <div className="flex flex-col justify-around">
          <ul className="grid-cols-[65px_1fr] grid h-[150px]">
            {INFO.map((info) => (
              <Fragment key={info.title}>
                <li className="font-[600] text-neutral-gray_2">{info.title}</li>
                <li>{info.datail}</li>
              </Fragment>
            ))}
          </ul>
          <ul className="flex gap-10">
            {LINK.map((links) => (
              <li
                key={links.id}
                className="transition-transform hover:-translate-y-1"
              >
                <Link
                  href={links.link}
                  target="_black"
                  className="text-4xl font-bold underline"
                >
                  {links.linkTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
