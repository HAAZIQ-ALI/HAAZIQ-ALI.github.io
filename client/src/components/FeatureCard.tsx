import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-hypr-sidebar rounded-lg p-5 border border-hypr-border hover:border-hypr-accent/50 transition-colors">
      <div className="text-hypr-accent text-xl mb-3">
        <i className={icon}></i>
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-hypr-text/80 text-sm">{description}</p>
    </div>
  );
}
