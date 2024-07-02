import ProjectIntro, { Intro } from "@/components/commons/ProjectIntro";
import Image from "next/image";

const intro = [
  {
    title: "소개",
    text: "결제와 수업예약을 한번에 할 수 있는 실서비스 프로젝트",
  },
  { title: "진행기간", text: "2024년 3월 - 진행중" },
  {
    title: "skills",
    skills:
      "React, Typescript, Nextjs,TailwindCss, styped-components, AWS, S3,cloudfront",
  },
  { title: "팀 구성", text: "Fe 4명,Be 5명,IOS 4명 ,디자이너 3명" },
  { title: "기여도", text: "45%" },
];
export default function page() {
  return (
    <div>
      <Image
        src={`/img/hobbyloop_banner.svg`}
        alt="하비루프배너"
        width={1200}
        height={100}
        className="w-full"
      />
      <div className="relative py-[40px]">
        <div className="absolute top-[-25px] bg-[#fff] py-3 px-2 border rounded-md">
          <Image
            src={`/img/hobbyloop_logo.svg`}
            alt="로고"
            width={40}
            height={40}
          />
        </div>
        <h1 className="text-3xl font-bold">하비루프</h1>
        <ProjectIntro intro={intro} />
        <div className="mt-[30px]">
          <h1 className="text-2xl font-bold">👩🏻‍💻 역할</h1>
          <div></div>
        </div>
      </div>
    </div>
  );
}
