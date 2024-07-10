"use client";
import { useState } from "react";
import Title from "./commons/Title";
import {
  HTMLCssContent,
  InfraContent,
  JsContent,
  OverallContent,
  ReactNextContent,
} from "./TechStackContents";

const SKILLS = [
  { id: 1, skills: "React" },
  { id: 2, skills: "Nextjs" },
  { id: 3, skills: "TypeScript" },
  { id: 4, skills: "JavaScript" },
  { id: 5, skills: "HTML/CSS" },
  { id: 6, skills: "TailWindCss" },
  { id: 7, skills: "StyledComponent" },
  { id: 8, skills: "Emotion" },
  { id: 9, skills: "Node.js" },
  { id: 10, skills: "Docker" },
  { id: 11, skills: "Jenkins" },
  { id: 12, skills: "AWS" },
  { id: 13, skills: "Figma" },
];

const TABMENU = [
  { name: "Overall.", content: <OverallContent /> },
  { name: "HTML/CSS.", content: <HTMLCssContent /> },
  { name: "JavaScript.", content: <JsContent /> },
  { name: "React/Nextjs.", content: <ReactNextContent /> },
  { name: "Infra", content: <InfraContent /> },
];
export default function TechStack() {
  return (
    <div>
      <Title title="Skill" />
      <ul className="flex gap-2 pb-16 flex-wrap w-[70%]">
        {SKILLS.map((item) => (
          <li
            key={item.id}
            className="py-1 px-2 border rounded-2xl text-sm border-orange-400"
          >
            {item.skills}
          </li>
        ))}
      </ul>
      <ul className="flex gap-3 flex-col">
        {TABMENU.map((item, index) => (
          <li key={index} className="pb-4">
            <h3 className="font-semibold text-2xl">{item.name}</h3>
            <div>{item.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
