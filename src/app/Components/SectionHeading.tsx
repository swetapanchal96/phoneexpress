import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  className,
}) => {
  return (
    <div className={`text-center mb-10 ${className ?? ""}`}>
      <h2 className="text-[25px] sm:text-4xl font-semibold text-[#333333] relative inline-block section-title">
        {title}
        <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-16 h-[3px] bg-[#FF7A2D] rounded-full"></span>
      </h2>
      {subtitle && (
        <p className="text-gray-600 mt-4 text-sm sm:text-base">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
