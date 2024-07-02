export type Intro = {
  intro: { title: string; text?: string; skills?: string }[];
};
export default function ProjectIntro({ intro }: Intro) {
  return (
    <>
      <div className="flex flex-col gap-2 border-b py-[30px]">
        {intro.map((item, i) => (
          <div key={`item${i}`} className="project-intro-grid">
            <h1 className="text-md text-[#7d7c78]">{item.title}</h1>
            <div>
              {item.text ? (
                <p className="text-md">{item.text}</p>
              ) : (
                <div className="flex gap-2 flex-wrap">
                  {item.skills?.split(",").map((skill) => (
                    <p className="bg-[#f1f0f0] w-fit py-[2px] px-1 rounded-md text-sm">
                      {skill}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
