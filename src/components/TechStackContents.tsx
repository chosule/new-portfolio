import IndentText from "./commons/Text";

const OverallContent = () => {
  return (
    <ul className="dots-list">
      <li>
        <IndentText className="">
          처음 접해보는 기술이더라도 WHY? 부터 적극적으로 탐색해서 원하는
          결과물을 도출 해냅니다.
        </IndentText>
      </li>
      <li>
        <IndentText>
          사용자 경험에 맞는 플로우를 구성하여 비즈니스 로직을 작성할 수
          있습니다.
        </IndentText>
      </li>
      <li>
        <IndentText>
          항상 적극적인 자세로 스프린트를 통해 점진적으로 개발 및 개선 할 수
          있습니다.
        </IndentText>
      </li>
    </ul>
  );
};

const JsContent = () => {
  return (
    <ul className="dots-list">
      <li>
        <IndentText>
          ES6 모듈 시스템을 사용하여 코드의 재사용성을 높이고 유지 보수성을
          개선합니다.
        </IndentText>
      </li>
      <li>
        <IndentText>
          TypeScript를 사용하여 JavaScript코드에 정적 타입을 도입하여 유지
          보수성을 높입니다.
        </IndentText>
      </li>
      <li>
        <IndentText>
          비동기 처리 메커니즘을 이해하고, Promise와 async/await를 사용하여
          비동기 코드를 작성합니다.
        </IndentText>
      </li>
    </ul>
  );
};

const ReactNextContent = () => {
  return (
    <ul className="dots-list">
      <li>
        <IndentText>
          React hooks를 사용하고 custom hook으로 공통 로직을 모듈화해 사용할 수
          있습니다.
        </IndentText>
      </li>
      <li>
        <IndentText>
          적절한 상황에서 useCallback, useMemo를 사용한 최적화가 가능합니다.
        </IndentText>
      </li>
      <li>
        <IndentText>SSR/SSG에 대해 이해하고 있습니다.</IndentText>
      </li>
      <li>
        <IndentText>
          서버 컴포넌트/클라이언트 컴포넌트에 대해 이해하고 적절히 사용합니다.
        </IndentText>
      </li>
    </ul>
  );
};

const HTMLCssContent = () => {
  return (
    <ul className="dots-list">
      <li>
        <IndentText>
          시멘틱 태그에 대해 이해하며 시맨틱한 마크업을 할 수 있습니다.
        </IndentText>
      </li>
      <li>
        <IndentText>웹 접근성에 대해 이해하고 있습니다.</IndentText>
      </li>
      <li>
        <IndentText>
          반응형, 크로스 브라우징에 대해 이해하고 있습니다.
        </IndentText>
      </li>
    </ul>
  );
};

const InfraContent = () => {
  return (
    <ul className="dots-list">
      <li>
        <IndentText>
          AWS의 다양한 서비스와 통합하여 유연한 애플리케이션 아키텍처를 설계 할
          수 있습니다.
        </IndentText>
      </li>
      <li>
        <IndentText>
          AWS EC2 인스턴스를 사용하여 가상 서버 환경을 설정하고 Nginx를 사용하여
          포트 포워딩을 설정하였습니다.
        </IndentText>
      </li>
      <li>
        <IndentText>
          AWS ECR을 사용하여 Docker 컨테이너 이미지를 저장, 관리 및 배포한
          경험이 있습니다.
        </IndentText>
      </li>
      <li>
        <IndentText>
          Docker를 사용하여 애플리케이션을 컨테이너화하고, 일관된 개발 및 배포
          환경을 제공한 경험이 있습니다.
        </IndentText>
      </li>
      <li>
        <IndentText>
          Jenkins를 활용하여 CI/CD 파이프라인을 구축하고 자동화된 빌드, 테스트,
          배포를 구현한 경험이 있습니다.
        </IndentText>
      </li>
      <li>
        <IndentText>
          GitHub Actions를 사용하여 코드 변경 시 자동으로 빌드 및 테스트를
          실행하도록 설정하였습니다.
        </IndentText>
      </li>
    </ul>
  );
};
export {
  OverallContent,
  JsContent,
  HTMLCssContent,
  ReactNextContent,
  InfraContent,
};
