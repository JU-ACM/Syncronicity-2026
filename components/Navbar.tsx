import React from "react";
import { ChevronDown } from "lucide-react";
import FunkyButton from "./FunkyButton";
import CallIcon from "./icons/CallIcon";
import { useLenis } from "lenis/react";
import BrochureDropdown from "./BrochureDropdown";
import PrimaryMonoWhiteLogo from "../components/icons/PrimaryMonoWhiteLogo";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const lenis = useLenis();

  return (
    <nav className={`w-full bg-transparent pt-4 pb-0 px-8 z-500 ${className} `}>
      <div className="max-w-screen-2xl mx-auto pt-3 items-center justify-between hidden md:flex ">
        {/* Logo */}
        <div className="cursor-pointer">
          <PrimaryMonoWhiteLogo size={200} />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {/* Contact Us Button */}
          <FunkyButton
            variant="blue"
            icon={<CallIcon size={16} />}
            onClick={() => lenis?.scrollTo(".footer-class")}
          >
            Contact Us
          </FunkyButton>

          {/* Download Brochure Button */}
          <BrochureDropdown variant="desktop">
            <FunkyButton
              variant="blue"
              icon={<ChevronDown size={19} strokeWidth={2.3} />}
            >
              Download Brochure
            </FunkyButton>
          </BrochureDropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
