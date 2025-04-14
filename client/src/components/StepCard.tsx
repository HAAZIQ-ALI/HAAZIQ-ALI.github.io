import React from "react";

interface StepCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function StepCard({ icon, title, description }: StepCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-14 h-14 rounded-full bg-hypr-accent/20 flex items-center justify-center text-hypr-accent text-2xl mb-4">
        <i className={icon}></i>
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-hypr-text/70">{description}</p>
    </div>
  );
}
