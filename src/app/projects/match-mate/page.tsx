import Callout from "@/components/commons/Callout";
import LinkLine from "@/components/commons/LinkLine";
import LogoBox from "@/components/commons/LogoBox";
import ProjectIntro from "@/components/commons/ProjectIntro";
import IndentText, {
  NumberIndentText,
  SubTitle,
  Title,
} from "@/components/commons/Text";
import Toc from "@/components/commons/Toc";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";

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
  { number: "content1", title: "상세 역할" },
  { number: "content2", title: "사용기술 및 라이브러리" },
  { number: "content3", title: "서비스 내용" },
  { number: "content4", title: "담당 기능" },
  { number: "content5", title: "성장 경험" },
  { number: "content6", title: "개선" },
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
          <LinkLine link="https://github.com/side-project-0408/frontend">
            <IoLogoGithub className="text-[25px] mt-[9px]" />
          </LinkLine>
        </div>
        <ProjectIntro intro={intro} />
        <SubTitle id="heading1">상세역할</SubTitle>
        <ul
          className="dots-list content border-b border-[#eeeeee] pb-[40px]"
          id="content1"
        >
          <li>
            <IndentText className="font-semibold">Team Leader</IndentText>
          </li>
          <li>
            <IndentText className="font-semibold">
              Front-End Developer
            </IndentText>
          </li>
          <li>
            <IndentText className="font-semibold">designer(Figma)</IndentText>
          </li>
        </ul>
        <SubTitle id="heading2">사용 기술 및 라이브러리</SubTitle>
        <ul
          className="dots-list content border-b border-[#eeeeee] pb-[40px]"
          id="content2"
        >
          <li>
            <IndentText>Next.js , React , TypeScript</IndentText>
          </li>
          <li>
            <div className="flex gap-2">
              <IndentText>ReactQuery , MSW</IndentText>
            </div>
          </li>
        </ul>
        <SubTitle id="heading3">서비스 내용</SubTitle>
        <ul
          className="flex flex-col gap-2 content border-b border-[#eeeeee] pb-[40px]"
          id="content3"
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
            <p>벤치마킹 :</p>
            <div className="flex gap-2">
              <LinkLine link="https://holaworld.io/">holaworld</LinkLine>
              <LinkLine link="https://letspl.me/people">letspl</LinkLine>
            </div>
          </li>
        </ul>
        <SubTitle id="heading4">담당 기능</SubTitle>
        <ul className="dots-list border-b border-[#eeeeee] pb-[40px]">
          <p className="text-[20px] font-semibold mt-[10px]">로그인</p>
          <li id="content4">
            <IndentText>Oauth 카카오 로그인</IndentText>
            <IndentText className="dots-list-white">
              카카오 로그인 후 accessToken 과 refreshToken cookie 에 저장
            </IndentText>
            <IndentText className="dots-list-white">
              queryCache를 이용하여 accessToken 만료시 refreshToken으로
              accessToken 갱신 요청. 로그인 상태 유지
            </IndentText>
          </li>
          <p className="text-[20px] font-semibold mt-[10px]">people page</p>
          <li>
            <IndentText>
              기술스택/포지션/최신순/인기순 에 따라 searchParams 이용한 동적
              params 필터링 구현
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
              제안 가능 여부에 따라 버튼의 활성/비활성화 상태 제어
            </IndentText>
          </li>
          <p className="text-[20px] font-semibold mt-[10px]">마이페이지</p>
          <li>
            <IndentText>유저 정보 수정</IndentText>
            <IndentText className="dots-list-white">
              폼 구현 <br />
              사용자 닉네임/ 이메일 / 직무 / 경력 / 기술 스택 / 소프트스킬 /
              자기소개 / 링크수정 / 프로필이미지 / 재직여부 / 제안받기 활성화
            </IndentText>
          </li>
          <li>
            <IndentText>나의 활동</IndentText>
            <IndentText>
              내가 작성한 프로젝트 , 내가 찜한 프로젝트/피플 관심목록
            </IndentText>
          </li>
          <div className="flex gap-2 items-center">
            <p className="text-[20px] font-semibold mt-[10px]">msw</p>
            <LinkLine link="https://github.com/side-project-0408/frontend/tree/main/src/mocks">
              <IoLogoGithub className="mt-[12px]" />
            </LinkLine>
          </div>
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
        <SubTitle id="heading5">성장 경험</SubTitle>
        <ul
          className="dots-list border-b border-[#eeeeee] pb-[40px]"
          id="content5"
        >
          <p className="text-[20px] font-semibold mt-[10px]">서비스</p>
          <li>
            <IndentText>
              코드를 완벽하게 적용하려기 보단 전체적인 흐름에 대해 이해하고 각
              자원의 이유를 고민했던 시간이 유익했습니다. <br />
              디버깅을 하면서 해결 방안을 모색하며 직접 적용해보고 실패도 해보는
              경험을 통해, 단순히 코딩 스킬의 향상을 넘어서 문제를 바라보는
              시각과 다양한 접근 방식을 발전시키는데 도움이 되었다고 생각합니다.
            </IndentText>
          </li>
          <p className="text-[20px] font-semibold mt-[10px]"></p>
          <li>
            <IndentText>
              반복적인 피드백과 최적화를 통해 실제 사용자 경험을 개선하는 과정이
              얼마나 중요한지 깨달았습니다.
              <br />
              작은 개선조차도 웹 어플리케이션에 큰 변화를 가져올 수 있다는 것을
              경험했습니다.
              <br />
              단순히 기능 구현에 그치지 않고, 사용자 중심의 접근 방식을 통해
              실제 사용 환경에서의 경험을 꾸준히 개선해 나가는 것이 중요하다는
              점을 강조하고 싶습니다.
            </IndentText>
          </li>
          <p className="text-[20px] font-semibold mt-[10px]">팀 리더</p>
          <li>
            <IndentText>
              팀 일정과 상황에 맞춰 개발 일정을 조정하고 협업을 원활히 이끌기
              위해 팀원들과 지속적인 커뮤니케이션을 유지하였습니다.
              <br /> 모든 일정이 비대면으로 진행되다 보니 소통에 더 큰 노력을
              기울였습니다. 기획 단계에서는 하루에 한 번씩 진행되는 데일리
              스크럼을 통해 팀원들과 역할을 명확히 정의하고, 그 이후에는 주 1회
              정기적인 스크럼을 통해 프로젝트의 진행 상황을 확인하고
              조정하였습니다.
            </IndentText>
          </li>
        </ul>
        {/* <SubTitle id="heading6">서비스 화면</SubTitle>
        <ul id="content6" className="border-[#eeeeee] pb-[40px] border-b"></ul> */}
        <SubTitle id="heading7">트러블 슈팅</SubTitle>
        <ul className="border-[#eeeeee] pb-[40px] border-b">
          <li>
            <NumberIndentText className="strong-2">
              1. 엑세스토큰 갱신
            </NumberIndentText>
            <IndentText className="dots-list-white">발생 배경</IndentText>
            <IndentText>
              FE에서는 fetch를 이용해 데이터를 가져오고, React Query로 데이터
              상태를 관리하고 있어 토큰 갱신을 위한 별도의 설정이 필요했습니다.
            </IndentText>
            <IndentText className="dots-list-white">해결 과정</IndentText>
            <IndentText>
              토큰을 갱신하기 위해 Axios 인터셉터를 사용하는 사례가 많았지만,
              기존 코드와의 통합 문제로 적절하지 않다고 판단하였습니다.
              <br /> 여러 방안을 고려 한 후 React Query의{" "}
              <span className="code-strong">QueryCache</span>를 활용하여 에러
              핸들링과 토큰 갱신을 관리하는 방법으로 적용하였습니다.
              <br />
              인증이 필요한 데이터 요청 시 엑세스토큰이 만료되어 데이터 요청이
              실패할 경우 리프레시토큰을 이용해 갱신된 엑세스토큰으로 쿼리를
              다시 <span className="code-strong">refetch</span> 하도록
              적용하였습니다.
            </IndentText>
            <IndentText className="dots-list-white">결과</IndentText>
            <IndentText>
              사용자에게 자동으로 갱신된 토큰으로 요청을 처리하여 서비스를
              지속적으로 이용할 수 있도록 설정하였습니다. 이를 통해 B2C 모델의
              안정성과 사용 편의성을 높여 사용자 경험이 향상되었습니다.
            </IndentText>
          </li>
        </ul>
        <SubTitle id="heading6">개선</SubTitle>
        <ul id="content6">
          <li>
            <NumberIndentText className="strong">
              1. 폰트 최적화
            </NumberIndentText>
            <IndentText className="dots-list-white">
              배경 : 폰트 용량이 1130KiB에 달하여 LCP에 이슈
            </IndentText>
            <IndentText className="dots-list-white">
              해결 : 사용하지않는 글리프를 제거하고 필요한 글리프만 포함된
              서브셋 폰트를 생성. woff포맷에서 woff2포맷으로 변환하여 파일 크기
              감소. <br />
              폰트파일을 브라우저가 캐싱하도록 설정.
            </IndentText>
            <IndentText className="dots-list-white">
              결과 : 폰트 파일크기 약 30% 절감 (1,103.4KiB, 1,097.7KiB,
              1,091.3KiB 에서 각각 232.0KiB, 249.8KiB, 210.1KiB 로 감소)
            </IndentText>
          </li>
          <li>
            <NumberIndentText className="strong">
              2. CSP 콘텐츠 보안 정책 설정
            </NumberIndentText>
            <IndentText className="dots-list-white">
              배경 : 쿠키에 저장된 accessToken의 XSS 공격을 방지하기위해 HTTP
              보안 헤더 설정 필요
            </IndentText>
            <IndentText className="dots-list-white ml-0">
              해결 : &nbsp;XSS 공격, 데이터 삽입 공격과 같은 위협을 방지
              하기위해 가장 강력한 도구로 CSP(Content Security Policy)선택.
            </IndentText>
            <div className="ml-[70px]">
              <span className="font-semibold">middleware 설정 :</span>
              <span>
                각 요청마다 CSP 헤더를 설정하고 고유한 nonce 값 을 생성하여
                인라인 스크립트를 안전하게 실행할 수 있도록 적용.
              </span>
              <br />
              <span className="font-semibold">NGINX 설정 :</span>
              <span>
                NGINX에서도 CSP 헤더를 적용하여 서버 측에서 동적으로 생성된
                컨텐츠에 대한 보안 적용.
              </span>
            </div>
            <IndentText className="dots-list-white">
              결과 : CSP를 통해 XSS 공격을 방지하고 웹 어플리케이션의 전체적인
              보안 수준 향상 / NGINX에서도 CSP를 설정하여 모든 요청에 대해
              일관된 보안 정책 적용.
            </IndentText>
          </li>
          <li>
            <NumberIndentText className="strong">
              3. JS 파일 크기 최적화
            </NumberIndentText>
            <IndentText className="dots-list-white">
              배경 : 초기 로딩 시 필요하지 않은 JavaScript 파일이 과도하게
              포함되어 사용자 경험이 저하 될 우려.
            </IndentText>
            <IndentText className="dots-list-white">
              해결 : 코드 스플리팅을 통해 동적으로 임포트 되도록 적용.
            </IndentText>
            <IndentText className="dots-list-white">
              결과 : 로그아웃 페이지 &nbsp;
              <span className="font-semibold">101KB → 88.8KB</span> / 마이페이지{" "}
              <span className="font-semibold">150KB → 112KB </span>
            </IndentText>
          </li>
          <li>
            <NumberIndentText className="strong">
              4. 이미지 최적화
            </NumberIndentText>
            <IndentText className="dots-list-white">
              배경 : 메인 페이지 및 마이페이지 렌더링 시 이미지로 인한 LCP 지연.
            </IndentText>
            <IndentText className="dots-list-white">
              해결 : <br /> 클라우디너리 플랫폼 사용 : 자동 최적화 기능을
              사용하여 파일 크기 최적화. <br /> Base64 인코딩 : 이미지를 인코딩
              후 이미지가 완전히 로드되는 동안 블러 처리된 이미지 URL을 지정하여
              사용자 경험을 개선.
            </IndentText>
            <IndentText className="dots-list-white">
              결과 : <br /> 이미지 로딩 시간 :{" "}
              <span className="font-semibold">86.347ms → 45.158ms 감소</span>{" "}
              <br /> 파일 크기 :{" "}
              <span className="font-semibold">15.5KB → 5KB 감소</span>
              <br />
              LCP : <span className="font-semibold">7ms → 2ms 시간 감소</span>
            </IndentText>
          </li>
        </ul>
      </div>
    </div>
  );
}
