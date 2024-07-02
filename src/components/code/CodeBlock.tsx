"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  children: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  const language = className?.replace(/language-/, "") || "";
  return (
    <SyntaxHighlighter
      language={language}
      style={prism}
      customStyle={{ fontSize: "8px" }}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
