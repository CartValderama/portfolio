import React from "react";

type sectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: sectionHeadingProps) {
  return (
    <div>
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        {children}
      </h2>
    </div>
  );
}
