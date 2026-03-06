import React, { useState, useEffect, useRef } from "react";
import FunkyButton from "./FunkyButton";
import CallIcon from "./icons/CallIcon";
import { useLenis } from "lenis/react";
import { Download, Menu, X, Phone } from "lucide-react";
import FunkyColorButton from "./FunkyColorButton";
import { motion, AnimatePresence } from "motion/react";
import BrochureDropdown from "./BrochureDropdown";

// Navigation links derived from the list on the left side of the original screen
const navLinks = [
  { label: "About", sectionClass: ".why-section-class" },
  { label: "Problems", sectionClass: ".problem-statement-class" },
  { label: "Events", sectionClass: ".events-class" },
  { label: "Timeline", sectionClass: ".timeline-class" },
  { label: "Sponsors", sectionClass: ".sponsors-coming-soon-class" },
  { label: "FAQ", sectionClass: ".faq-class" },
];

const FixedNavbar: React.FC = () => {
  const lenis = useLenis();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only apply the scroll-direction logic after scrolling down 200px
      if (currentScrollY > 200) {
        if (currentScrollY > lastScrollY.current) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionClass: string) => {
    lenis?.scrollTo(sectionClass, { offset: 0, duration: 1.2 });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop navbar: scroll-triggered show/hide (md and up) */}
      <nav
        className={`hidden md:block fixed top-0 left-0 w-full z-[5000] bg-white transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="flex mx-auto max-w-[95rem] px-6 py-4 items-center justify-between">
          <img src="/logo.svg" alt="Synchronicity" className="h-7" />

          <div className="flex w-[70vw] justify-between">
            {navLinks.map((link) => (
              <FunkyButton
                key={link.label}
                variant="blackText"
                onClick={() => handleNavClick(link.sectionClass)}
              >
                {link.label}
              </FunkyButton>
            ))}

            <FunkyColorButton
              color1="black"
              color2="#155DFC"
              icon={<CallIcon size={16} />}
              onClick={() => lenis?.scrollTo(".footer-class")}
              className="font-euclid px-6 py-2"
            >
              Contact Us
            </FunkyColorButton>

            <BrochureDropdown variant="desktop">
              <FunkyColorButton
                color1="black"
                color2="#155DFC"
                icon={<Download size={19} strokeWidth={2.3} />}
                className="font-euclid px-6 py-2"
              >
                Event Brochure
              </FunkyColorButton>
            </BrochureDropdown>
          </div>
        </div>
      </nav>

      {/* Mobile top bar: ALWAYS visible (< md) */}
      <div className="md:hidden fixed top-0 left-0 w-full z-[5000] bg-white/95 backdrop-blur-md shadow-sm">
        <div className="flex items-center justify-between px-6 py-3">
          <div
            className="cursor-pointer"
            onClick={() => {
              lenis?.scrollTo(0, { duration: 1.2 });
              setIsMobileMenuOpen(false);
            }}
          >
            <img src="/logo.svg" alt="Synchronicity" className="h-5" />
          </div>

          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-60 w-10 h-10 flex items-center justify-center text-[#155DFC]"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[4999]"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm z-[5001] backdrop-blur-3xl bg-white/95 shadow-2xl border-l border-gray-200"
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-8">
                {/* Close button */}
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-[#155DFC]"
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>

                <nav className="flex flex-col gap-2 flex-1">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.label}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.08, duration: 0.3 }}
                      whileHover={{
                        x: 8,
                        backgroundColor: "rgba(21, 93, 252, 0.08)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleNavClick(link.sectionClass)}
                      className="text-left px-6 py-4 rounded-xl text-[#155DFC] uppercase text-sm font-medium tracking-wide transition-colors"
                    >
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                        className="inline-block"
                      >
                        {link.label}
                      </motion.span>
                    </motion.button>
                  ))}
                </nav>

                <div className="flex flex-col gap-3 mt-6">
                  <motion.button
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      lenis?.scrollTo(".footer-class");
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-[#155DFC] hover:bg-[#1048cc] text-white rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <span>Contact Us</span>
                    <Phone className="w-4 h-4" />
                  </motion.button>
                  <BrochureDropdown variant="mobile">
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.45, duration: 0.3 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#155DFC] hover:bg-[#1048cc] text-white rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <span>Download Brochure</span>
                      <Download className="w-4 h-4" />
                    </motion.div>
                  </BrochureDropdown>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FixedNavbar;
