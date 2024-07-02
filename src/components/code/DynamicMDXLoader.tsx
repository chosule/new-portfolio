"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import MDXProviderWrapper from "./MDXProviderWrapper";

interface DynamicMDXLoaderProps {
  mdxPath: string;
}

const DynamicMDXLoader: React.FC<DynamicMDXLoaderProps> = ({ mdxPath }) => {
  const MDXContent = dynamic(() => import(`@/mdx/${mdxPath}`));

  return (
    <div>
      <MDXProviderWrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <MDXContent />
        </Suspense>
      </MDXProviderWrapper>
    </div>
  );
};

export default DynamicMDXLoader;
