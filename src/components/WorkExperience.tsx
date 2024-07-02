import Link from "next/link";
import Title from "./commons/Title";
import IndentText from "./commons/Text";
import LinkLine from "./commons/LinkLine";
const workContents = [
  {
    subTitle: "Description.",
    contents: [
      { id: 1, contentsList: "웹 사이트 제작 및 유지보수" },
      { id: 2, contentsList: "Fe Project 참여" },
    ],
  },
  {
    subTitle: "what did i do.",
    contents: [
      { id: 1, contentsList: "Figma 를 통한 웹사이트 제작 및 유지 보수" },
      { id: 2, contentsList: "javascript , jQuery 애니메이션 구현" },
      { id: 3, contentsList: "css 전역변수 지정하여 공통 스타일 관리" },
      { id: 4, contentsList: "react-hook-form, zod를 이용한 form 제작" },
    ],
  },
];
export default function WorkExperience() {
  return (
    <div>
      <Title title="Work Experience" />
      <div className="flex gap-10">
        <ul>
          <li className="text-xl font-bold">Web Publisher</li>
          <li className="text-md italic text-[#787774]">Nportverse,상암</li>
          <li className="text-md italic text-[#787774]">
            (2022년 03월-2024년 02월)
          </li>
        </ul>
        <div>
          <ul className="mb-[20px]">
            <li className="ml-[-17px]">
              <LinkLine link="https://bankonverse.com/">
                https://bankonverse.com/
              </LinkLine>
            </li>
            <li>
              웹퍼블리셔로 근무하며 웹사이트 제작과 더불어 프론트엔드 백오피스
              개발 참여
            </li>
          </ul>
          <h1 className="text-[1.25em] font-semibold">주요 역할 및 성과</h1>
          <ul className="dots-list">
            <li>
              <IndentText className="main-strong-2">
                bankonverse 비대면 금융플랫폼 웹사이트 제작 및 유지보수
              </IndentText>
              <p className="ml-[22px] font-semibold">반응형 웹 디자인 구현</p>
              <IndentText className="dots-list-white">
                모바일 , 태블릿 , 데스크탑 등 다양한 디바이스에 최적화된
                레이아웃 제작
              </IndentText>
              <p className="ml-[22px] font-semibold">웹 표준 및 접근성</p>
              <IndentText className="dots-list-white">
                W3C 웹 표준을 준수하여 크로스 브라우징 이슈 최소화, ARIA 속성
                사용하여 접근성 향상
              </IndentText>
              <p className="ml-[22px] font-semibold">UI/UX 개선</p>
              <IndentText className="dots-list-white">
                사용자 경험을 고려한 인터랙티브한 UI 요소 구현
              </IndentText>
              <IndentText className="dots-list-white">
                jQuery를 활용하여 다양한 애니메이션 효과 및 이벤트 핸들링 구현
              </IndentText>
              <p className="ml-[22px] font-semibold">코드 최적화</p>
              <IndentText className="dots-list-white">
                CSS및 JavaScript 코드 리팩토링을 통해 페이지 로딩 속도 개선
              </IndentText>
              <p className="ml-[22px] font-semibold">Sass 사용</p>
              <IndentText className="dots-list-white">
                변수, 믹스인, 네스팅 등 Sass 기능을 활용하여 코드의 재사용성을
                높이고 유지보수성 향상
              </IndentText>
            </li>
            <li>
              <IndentText className="main-strong-2">
                백오피스 애플리케이션 Next.js 개발
              </IndentText>
              <p className="ml-[22px] font-semibold">폼 관리 및 유효성 검사</p>
              <IndentText className="dots-list-white">
                react-hook-form 라이브러리 사용하여 각각 입력 컴포넌트가
                독립적으로 업데이트 되도록 관리하여, 불필요한 리렌더링 방지
              </IndentText>
              <IndentText className="dots-list-white">
                zod 스키마를 사용하여 폼 데이터의 유효성 검사를 정의하고,
                resolver 를 통해 react-hook-form 과 통합하여 데이터 검증 및 에러
                메시지 처리를 효율화
              </IndentText>
              <p className="ml-[22px] font-semibold">
                MUI 커스텀 컴포넌트 개발
              </p>
              <IndentText className="dots-list-white">
                Material-UI를 사용하여 대시보드의 주요 UI 컴포넌트 커스터마이징
              </IndentText>
              <IndentText className="dots-list-white">
                createTheme API를 활용하여 색상 팔레트, 타이포그래피
                커스터마이징
              </IndentText>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
