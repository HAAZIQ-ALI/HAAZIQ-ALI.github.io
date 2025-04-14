import React from "react";

interface Stat {
  icon: string;
  text: string;
  color?: string;
}

interface CommunityCardProps {
  icon: string;
  title: string;
  description: string;
  stats: Stat[];
  linkText: string;
  linkUrl: string;
}

export default function CommunityCard({
  icon,
  title,
  description,
  stats,
  linkText,
  linkUrl
}: CommunityCardProps) {
  return (
    <div className="bg-hypr-sidebar rounded-lg p-6 border border-hypr-border">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <i className={`${icon} text-hypr-accent mr-2`}></i> {title}
      </h3>
      <p className="mb-4 text-hypr-text/80">{description}</p>
      <div className="flex flex-wrap gap-2">
        {stats.map((stat, index) => (
          <span key={index} className="bg-hypr-bg px-2 py-1 rounded-md text-xs flex items-center">
            <i className={`${stat.icon} mr-1 ${stat.color || ''}`}></i> {stat.text}
          </span>
        ))}
      </div>
      <div className="mt-5">
        <a
          href={linkUrl}
          className="inline-block bg-hypr-bg hover:bg-hypr-bg/70 px-4 py-2 rounded-md text-sm transition"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
}
