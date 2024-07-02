import Image from "next/image";

type Props = {
  img: string;
};
export default function LogoBox({ img }: Props) {
  return (
    <div className="bg-[#fff] py-3 px-2 border rounded-md w-fit">
      <Image src={img} alt="로고" width={50} height={50} />
    </div>
  );
}
