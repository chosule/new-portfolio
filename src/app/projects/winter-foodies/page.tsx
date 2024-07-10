import Callout from "@/components/commons/Callout";
import IndentText, {
  NumberIndentText,
  SubTitle,
  Title,
} from "@/components/commons/Text";
import ProjectIntro from "@/components/commons/ProjectIntro";
import Image from "next/image";
import Toc from "@/components/commons/Toc";
import DynamicMDXLoader from "@/components/code/DynamicMDXLoader";
import LinkLine from "@/components/commons/LinkLine";
import { IoLogoGithub } from "react-icons/io";
import ToggleBox from "@/components/commons/ToggleBox";
import { ImArrowRight } from "react-icons/im";
import ab_1 from "../../../../public/img/ab_1.png";
import ab_2 from "../../../../public/img/ab_2.png";
import LogoBox from "@/components/commons/LogoBox";
const intro = [
  {
    title: "소개",
    text: "내근처 길거리 간식 스토어의 메뉴들을 확인하고 직접 주문하는 웹 어플리케이션",
  },
  {
    title: "진행기간",
    text: "23년 9월 - 12월 / 마이그레이션 기간 - 24년 6월 한달",
  },
  {
    title: "적용기술 (기존 코드)",
    skills: "React, Typescript, Nextjs 13 Page router, emotion, Recoil",
  },
  {
    title: "적용기술 (마이그레이션 후)",
    skills:
      "React, Typescript, Nextjs 14 App Router, Zustand ,TailwindCss, SWR , Express.js , Node.js , Firebase , Google Cloud Storage , REST API",
  },
  { title: "팀 구성", text: "FE 1명 BE 1명 -> FE 1명" },
  { title: "기여도", text: "100%" },
];

