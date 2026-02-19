"use client";

import { useState, useEffect } from "react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`
      text-center mb-12
      transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
    `}>
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
        {title.split(" ").map((word, idx) => 
          idx === 1 ? <span key={idx} className="text-[#ED0724]">{word}</span> : <span key={idx}>{word} </span>
        )}
      </h1>
      <p className="text-[#A8AAAD] text-lg max-w-2xl mx-auto">{subtitle}</p>
      <div className="mt-6 w-20 h-1 bg-[#ED0724] mx-auto rounded-full" />
    </div>
  );
}