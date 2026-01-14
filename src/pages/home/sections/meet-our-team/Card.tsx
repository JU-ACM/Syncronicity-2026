import React from "react";
import { Github, Linkedin } from "lucide-react";

const Card = ({ name, role, bio, github, linkedin }) => {
  return (
    <div
      className="
        w-full flex flex-col items-center
        p-6 sm:p-8 gap-4
        text-slate-800
        shadow-2xl transition-all hover:shadow-3xl
        bg-[linear-gradient(135deg,#FFFFFF_0%,#5CE1E6_100%)]
      "
      style={{
        WebkitMaskImage: "url('/card-svg.svg')",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskImage: "url('/card-svg.svg')",
        maskRepeat: "no-repeat",
        maskSize: "100% 100%",
      }}
    >
      {/* Avatar */}
      <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg flex items-center justify-center text-3xl sm:text-4xl font-bold text-white">
        {name.charAt(0)}
      </div>

      {/* Name */}
      <div className="text-center space-y-1">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
          {name}
        </h1>
        <h2 className="text-base sm:text-lg font-medium text-cyan-600">
          {role}
        </h2>
      </div>

      {/* Bio */}
      <p className="text-xs sm:text-sm text-center leading-relaxed text-slate-600">
        {bio || "Passionate professional dedicated to excellence and innovation in their field."}
      </p>

      {/* Icons */}
      <div className="flex gap-4 mt-2">
        {github && (
          <a
            href={github}
            className="p-3 bg-slate-800 hover:bg-cyan-600 rounded-full transition-all shadow-md hover:scale-110"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            className="p-3 bg-slate-800 hover:bg-cyan-600 rounded-full transition-all shadow-md hover:scale-110"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
