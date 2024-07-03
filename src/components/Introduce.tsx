"use client";
import Image from "next/image";
import avatar from "../../public/img/avatar.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useReward } from "react-rewards";

export default function Introduce() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.to(".arrow", {
        y: "+=10",
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: "power2.inOut",
      });
    },
    { scope: container }
  );
  const { reward, isAnimating } = useReward("rewardId", "confetti", {
    angle: 400,
    position: "absolute",
    startVelocity: 20,
    spread: 300,
    elementCount: 150,
    lifetime: 150,
  });

  useEffect(() => {
    reward();
  }, [reward]);

  return (
    <div className="flex flex-col gap-8 relative h-screen">
      <div
        className="relative h-[120px] sm:h-[240px] "
        onClick={isAnimating ? undefined : reward}
      >
        <Image
          src={avatar}
          alt="아바타"
          width={250}
          className="cursor-pointer"
        />
        <div className="absolute top-[140px] left-[200px]">
          <span id="rewardId" />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-6xl whitespace-pre-line leading-[1.3] font-bold">{`반갑습니다. \n 저는 김초슬입니다.`}</h1>
        <p className="text-4xl whitespace-pre-line leading-[1.3]">
          {` 2년간 웹퍼블리셔로 경력을 쌓았습니다. \n이를 통해 웹사이트의 구조와디자인을 이해하고 사용자 경험을 개선하기 위한 다양한 기술을 익혔습니다.`}
        </p>
        <p className="text-4xl whitespace-pre-line main-strong">
          {` 레이아웃에서부터 세부적인 디자인까지, 코드에 제 생각을 담아내는 것이 즐겁습니다. \n 사용자 경험과 웹성능에 효과적이고 효율적인 코드에 대해 항상 고민합니다.`}
        </p>
      </div>
      <div ref={container} className="container flex justify-center">
        <RiArrowDropDownLine className="text-7xl arrow" />
      </div>
    </div>
  );
}
