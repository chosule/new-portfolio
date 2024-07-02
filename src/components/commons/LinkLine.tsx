import Link from "next/link";

type Props = {
  link: string;
  children: React.ReactNode;
  className?: string;
};
export default function LinkLine({ link, children, className }: Props) {
  return (
    <Link
      href={link}
      className={`underline-offset-3 underline text-[#858585] flex gap-1 items-center pl-[17px] ${className}`}
    >
      {children}
    </Link>
  );
}
