import React from "react";

interface ShowcaseCardProps {
  index: number;
  title: string;
  description: string;
}

export default function ShowcaseCard({ index, title, description }: ShowcaseCardProps) {
  // Use placeholder images that represent Linux desktop environments
  const imageUrls = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg"
  ];

  return (
    <div className="bg-hypr-sidebar rounded-lg overflow-hidden border border-hypr-border">
      <div className="w-full aspect-video bg-slate-700 flex items-center justify-center">
        <img
          src={imageUrls[index % imageUrls.length]}
          alt={title}
          className="w-24 h-24 object-contain opacity-30"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-hypr-text/70">{description}</p>
      </div>
    </div>
  );
}
