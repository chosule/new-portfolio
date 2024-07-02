import Callout from "@/components/commons/Callout";
import LinkLine from "@/components/commons/LinkLine";
import LogoBox from "@/components/commons/LogoBox";
import ProjectIntro from "@/components/commons/ProjectIntro";
import IndentText, { SubTitle, Title } from "@/components/commons/Text";
import Toc from "@/components/commons/Toc";
import Image from "next/image";

const intro = [
  {
    title: "소개",
    text: "프로젝트를 구인하는사람들에게 직접 제안받고 프로젝트를 구성하는 웹 어플리케이션",
  },
  {
    title: "진행기간",
    text: "24년 04월 - 07월",
  },
  {
    title: "적용기술",
    skills: "React, Typescript, Nextjs, TailwindCss , React Query",
  },
  { title: "팀 구성", text: "FE 2명 / BE 2명" },
  { title: "기여도", text: "60%" },
];
const tocMenu = [
  { number: "content1", title: "프로젝트 개요" },
  { number: "content2", title: "상세 역할" },
  { number: "content3", title: "사용기술 및 라이브러리" },
  { number: "content4", title: "서비스 내용" },
];
export default function page() {
  return (
    <div>
      <Image
        src="/img/match-mate_banner.png"
        alt="매치메이트배너"
        width={1200}
        height={100}
        className="w-full"
      />
      <div className="py-[40px] 2xl:max-w-[1000px] mx-auto relative max-w-[800px]">
        <Toc tocMenu={tocMenu} />
        <div className="flex gap-4">
          <LogoBox img="/img/match-mate_logo.png" />
          <Title>매치메이트 프로젝트</Title>
        </div>
        <ProjectIntro intro={intro} />
        <SubTitle id="heading1">프로젝트 개요</SubTitle>
        <div
          className="content border-b border-[#eeeeee] pb-[40px]"
          id="content1"
        >
          <Callout>dsd</Callout>
        </div>
        <SubTitle id="heading2">상세역할</SubTitle>
        <ul
          className="dots-list content border-b border-[#eeeeee] pb-[40px]"
          id="content2"
        >
          <li>
            <IndentText>Team Leader</IndentText>
          </li>
          <li>
            <IndentText>Front-End Developer</IndentText>
          </li>
          <li>
            <IndentText>designer(Figma)</IndentText>
          </li>
        </ul>
        <SubTitle id="heading3">사용 기술 및 라이브러리</SubTitle>
        <ul
          className="dots-list content border-b border-[#eeeeee] pb-[40px]"
          id="content3"
        >
          <li>
            <IndentText>Next.js , React , TypeScript</IndentText>
          </li>
          <li>
            <IndentText>msw(Mock Service Worker)</IndentText>
            <IndentText className="ml-[20px]">
              백엔드 api 작업이 완료되지 않은 상황에서 컴포넌트 제작 시 어려움이
              있었습니다. <br />
              서로 불필요한 시간이 발생하였고 이를 해결하기 위해 msw
              라이브러리를 도입하여 개발하였습니다.
            </IndentText>
          </li>
          <li>
            <IndentText>ReactQuery</IndentText>
            <IndentText className="ml-[20px]">
              React Query의 가장 큰 장점은 캐싱 처리 이지만 데이터 업데이트를
              가능한 빠르게 반영, 페이지네이션 최적화의 이유로 사용하였습니다.
            </IndentText>
          </li>
        </ul>
        <SubTitle id="heading4">서비스 내용</SubTitle>
        <ul
          className="flex flex-col gap-2 content border-b border-[#eeeeee] pb-[40px]"
          id="content4"
        >
          <li>
            match-mate 프로젝트는 구인하는 사람들에게 직접 제안받기 위한 서비스
            입니다.
          </li>
          <li>
            <p className="font-bold">핵심기능</p>
            프로젝트를 구하기 위해 따로 모집글을 살펴보지 않고도 유저 정보가
            자동으로 업데이트되면 제안받기 활성화를 통해 프로젝트를 모집하는
            사람들과 연결되도록 복잡하지 않고 간단한 플로우로 구성하였습니다.
          </li>
          <li className="flex">
            벤치마킹 :
            <LinkLine link="https://holaworld.io/">holaworld</LinkLine>
            <LinkLine link="https://letspl.me/people">letspl</LinkLine>
          </li>
        </ul>
        <SubTitle id="heading4">담당 기능</SubTitle>
        <ul className="dots-list">
          <p className="text-[20px] font-semibold mt-[10px]">로그인</p>
          <li>
            <IndentText>Oauth 카카오 로그인</IndentText>
            <IndentText className="dots-list-white">
              카카오 로그인 후 백엔드에서 받아온 accessToken과 refreshToken을
              cookie에 저장
            </IndentText>
          </li>
          <p className="text-[20px] font-semibold mt-[10px]">people page</p>
          <li>
            <IndentText>
              people 페이지 기술스택/포지션/최신순/인기순 에 따라 searchParams을
              이용하여 동적 params 필터링 구현
            </IndentText>
          </li>
          <p className="text-[20px] font-semibold mt-[10px]">
            people 상세페이지
          </p>
          <li>
            <IndentText>
              React Query를 사용하여 서버로 부터 데이터를 미리 가져와
              dehydration 후 서버사이드 렌더링 구현
            </IndentText>
          </li>
          <li>
            <IndentText>좋아요 기능</IndentText>
            <IndentText className="dots-list-white">
              Mutaion을 사용하여 좋아요 상태를 서버에 업데이트하고 성공 시
              invalidateQueries를 통해 캐시된 데이터 갱신
            </IndentText>
          </li>
          <li>
            <IndentText>제안하기 기능</IndentText>
            <IndentText className="dots-list-white">
              사용자가 특정 인물에게 제안을 보낼 수 있는 기능
            </IndentText>
            <IndentText className="dots-list-white">
              제안 가능 여부에 따라 버튼의 활성화 상태를 제어
            </IndentText>
          </li>
          <p className="text-[20px] font-semibold mt-[10px]">마이페이지</p>
          <li>
            <IndentText>유저 정보 수정</IndentText>
            <IndentText className="dots-list-white">
              폼 구현 <br />
              사용자 닉네임/ 이메일 / 직무 / 경력 / 기술 스택 / 소프트스킬 /
              자기소개 / 링크수정/ 프로필이미지 / 재직여부 / 제안받기 활성화
              여부
            </IndentText>
          </li>
          <li>
            <IndentText>나의 활동</IndentText>
            <IndentText>
              내가 작성한 프로젝트 , 내가 찜한 프로젝트/피플 관심목록 구현
            </IndentText>
          </li>
          <p className="text-[20px] font-semibold mt-[10px]">msw</p>
          <li>
            <IndentText>
              FE/BE 개발을 병렬적으로 진행하여 DB API의 유무와 상관없이 개발에만
              집중 가능하였습니다. <br />
              API가 아직 완성되지 않았거나 변경 중인 상황에서도, 개발 작업이
              중단되지 않도록 하는 데 큰 도움이 되었습니다. 이를 통해 팀 전체의
              개발 생산성을 크게 향상시켰습니다. 또한 네트워크 계층에서 API를
              목킹하여 비즈니스 로직에 mock 데이터가 의존되지 않아 mock 데이터를
              제거하지 않아도 문제가 발생되지 않습니다.
            </IndentText>
          </li>
          <p className="text-[20px] font-semibold mt-[10px]">fetch</p>
          <li>
            <IndentText>
              중복된 데이터 요청 시 캐싱된 데이터를 가져와 불필요한 api 호출을
              감소하였고, next 태그기반 데이터 재검증을 통해 동적으로 업데이트
              할 수 있도록 설정.
            </IndentText>
          </li>
          <p className="text-[20px] font-semibold mt-[10px]">배포</p>
          <li>
            <IndentText>
              AWS EC2(ubuntu)를 사용하여 배포 및 포트포워딩에 nginx 사용
            </IndentText>
          </li>
        </ul>
      </div>
    </div>
  );
}
