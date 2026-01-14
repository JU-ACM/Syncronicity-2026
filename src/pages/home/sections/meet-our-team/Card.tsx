import React from "react";

const Card = ({ name, role, bio, github, linkedin, image }) => {
  return (
    <div
      className="
        w-full h-[394px] flex flex-col items-center 
        px-5 py-6 gap-3
        text-slate-800
        transition-all hover:scale-[1.02]
        bg-[linear-gradient(135deg,#FFFFFF_0%,#5CE1E6_100%)]
      "
      style={{
        maskImage: "url('/card-svg.svg')",
        maskRepeat: "no-repeat",
        maskSize: "100% 100%",
        WebkitMaskImage: "url('/card-svg.svg')",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
      }}
    >
      {/* Avatar */}
      <div className="w-24 h-24 bg-white/30 rounded-full overflow-hidden flex items-center justify-center border border-white/50 shrink-0">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="text-3xl font-bold text-cyan-800 font-['Unbounded']">
            {name.charAt(0)}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="text-center space-y-1">
        <h3 className="text-lg font-bold tracking-tight font-['Unbounded'] leading-tight">
          {name || "Full Name"}
        </h3>
        <h4 className="text-xs font-semibold text-cyan-700 font-['Unbounded']">
          {role || "Designation"}
        </h4>
      </div>

      {/* Bio */}
      <p className="text-[10px] text-center leading-[1.4] text-slate-700 font-['Unbounded'] px-2 overflow-hidden">
        {bio || "The team has passionate and diligent people who are eager to create opportunities for everyone."}
      </p>

      {/* Socials */}
      <div className="flex gap-4 mt-auto mb-2">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img
              src="/github.svg"
              alt="GitHub"
              className="w-5 h-5"
            />
          </a>
        )}

        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img
              src="/linkedin.svg"
              alt="LinkedIn"
              className="w-5 h-5"
            />
          </a>
        )}
      </div>

    </div>
  );
};

export default Card;