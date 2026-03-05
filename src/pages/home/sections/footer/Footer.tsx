import Robot from "../../../../assets/footer/robot.png";
import insta from "../../../../assets/footer/insta-icon.svg";
import face from "../../../../assets/footer/facebook-icon.svg";
import github from "../../../../assets/footer/github-icon.svg";
import linkedin from "../../../../assets/footer/linkedin-icon.svg";
import call from "../../../../assets/footer/call-icon.svg";
import mail from "../../../../assets/footer/mail-icon.svg";

import SendMessageCard from "../../../../../components/Form";

import { MapPin, Phone, Mail } from "lucide-react";
import { useLenis } from "lenis/react"; // 1. Import useLenis

export default function ContactSection() {
  const lenis = useLenis(); // 2. Initialize Lenis

  // Helper function to handle scrolling cleanly
  const handleScroll = (targetClass: string) => {
    lenis?.scrollTo(targetClass, {
      offset: 0,
      duration: 1.2,
    });
  };

  return (
    <section className="footer-class relative w-full bg-linear-to-br from-[#eef7fb] to-[#b7dbe8]">
      {/* ================= TOP SECTION ================= */}

      <div className="mx-auto max-w-6xl flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12 lg:gap-16 py-16 lg:py-20 px-6 lg:px-10">
        {/* Send Message Card */}
        <SendMessageCard />

        {/* Get in touch */}
        <div className="max-w-lg text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bounded font-bold text-black mb-3">
            Get in touch
          </h2>

          <p className="text-sm lg:text-base text-gray-700 font-bold leading-relaxed mb-6 max-w-sm mx-auto lg:mx-0">
            Have questions about membership, events, or collaborations? Reach
            out to the Jadavpur University ACM Student Chapter and we’ll get
            back to you.
          </p>

          <div className="space-y-4 text-sm text-black">
            <div className="flex items-start gap-3 justify-center lg:justify-start">
              <MapPin className="w-5 h-5 mt-1" />
              <span>
                Jadavpur University, Saltlake,
                <br />
                Sector IV, Bidhannagar,
                <br />
                WestBengal-700098
              </span>
            </div>

            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <Phone className="w-5 h-5" />
              +91 987 654 3210
            </div>

            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <Mail className="w-5 h-5" />
              unofficial01acmju@gmail.com
            </div>
          </div>
        </div>
      </div>

      {/* ================= FOOTER SECTION ================= */}

      <div className="w-full px-6 lg:px-10 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12">
          {/* LEFT */}
          <div className="text-black max-w-sm text-center lg:text-left lg:justify-self-start">
            <img
              src="/logo.svg"
              alt="ACM JU Logo"
              className="h-10 lg:h-12 mb-4 mx-auto lg:mx-0"
            />

            <p className="text-sm leading-relaxed font-unbounded opacity-90">
              The Jadavpur University ACM Student Chapter is an official student
              chapter affiliated with the Association for Computing Machinery,
              dedicated to fostering learning, innovation, and professional
              growth.
            </p>

            <div className="flex justify-center lg:justify-start items-center gap-4 mt-4">
              <a href="mailto:unofficial01acmju@gmail.com">
                <img src={mail} className="w-5 hover:scale-110 transition" />
              </a>

              <a href="#">
                <img
                  src={linkedin}
                  className="w-5 hover:scale-110 transition"
                />
              </a>

              <a href="#">
                <img src={face} className="w-5 hover:scale-110 transition" />
              </a>

              <a href="#">
                <img src={insta} className="w-5 hover:scale-110 transition" />
              </a>

              <a href="#">
                <img src={call} className="w-5 hover:scale-110 transition" />
              </a>

              <a href="#">
                <img src={github} className="w-5 hover:scale-110 transition" />
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <img
              src={Robot}
              alt="Robot"
              className="w-100 drop-shadow-xl -mb-10"
            />
          </div>

          {/* RIGHT QUICK LINKS */}
          <div className="text-black max-w-sm text-center lg:text-left lg:ml-auto lg:justify-self-end">
            <h3 className="text-2xl lg:text-3xl font-euclid font-bold mb-4">
              Quick Links
            </h3>

            {/* Replaced <a> tags with <button> tags to utilize onClick natively without # page jumps */}
            <ul className="space-y-2 font-montserrat text-sm flex flex-col items-center lg:items-start">
              <li>
                <button 
                  onClick={() => handleScroll('.hero-class')} 
                  className="hover:underline !text-black cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScroll('.why-section-class')} 
                  className="hover:underline !text-black cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Why Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScroll('.problem-statement-class')} 
                  className="hover:underline !text-black cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Problem Statement
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScroll('.stats-class')} 
                  className="hover:underline !text-black cursor-pointer bg-transparent border-none p-0 text-left"
                >
                 Statistics
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScroll('.events-class')} 
                  className="hover:underline !text-black cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Events
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScroll('.timeline-class')} 
                  className="hover:underline !text-black cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Timeline
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScroll('.faq-class')} 
                  className="hover:underline !text-black cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}

      <div className="bg-black py-4 text-center text-xs text-white">
        © ACM-JU · Official ACM Student Chapter · Jadavpur University
      </div>
    </section>
  );
}