const tocMenu = [
  { number: "content1", title: "프로젝트 개요" },
  { number: "content2", title: "리팩토링 및 마이그레이션 목표" },
  { number: "content3", title: "주요 작업 변경사항" },
  { number: "content4", title: "마이그레이션 도중 개선사항" },
  // { number: "content5", title: "트러블슈팅" },
  { number: "content6", title: "마이그레이션 결과" },
  { number: "content7", title: "서비스 화면" },
];
export default function page() {
  return (
    <div>
      <Image
        src="/img/winterfoodies_banner.png"
        alt="배너"
        width={1200}
        height={100}
        className="w-full"
      />
      <div className="py-[40px] 2xl:max-w-[1000px] mx-auto relative max-w-[800px]">
        <Toc tocMenu={tocMenu} />
        <div className="flex gap-4">
          <LogoBox img="/img/winterFoodies_logo.png" />
          <Title>윈터푸디스 프로젝트 - 마이그레이션</Title>
        </div>
        <ProjectIntro intro={intro} />
        <div className="mt-[30px]">
          <SubTitle id="heading1">프로젝트 개요</SubTitle>
          <div className="content" id="content1">
            <Callout>
              {`WinterFoodies 프로젝트는 처음으로 React를 이용해 CRUD 기능을 학습해보는 목적으로 시작된 프로젝트였습니다. \n 당시 작성한 코드에는 불필요한 부분이 많았고 백엔드 개발과의 협업도 중간에 멈춘 상태였습니다. \n Nextjs 13 Page router에서 Nextjs 14 App router로 마이그레이션함으로써 코드의 최적화 및 백엔드 API구성 , CI/CD 자동배포를 구성함으로써 프로젝트의 완성도를 높이고자 마이그레이션 하였습니다.`}
            </Callout>
          </div>
        </div>
        <ul className="mt-[40px]">
          <li>
            <SubTitle id="heading2">리팩토링 및 마이그레이션 목표</SubTitle>
          </li>
          <li className="content" id="content2">
            <NumberIndentText>
              1. Next.js 14 App Router로 마이그레이션
            </NumberIndentText>
            <IndentText>
              Next.js 13 Page router에서 App Router로 변경
            </IndentText>
          </li>
          <li>
            <NumberIndentText>2. CI/CD 자동화</NumberIndentText>
            <IndentText>
              도커를 이용하여 AWS ECR에 배포 후 젠킨스를 통해 자동배포를
              설정하여 지속적인 통합과 배포 파이프라인을 구축.
            </IndentText>
          </li>
          <li>
            <NumberIndentText>3. 백엔드 api</NumberIndentText>
            <IndentText>백엔드 서버 Firebase로 마이그레이션</IndentText>
          </li>
          <li>
            <NumberIndentText>4. 코드의 최적화 및 성능 개선</NumberIndentText>
            <IndentText>
              불필요한 코드를 제거하고 최신 기술 스택을 도입하여 성능을 최적화.
            </IndentText>
          </li>
          <li>
            <NumberIndentText>5. API 서버 상태 관리 변경</NumberIndentText>
            <IndentText>
              React Query 에서 SWR로 데이터 페칭 방식을 변경 하여 두
              라이브러리의 차이점 및 장단점에 대해 파악
            </IndentText>
          </li>
        </ul>
        <SubTitle id="heading3">주요 작업 및 변경사항</SubTitle>
        <NumberIndentText strong>
          1. Next.js 13 Page Router → Next.js 14 App Router 마이그레이션
        </NumberIndentText>
        <ul className="dots-list">
          <li className="content" id="content3">
            <IndentText>변경 이유</IndentText>
            <IndentText>
              {`Next.js 14 App Router로의 마이그레이션은 성능 최적화, SEO,데이터 패칭,향상된 라우팅 등 더 나은 트리쉐이킹과 코드스플리팅을 통해 웹 사이트가 더 빠르게 로드되어 사용자 경험을 향상 시킬수 있습니다.`}
            </IndentText>
          </li>
          <li>
            <IndentText>
              14 App Router 마이그레이션 으로 인한 폴더구조 변경
            </IndentText>
            <div className="flex gap-[20px] justify-center my-[25px]">
              <div className="flex flex-col items-center">
                <p>기존 폴더 구조</p>
                <Image
                  src="/img/folder_before.png"
                  alt="폴더구조 마이그레이션 전 사진"
                  width={200}
                  height={150}
                />
              </div>
              <div className="flex flex-col items-center">
                <p>마이그레이션 후 폴더 구조</p>
                <Image
                  src="/img/migration_after_folder.png"
                  alt="폴더구조 마이그레이션 전 사진"
                  width={250}
                  height={150}
                />
              </div>
            </div>
            <IndentText className="dots-list-white">
              기존 폴더구조에서는 pages 폴더 안에 모든 페이지 컴포넌트가
              위치했었습니다. App router 폴더구조에서는 src/app 폴더 안에
              컴포넌트를 위치하도록 적용하고 _app, _document 대신
              layout컴포넌트로 변경하여 적용했습니다.
            </IndentText>
            <IndentText className="dots-list-white">
              로그인 전(beforeLogin)과 로그인 후(afterLogin) 컴포넌트들을
              Grouping Routes로 그룹화하여, URL에 영향을 주지 않으면서 가독성을
              높이고 관리하기 쉽게 변경하였습니다.
            </IndentText>
            <IndentText className="dots-list-white">
              Private Folder 기능을 사용하여 UI관련 로직을 라우팅 로직과
              분리하였습니다. 이로인하여 코드가 더 모듈화 되고 프로젝트 내에서
              내부파일을 일관되게 구성할수 있도록 적용하였습니다.
            </IndentText>
          </li>
        </ul>
        <NumberIndentText strong>2. 데이터 페칭 방식 변경</NumberIndentText>
        <ul className="dots-list">
          <li>
            <IndentText>기존 데이터 페칭 방식</IndentText>
            <IndentText className="dots-list-white">
              훅을 사용하여 다양한 API 요청 처리
            </IndentText>
            <IndentText className="dots-list-white">
              Axios 인스턴스를 생성하고 인증 토큰을 포함한 요청 인터셉터 설정
            </IndentText>
            <IndentText className="dots-list-white">
              React Query를 사용하여 데이터 페칭, 캐싱 ,상태관리 수행
            </IndentText>
            <ToggleBox className="ml-[32px]">
              <div className="flex gap-2">
                <DynamicMDXLoader mdxPath="api-before.mdx" />
                <DynamicMDXLoader mdxPath="api-before2.mdx" />
              </div>
            </ToggleBox>
          </li>
          <li>
            <IndentText>마이그레이션 후 데이터 페칭 방식</IndentText>
            <IndentText className="dots-list-white">
              React Query와 Axios 인터셉터 설정에서 SWR 서버 데이터 상태관리
              라이브러리 로 변경.
            </IndentText>
            <IndentText className="dots-list-white">
              Auth.js 를 이용하여 CredentialsProvider 로그인 처리
            </IndentText>
            <IndentText className="font-semibold dots-list-white">
              <span>
                기존 코드에서 메모리 누수가 발견되었으며, 이러한 원인은
              </span>
              <span>
                Axios 인터셉터를 제대로 해제하지 않았거나 React Query를
                사용하면서 컴포넌트가 언마운트될 때 비동기 요청이 중단되지 않은
                등의 요인으로
              </span>
              <span>
                &nbsp;불필요한 메모리 사용률이 증가된 것으로 파악하였습니다.
              </span>
              <span>
                &nbsp;이러한 이유로, 더 간단한 SWR 라이브러리로 변경하여
              </span>
              <span>
                &nbsp;데이터 페칭 시 코드의 복잡성을 줄이고 메모리 누수 발생
                요인을 감소시켰습니다.
              </span>
            </IndentText>
            <ToggleBox className="ml-[32px]">
              <div className="flex gap-2 mt-[15px]">
                <DynamicMDXLoader mdxPath="api-after.mdx" />
                <DynamicMDXLoader mdxPath="api-after2.mdx" />
              </div>
            </ToggleBox>
          </li>
        </ul>
        <NumberIndentText strong>3. 백엔드 서버</NumberIndentText>
        <LinkLine link="https://github.com/chosule/winter_foodies/commit/51dfcd19cbd8e3adefc02667ba5d337670e928d8">
          <IoLogoGithub />
          전체 코드
        </LinkLine>
        <ul className="dots-list">
          <li>
            <IndentText>서버리스 아키텍쳐 도입</IndentText>
            <IndentText className="dots-list-white">
              Firebase Functions를 이용하여 기존 백엔드 로직을 서버리스 환경으로
              마이그레이션
            </IndentText>
            <IndentText className="dots-list-white">
              <span className="font-semibold">
                Express.js를 사용하여 Node.js 기반의 REST API를 구축.&nbsp;
              </span>
              API 엔드포인트를 설정하고 CORS및 Cookie Parser를 포함한 다양한
              미들웨어를 통합하여 요청 및 응답을 처리
            </IndentText>
          </li>
          <li>
            <IndentText>데이터 베이스 관리</IndentText>
            <IndentText className="dots-list-white">
              사용자 로그인, 회원가입, 주문, 장바구니 등의 데이터를 Firestore
              컬렉션에 저장하고 필요한 CRUD 작업을 하여 약 20개 정도의
              엔드포인트 개발
            </IndentText>
          </li>
          <li>
            <IndentText>데이터 처리</IndentText>
            <IndentText className="dots-list-white">
              특정 좌표 주변의 랜덤한 위치 데이터를 생성하여 지도에 마커로 표시
            </IndentText>
            <IndentText className="dots-list-white">
              이미지 업로드를 위해 Firebase Storage의 bucket을 이용하여 이미지
              저장
            </IndentText>
            <ToggleBox className="ml-[32px]">
              <DynamicMDXLoader mdxPath="firebase-code.mdx" />
            </ToggleBox>
          </li>
        </ul>
        <NumberIndentText className="strong">4. 전역상태관리</NumberIndentText>
        <ul className="dots-list flex flex-col gap-3">
          <li>
            <IndentText>
              기존 전역상태관리 : <span className="font-medium">Recoil</span>
            </IndentText>
            <ToggleBox className="ml-[32px]">
              <DynamicMDXLoader mdxPath="recoil_code.mdx" />
            </ToggleBox>
            <IndentText className="dots-list-white ml-[35px]">
              atom과 selector의 상태를 정의하고 사용하는데 많은 보일러 플레이트
              코드가 필요하였습니다. 또한 상태가 복잡해 지면서 각 atom의
              의존성을 관리하는것이 어려워졌습니다.
            </IndentText>
            <IndentText className="dots-list-white ml-[35px]">
              Recoil에서 비동기 상태를 관리하려면 selector를 통해 비동기 로직을
              구현해야하는데 이에 대한 어려움이 있었고 과정이 복잡하였습니다.
            </IndentText>
            <IndentText className="dots-list-white ml-[35px]">
              여러 컴포넌트에서 같은 atom을 사용하였을때 상태의 일관성을
              유지하는것이 어려워 예상치 못한 동작이 발생해 추적이 어려웠습니다.
            </IndentText>
          </li>
          <li>
            <IndentText>
              마이그레이션 후 변경된 전역상태관리 :{" "}
              <span className="font-medium">Zustand</span>
            </IndentText>
            <ToggleBox className="ml-[32px]">
              <DynamicMDXLoader mdxPath="zustand_code.mdx" />
            </ToggleBox>
            <IndentText className="dots-list-white ml-[35px]">
              Zustand는 설정과 사용이 매우 간단하여 보일러플레이트 코드가 크게
              감소하였습니다.
            </IndentText>
            <IndentText className="dots-list-white ml-[35px]">
              미들웨어를 통해 상태를 로컬 스토리지에 저장하여 영속화 하였습니다.
            </IndentText>
            <IndentText className="dots-list-white ml-[35px]">
              Zustand는 비동기 로직을 더 간단하게 처리할 수 있고 상태 업데이트가
              직관적 입니다.
            </IndentText>
          </li>
        </ul>
        <NumberIndentText className="strong">
          5. CICD - Docker와 Jenkins를 이용한 지속적인 통합 및 배포 파이프라인
          구축
        </NumberIndentText>
        <ul className="dots-list">
          <li>
            <div className="flex gap-1">
              <IndentText>Docker를 사용한 컨테이너화 및 배포</IndentText>
              <LinkLine link="https://github.com/chosule/winter_foodies/blob/main/Dockerfile">
                <IoLogoGithub />
              </LinkLine>
            </div>{" "}
            <IndentText className="dots-list-white">
              마이그레이션 후 Docker를 사용하여 컨테이너화 하였습니다.
            </IndentText>
            <IndentText className="dots-list-white">
              AWS ECR 클러스터를 생성하여 배포하였습니다.
            </IndentText>
            <IndentText className="dots-list-white">
              Docker 컨네이너는 어떠한 환경에서 상관없이 모든 개발환경,
              테스트환경, 프로덕션 환경에서 동일하게 작동 하여 환경간의 일관성을
              보장합니다. 또한 컨테이너 오케스트레이션 도구와 함께 이용하므로써
              애플리케이션의 확장성을 용이하게 관리할수 있다는 이점이 있습니다.
            </IndentText>
          </li>
        </ul>
        <ul className="dots-list">
          <li>
            <div className="flex gap-1">
              <IndentText>Jenkins를 이용한 자동 배포 설정</IndentText>
              <LinkLine link="https://github.com/chosule/winter_foodies/blob/main/Jenkinsfile">
                <IoLogoGithub />
              </LinkLine>
            </div>
            <IndentText>
              Jenkins를 사용하여 지속적인 통합 및 배포 파이프라인을
              구축하였습니다. 코드 변경 사항이 자동으로 빌드, 배포 하도록
              설정하였습니다.
            </IndentText>
          </li>
        </ul>
        <ul>
          <SubTitle id="heading4">마이그레이션 도중 개선사항</SubTitle>
          <div className="content" id="content4">
            <NumberIndentText strong>
              1. 백엔드 메모리 및 타임아웃 설정
            </NumberIndentText>
          </div>
          <ul>
            <li>
              <IndentText className="dots-list-white">
                배경 :&nbsp;
                <span className="code-strong">
                  curl -w &quot;@curl-format.txt&quot; -o /dev/null -s
                  &quot;http://localhost:3000/api&quot;
                </span>{" "}
                명령어를 사용하여 서버 응답 시간의 각 단계를 측정한 결과 서버
                응답 시작 시간(time_starttransfer)이 상대적으로 길게
                측정되었습니다.
              </IndentText>
            </li>
            <li>
              <IndentText className="dots-list-white">
                해결 :&nbsp;
                <span className="font-semibold">
                  Firebase Functions의 메모리 할당을 2GB로 늘리고 타임아웃을
                  120초로 설정하였습니다.
                </span>
              </IndentText>
            </li>
            <li>
              <IndentText className="dots-list-white">
                결과 :서버 응답 시작 시간(time_starttransfer)이 &nbsp;
                <span className="font-semibold">
                  0.679483초에서 0.166999초로 개선
                </span>
                되었습니다. 또한 &nbsp;
                <span className="font-semibold">
                  전체 응답 시간(time_total)이 0.696335초에서 0.179357초로 개선
                </span>
                되었습니다.
              </IndentText>
            </li>
          </ul>
          <NumberIndentText strong>2. 코드 스플리팅</NumberIndentText>
          <NumberIndentText strong>
            3. 도커 이미지 파일 크기 최적화
          </NumberIndentText>
        </ul>
        {/* <SubTitle id="heding5">트러블슈팅</SubTitle>
        <div className="content" id="content5">
          <NumberIndentText className="">
            1. 백엔드 API 이미지 저장
          </NumberIndentText>
        </div>
        <ul className="mb-6">
          <li>
            <IndentText>
              문제: 백엔드 API를 개발하는 과정에서 이미지를 Google Cloud
              Storage에 저장하기 위해 Busboy 스트리밍 파서를 사용하였지만 multipart/form-data 형식으로 파일 업로드 중 Content-Type 과 관련된 에러가 발생
            </IndentText>
            <IndentText>해결: Busboy를 express-multipart-file-parser로 교체하여 설정 단순화 및 에러이슈 발생 해결.  </IndentText>
          </li>
        </ul> */}
        <div>
          <SubTitle id="heading6">마이그레이션 결과</SubTitle>
          <div className="content" id="content6">
            <NumberIndentText className="strong-2">
              1. 상태관리 최적화
            </NumberIndentText>
          </div>
          <ul className="mb-6 dots-list">
            <IndentText>bundle-analyzer 이용</IndentText>
            <li className="flex items-center justify-between">
              <div>
                <IndentText>
                  마이그레이션 전 Recoil 상태관리 라이브러리 파일 크기
                </IndentText>
                <IndentText className="ml-[33px]">
                  {`Stat size: 268.92KB \n Parsed size: 86.54 KB \n Gzipped size: 23.92 KB`}
                </IndentText>
              </div>
              <ImArrowRight className="text-[20px]" />
              <div>
                <IndentText>
                  마이그레이션 후 Zustand 상태관리 라이브러리 파일 크기
                </IndentText>
                <IndentText className="ml-[33px] font-semibold">
                  {`Stat size: 6.21KB \n Parsed size: 3.41 KB \n Gzipped size: 1.42 KB`}
                </IndentText>
              </div>
            </li>
          </ul>
          <NumberIndentText className="strong-2">
            2. 디버그 모드에서 ab 아파치 웹서버 성능 검사 결과
          </NumberIndentText>
          <IndentText>공통 사항 : 50개의 요청을 총 10,000회 테스트</IndentText>
          <ul className="dots-list flex justify-between items-center">
            <li>
              <IndentText>마이그레이션 전 웹서버 성능 검사 결과</IndentText>
              <Image
                src={ab_1}
                alt="ab_1"
                width={250}
                height={100}
                className="ml-[20px]"
              />
              <IndentText>
                {`총 요청 수 : 10,000 \n 동시성 수준 : 50 \n 테스트 시간 : 8.576초 \n 완료된 요청 수 : 10,000 \n 총 전송된 데이터 : 35,160,000 바이트 \n HTML 전송된 데이터 : 32,210,000 바이트 \n 초당 요청 수 : 1,166.00 [#/sec] \n 요청당 평균 시간: 42.882 ms \n 총 전송 속도: 4,003.58 [Kbytes/sec]\n 최대 응답 시간: 203 ms`}
              </IndentText>
            </li>
            <ImArrowRight className="text-[20px]" />
            <li>
              <IndentText>마이그레이션 후 웹서버 성능 검사 결과</IndentText>
              <Image
                src={ab_2}
                alt="ab_2"
                width={250}
                height={100}
                className="ml-[20px]"
              />
              <IndentText>
                {`총 요청 수 : 10,000 \n 동시성 수준 : 50 \n 테스트 시간 : 1.286 초 \n 완료된 요청 수 : 10,000 \n 총 전송된 데이터 : 10,070,000 바이트 \n HTML 전송된 데이터 : 6,340,000 바이트 \n 초당 요청 수 : 7,773.27 [#/sec] \n 요청당 평균 시간: 6.432 ms \n 총 전송 속도: 7,644.22 [Kbytes/sec]\n 최대 응답 시간: 391 ms`}
              </IndentText>
            </li>
          </ul>
          <ul className="dots-list mb-6">
            <li>
              <IndentText>비교결과</IndentText>
              <IndentText className="dots-list-white">초당 요청 수</IndentText>
              <IndentText className="ml-[30px]">
                초당 요청 수가{" "}
                <span className="font-semibold">1,166.00[#/sec]</span> 에서{" "}
                <span className="font-semibold">
                  7,773.27[#/sec] 로 개선율이 566.92% 증가
                </span>{" "}
                하여 서버 처리 능력이 크게 향상 되었습니다.
              </IndentText>
              <IndentText className="dots-list-white">
                요청당 평균 시간
              </IndentText>
              <IndentText className="ml-[30px]">
                요청당 평균 처리 시간이{" "}
                <span className="font-semibold">42.882 ms</span>에서{" "}
                <span className="font-semibold">6.432 ms 으로 85.00% 감소</span>
                하였습니다.
              </IndentText>
              <IndentText className="dots-list-white">총 전송 속도</IndentText>
              <IndentText className="ml-[30px]">
                총 전송 속도가
                <span className="font-semibold">
                  4,003.58 [Kbytes/sec]
                </span>에서{" "}
                <span className="font-semibold">7,644.22 [Kbytes/sec]</span>으로
                90.99% 증가하여 데이터 전송 효율이 향상 되었습니다.
              </IndentText>
            </li>
          </ul>
          <NumberIndentText className="strong-2">
            3. WebPageTest 테스트 및 Lighthouse 결과 비교
          </NumberIndentText>
          <ul className="dots-list flex items-center justify-between">
            {/* <li>
              <IndentText>마이그레이션 전 테스트 결과</IndentText>
              <IndentText>{`페이지 로드시간 : 8.576s \n FCP : 9.298s \n TBT : 1.264s \n LCP : 0.650s \n Lighthouse 성능 점수 : 71점`}</IndentText>
            </li> */}
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="w-1/3 px-4 py-2 border">성능 지표</th>
                  <th className="w-1/3 px-4 py-2 border">
                    마이그레이션 전 측정 값
                  </th>
                  <th className="w-1/3 px-4 py-2 border text-orange-600">
                    마이그레이션 후 측정 값
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">페이지 로드 시간</td>
                  <td className="border px-4 py-2">8.576s</td>
                  <td className="border px-4 py-2 bg-gray-100 font-semibold">
                    1.400s
                  </td>
                </tr>
                <tr className="">
                  <td className="border px-4 py-2">
                    FCP (First Contentful Paint)
                  </td>
                  <td className="border px-4 py-2">9.298s</td>
                  <td className="border px-4 py-2 bg-gray-100 font-semibold">
                    1.364s
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    TBT (Total Blocking Time)
                  </td>
                  <td className="border px-4 py-2">1.264s</td>
                  <td className="border px-4 py-2 bg-gray-100 font-semibold">
                    0.535s
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    LCP (Largest Contentful Paint)
                  </td>
                  <td className="border px-4 py-2">0.960s</td>
                  <td className="border px-4 py-2 bg-gray-100 font-semibold">
                    0.650s
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Lighthouse 성능 점수</td>
                  <td className="border px-4 py-2">71점</td>
                  <td className="border px-4 py-2 bg-gray-100 font-semibold">
                    98점
                  </td>
                </tr>
              </tbody>
            </table>
            {/* <ImArrowRight className="text-[20px]" />
            <li>
              <IndentText>마이그레이션 후 테스트 결과</IndentText>
              <IndentText>{`페이지 로드시간 : 1.400s \n FCP : 1.364s \n TBT : 0.535s \n LCP : 1.364s \n Lighthouse 성능 점수 : 98점`}</IndentText>
            </li> */}
          </ul>
        </div>
        <div>
          <SubTitle id="heading7">서비스 화면</SubTitle>
          <div className="content" id="content7"></div>
        </div>
      </div>
    </div>
  );
}
