"use client";

import React from "react";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "./CodeBlock";

const components = {
  code: (props: any) => {
    const { className, children } = props;
    return <CodeBlock className={className}>{children}</CodeBlock>;
  },
};

const MDXProviderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MDXProviderWrapper;
