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
      (el) => (el as HTMLElement).offsetParent !== null,
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
            Have questions about the hackathon? We’re here to help! Whether it’s
            about registration, rules, schedules, or anything else, feel free to
            reach out to us.
          </p>

          {/* Contact Details */}
          <div className="space-y-4 text-sm lg:text-base text-black font-euclid">
            {/* 1. Address Block */}
            <div className="flex items-start gap-4 justify-center lg:justify-start">
              <MapPin className="w-6 h-6 shrink-0 mt-1" />
              <span className="leading-relaxed text-left">
                Jadavpur University, Saltlake,
                <br />
                Sector IV, Bidhannagar,
                <br />
                West Bengal - 700098
              </span>
            </div>

            {/* 2. WhatsApp Block */}
            <a
              href="https://chat.whatsapp.com/EDrVN7pZGgaJRC8Wa3eqYa?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#24cc62", textDecoration: "underline" }}
              className="hover:opacity-50 transition-opacity block w-full"
            >
              <div className="flex items-end gap-4 justify-center lg:justify-start">
                {/* Changed SVG width/height to perfectly match MapPin (24px) */}
                <svg className="w-6.5 h-6.5 shrink-0 mt-1" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M16.6 14c-.2-.1-1.5-.7-1.7-.8c-.2-.1-.4-.1-.6.1c-.2.2-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5c.1-.1.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4c-.1-.1-.6-1.3-.8-1.8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3c-.6.6-.9 1.3-.9 2.1c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"
                  ></path>
                </svg>
                {/* Added leading-relaxed and text-left for consistent text rendering */}
                <span className="font-medium leading-relaxed text-center">
                  Join Whatsapp Group
                </span>
              </div>
            </a>

            {/* 3. Mail Block */}
            <a
              href="mailto:acmjustudentchapter@gmail.com"
              className="flex items-start gap-4 justify-center lg:justify-start hover:opacity-50 transition-opacity text-black cursor-pointer"
            >
              <svg
                viewBox="0 0 32 32"
                fill="#000000"
                className="w-6 h-6 shrink-0 mt-1"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z"
                    fill="#ea4435"
                  ></path>
                  <path
                    d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z"
                    fill="#00ac47"
                    transform="translate(53.0001 32.0007) rotate(180)"
                  ></path>
                  <path
                    d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z"
                    fill="#ffba00"
                  ></path>
                  <path
                    d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z"
                    fill="#4285f4"
                  ></path>
                  <path
                    d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z"
                    fill="#c52528"
                  ></path>
                </g>
              </svg>
              {/* Optional: Add font-medium if you want the email text to have the same weight as the WhatsApp text */}
              <span className="leading-relaxed text-left break-all lg:break-normal font-medium underline">
                acmjustudentchapter@gmail.com
              </span>
            </a>
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
              To stay updated with all hackathon announcements, resources, and
              important notices, make sure you are connected with us on the
              platforms listed below.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start items-center gap-5">
              <a
                href="mailto:acmjustudentchapter@gmail.com"
                className="hover:opacity-50 transition-opacity w-8 h-8"
              >
                <svg viewBox="0 0 32 32" fill="#000000">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z"
                      fill="#ea4435"
                    ></path>
                    <path
                      d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z"
                      fill="#00ac47"
                      transform="translate(53.0001 32.0007) rotate(180)"
                    ></path>
                    <path
                      d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z"
                      fill="#ffba00"
                    ></path>
                    <path
                      d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z"
                      fill="#4285f4"
                    ></path>
                    <path
                      d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z"
                      fill="#c52528"
                    ></path>
                  </g>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/jadavpur-university-acm-student-chapter/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-50 transition-opacity w-8 h-8"
              >
                <svg
                  viewBox="-2.16 -2.16 28.32 28.32"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill="#0077B5"
                      fill-rule="evenodd"
                      d="M20.45175,20.45025 L16.89225,20.45025 L16.89225,14.88075 C16.89225,13.5525 16.86975,11.844 15.04275,11.844 C13.191,11.844 12.90825,13.2915 12.90825,14.7855 L12.90825,20.45025 L9.3525,20.45025 L9.3525,8.997 L12.765,8.997 L12.765,10.563 L12.81375,10.563 C13.2885,9.66225 14.4495,8.71275 16.18125,8.71275 C19.78575,8.71275 20.45175,11.08425 20.45175,14.169 L20.45175,20.45025 Z M5.33925,7.4325 C4.1955,7.4325 3.27375,6.50775 3.27375,5.36775 C3.27375,4.2285 4.1955,3.30375 5.33925,3.30375 C6.47775,3.30375 7.4025,4.2285 7.4025,5.36775 C7.4025,6.50775 6.47775,7.4325 5.33925,7.4325 L5.33925,7.4325 Z M7.11975,20.45025 L3.5565,20.45025 L3.5565,8.997 L7.11975,8.997 L7.11975,20.45025 Z M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,22.9995 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,22.9995 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0 L23.00025,0 Z"
                    ></path>{" "}
                  </g>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/acm.ju?igsh=ZzVhMXpnbnlocno3"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-50 transition-opacity w-8 h-8"
              >
                <svg viewBox="0 0 32 32" fill="none">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="6"
                      fill="url(#paint0_radial_87_7153)"
                    ></rect>{" "}
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="6"
                      fill="url(#paint1_radial_87_7153)"
                    ></rect>{" "}
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="6"
                      fill="url(#paint2_radial_87_7153)"
                    ></rect>{" "}
                    <path
                      d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                      fill="white"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                      fill="white"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                      fill="white"
                    ></path>{" "}
                    <defs>
                      {" "}
                      <radialGradient
                        id="paint0_radial_87_7153"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                      >
                        {" "}
                        <stop stop-color="#B13589"></stop>{" "}
                        <stop offset="0.79309" stop-color="#C62F94"></stop>{" "}
                        <stop offset="1" stop-color="#8A3AC8"></stop>{" "}
                      </radialGradient>{" "}
                      <radialGradient
                        id="paint1_radial_87_7153"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                      >
                        {" "}
                        <stop stop-color="#E0E8B7"></stop>{" "}
                        <stop offset="0.444662" stop-color="#FB8A2E"></stop>{" "}
                        <stop offset="0.71474" stop-color="#E2425C"></stop>{" "}
                        <stop
                          offset="1"
                          stop-color="#E2425C"
                          stop-opacity="0"
                        ></stop>{" "}
                      </radialGradient>{" "}
                      <radialGradient
                        id="paint2_radial_87_7153"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                      >
                        {" "}
                        <stop
                          offset="0.156701"
                          stop-color="#406ADC"
                        ></stop>{" "}
                        <stop offset="0.467799" stop-color="#6A45BE"></stop>{" "}
                        <stop
                          offset="1"
                          stop-color="#6A45BE"
                          stop-opacity="0"
                        ></stop>{" "}
                      </radialGradient>{" "}
                    </defs>{" "}
                  </g>
                </svg>
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
                damping: 15,
              }}
            />
          </div>

          {/* Right: Quick Links */}
          <div className="text-black text-center lg:text-right mx-auto lg:mx-0 lg:ml-auto">
            <h3 className="text-2xl lg:text-3xl font-unbounded font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 font-euclid text-sm lg:text-base flex flex-col items-center lg:items-end">
              {[
                "Home",
                "Why Us",
                "Problem Statement",
                "Statistics",
                "Events",
                "Timeline",
                "FAQs",
              ].map((item, index) => {
                // Map the labels to their respective target classes
                const targets = [
                  ".hero-class",
                  ".why-section-class",
                  ".problem-statement-class",
                  ".stats-class",
                  ".events-class",
                  ".timeline-class",
                  ".faq-class",
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
