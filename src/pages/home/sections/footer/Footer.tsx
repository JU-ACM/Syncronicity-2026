import Robot from "../../../../assets/footer/robot.webp";
import insta from "../../../../assets/footer/insta-icon.svg";
import linkedin from "../../../../assets/footer/linkedin-icon.svg";
import mail from "../../../../assets/footer/mail-icon.svg";

import SendMessageCard from "../../../../../components/Form";

import { MapPin, Mail } from "lucide-react";
import { useLenis } from "lenis/react";
import PrimaryColoredLogo from "../../../../../components/icons/PrimaryColoredLogo";
import { motion } from "framer-motion";

export default function ContactSection() {
  const lenis = useLenis();

  // Helper function to handle scrolling cleanly
  const handleScroll = (targetClass: string) => {
    const allMatches = document.querySelectorAll(targetClass);
    const visibleTarget = Array.from(allMatches).find(
      (el) => (el as HTMLElement).offsetParent !== null
    ) as HTMLElement | undefined;

    lenis?.scrollTo(visibleTarget ?? targetClass, {
      offset: 0,
      duration: 1.2,
    });
  };

  return (
    <section className="footer-class relative pt-40 w-full bg-linear-to-br from-[#eef7fb] to-[#b7dbe8]">

      {/* ================= TOP SECTION (Form & Contact Info) ================= */}
      <div className="mx-auto max-w-6xl flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start gap-12 lg:gap-20 py-16 lg:py-20 px-6 lg:px-10">

        {/* Left: Send Message Card */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <SendMessageCard />
        </div>

        {/* Right: Get in touch Information */}
        <div className="w-full lg:w-1/2 max-w-lg text-center lg:text-left flex flex-col justify-center h-full">
          {/* Font kept exactly as requested for "Get in touch" */}
          <p className="text-6xl lg:text-6xl font-bounded text-blue-600 mb-4">
            Get in touch
          </p>

          <p className="text-sm lg:text-base text-gray-700 font-euclid leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
            Have questions about the hackathon? We’re here to help! Whether it’s about registration, rules, schedules, or anything else, feel free to reach out to us.
          </p>

          {/* Contact Details */}
          <div className="space-y-5 text-sm lg:text-base text-black font-euclid">
            <div className="flex items-start gap-4 justify-center lg:justify-start">
              <MapPin className="w-6 h-6 shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                Jadavpur University, Saltlake,<br />
                Sector IV, Bidhannagar,<br />
                West Bengal - 700098
              </span>
            </div>

						<a href="https://chat.whatsapp.com/EDrVN7pZGgaJRC8Wa3eqYa?mode=gi_t" target="_blank" rel="noopener noreferrer" className="text-black">
            <div className="flex items-center gap-4 justify-center lg:justify-start">
						<svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
							<path fill="#000000" d="M16.6 14c-.2-.1-1.5-.7-1.7-.8c-.2-.1-.4-.1-.6.1c-.2.2-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5c.1-.1.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4c-.1-.1-.6-1.3-.8-1.8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3c-.6.6-.9 1.3-.9 2.1c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"></path>
						</svg>
              <span>Join Whatsapp Group</span>
            </div>
						</a>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <Mail className="w-5 h-5 shrink-0" />
              <span>acmjustudentchapter@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FOOTER SECTION (Logo, Links & Socials) ================= */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-12 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-12">

          {/* Left: Logo & Description */}
          <div className="text-black max-w-sm text-center lg:text-left mx-auto lg:mx-0">
            <div className="flex justify-center lg:justify-start mb-4">
              <PrimaryColoredLogo size={200} />
            </div>

            <p className="text-sm font-euclid leading-relaxed opacity-90 mb-6">
              To stay updated with all hackathon announcements, resources, and important notices, make sure you are connected with us on the platforms listed below.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start items-center gap-5">
              <a href="mailto:acmjustudentchapter@gmail.com">
                <img src={mail} alt="Email" className="w-5 hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/company/jadavpur-university-acm-student-chapter/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="w-5 hover:scale-110 transition-transform" />
              </a>
              {/* <a href="#">
                <img src={face} alt="Facebook" className="w-5 hover:scale-110 transition-transform" />
              </a> */}
              <a href="https://www.instagram.com/acm.ju?igsh=ZzVhMXpnbnlocno3" target="_blank" rel="noopener noreferrer">
                <img src={insta} alt="Instagram" className="w-5 hover:scale-110 transition-transform" />
              </a>
              {/* <a href="#">
                <img src={call} alt="Call" className="w-5 hover:scale-110 transition-transform" />
              </a> */}
              {/* <a href="#">
                <img src={github} alt="GitHub" className="w-5 hover:scale-110 transition-transform" />
              </a> */}
            </div>
          </div>

          {/* Middle: Robot Graphic (Hidden on Mobile/Tablet) */}
          <div className="hidden lg:flex justify-center items-end h-full">
            <motion.img
              src={Robot}
              alt="Friendly Robot"
              className="absolute w-80 xl:w-120 -mb-12 origin-bottom"
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
            />
          </div>

          {/* Right: Quick Links */}
          <div className="text-black text-center lg:text-right mx-auto lg:mx-0 lg:ml-auto">
            <h3 className="text-2xl lg:text-3xl font-unbounded font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 font-euclid text-sm lg:text-base flex flex-col items-center lg:items-end">
              {['Home', 'Why Us', 'Problem Statement', 'Statistics', 'Events', 'Timeline', 'FAQs'].map((item, index) => {
                // Map the labels to their respective target classes
                const targets = [
                  '.hero-class', '.why-section-class', '.problem-statement-class',
                  '.stats-class', '.events-class', '.timeline-class', '.faq-class'
                ];

                return (
                  <li key={item}>
                    <button
                      onClick={() => handleScroll(targets[index])}
                      className="hover:underline hover:text-blue-600 transition-colors cursor-pointer bg-transparent border-none p-0"
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="bg-[#0b0b0b] py-5 text-center text-xs tracking-wide text-gray-400 font-euclid">
        © ACM-JU · Official ACM Student Chapter · Jadavpur University
      </div>
    </section>
  );
}
