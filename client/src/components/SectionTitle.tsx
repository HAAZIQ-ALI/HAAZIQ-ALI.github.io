import React from "react";

interface SectionTitleProps {
  icon: string;
  title: string;
}

export default function SectionTitle({ icon, title }: SectionTitleProps) {
  return (
    <h2 className="text-2xl font-bold mb-6 flex items-center">
      <i className={`${icon} text-hypr-accent mr-2`}></i> {title}
    </h2>
  );
}
