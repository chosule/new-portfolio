"use client";
import useIntersectionObservation from "@/lib/useIntersectionObserver";
import { useState } from "react";

type Props = {
  tocMenu: {
    number: string;
    title: string;
  }[];
};
export default function Toc({ tocMenu }: Props) {
  const [active, setActive] = useState<string>("content1");
  useIntersectionObservation(setActive);

  const handleClick = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector<HTMLElement>(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <>
      <nav className="navigation">
        {tocMenu?.map((content) => {
          return (
            <div key={content.number}>
              <a
                href={`#${content.number}`}
                className={active === content.number ? "active" : ""}
                onClick={(e) => handleClick(e, content.number)}
              >
                {content.title}
              </a>
            </div>
          );
        })}
      </nav>
    </>
  );
}
