// 들어가야할 목차
// 1. 프로젝트 사진
// 2. 프로젝트 이름과 왜 하게 됐는지
// 3. 기여도
// 4. 트러블슈팅
// 5. 적용기술 , 왜 이걸 적용했는지
// 6. 어떤거 적용햇는지 react,next...
// 7. 관련 블로그 링크
// 8. 프로젝트 인원
// 상단에 portfolio 랑 블로그 링크 달기

import PropjectsNavBar from "@/components/commons/PropjectLInkBar";
import { getProjects } from "@/service/projects";

export default async function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const getProjectData = await getProjects();
  return (
    <div>
      <PropjectsNavBar projectData={getProjectData} />
      <div>{children}</div>
    </div>
  );
}
