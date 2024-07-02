type Props = {
  children: React.ReactNode;
};

export default function VisualBox({ children }: Props) {
  return (
    <p className="p-1 w-max bg-neutral-blue rounded-md text-xs font-[500]">
      {children}
    </p>
  );
}
