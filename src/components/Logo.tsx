import React from "react";

const Logo = ({ className = "", light = false }: { className?: string; light?: boolean }) => {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <div className={`text-4xl font-bold leading-none tracking-tighter flex items-center gap-0.5 ${light ? "text-white" : "text-primary"}`}>
        <span>i</span>
        <div className="relative">
          <span>v</span>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full" />
        </div>
        <div className="relative">
          <span className="inline-block border-4 border-current rounded-full w-8 h-8 flex items-center justify-center -mb-1">
            <div className="w-4 h-4 rounded-full border-2 border-current border-dotted" />
          </span>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full" />
        </div>
        <span>m</span>
        <div className="relative">
          <span className="inline-block border-4 border-current rounded-full w-8 h-8 flex items-center justify-center -mb-1">
            <div className="w-4 h-4 rounded-full border-2 border-current border-dotted" />
          </span>
        </div>
      </div>
      <span className={`text-[10px] uppercase tracking-[0.2em] font-medium mt-1 ${light ? "text-white/70" : "text-primary/70"}`}>
        Sharing Culture, Coming Together
      </span>
    </div>
  );
};

export default Logo;
