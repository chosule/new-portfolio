type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  return (
    <div className="mb-16  mt-24 title relative">
      <span className="text-[39px] font-bold italic">{title}</span>
      <span className="text-6xl text-neutral-orange">.</span>
    </div>
  );
}
