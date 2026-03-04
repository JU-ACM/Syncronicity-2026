import React from 'react';
// Asset Imports
import insta from '../../../../assets/footer/insta-icon.svg';
import face from '../../../../assets/footer/facebook-icon.svg';
import github from '../../../../assets/footer/github-icon.svg';
import linkedin from '../../../../assets/footer/linkedin-icon.svg';
import call from '../../../../assets/footer/call-icon.svg';
import mail from '../../../../assets/footer/mail-icon.svg';
import robot from '../../../../assets/footer/robot.png';

// Component & Icon Imports
import SendMessageCard from '../../../../../components/Form';
import { MapPin, Phone, Mail as MailIcon } from "lucide-react";

const Footer = () => {
  const links = ["About", "Events", "Our Team", "Subscriptions", "Contact Us", "FAQs"];
  
  // Mapping for clean iteration over social imports
  const socialIcons = [
    { src: mail, alt: "Email" },
    { src: linkedin, alt: "LinkedIn" },
    { src: face, alt: "Facebook" },
    { src: insta, alt: "Instagram" },
    { src: github, alt: "GitHub" }
  ];

  return (
    <footer className="bg-[#e0eff8] w-full">
      {/* 1. Contact/Form Section */}
      <section className="py-16 px-8 md:px-24 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full max-w-md">
          <SendMessageCard />
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-extrabold text-black">Get in touch</h2>
          <p className="text-gray-700 leading-relaxed max-w-sm">
            Have questions about membership, events, or collaborations? Reach out to the Jadavpur University ACM Student Chapter and we'll get back to you.
          </p>
          
          <div className="space-y-4 text-black">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium">Jadavpur University, Saltlake, Sector IV, Bidhannagar, West Bengal-700098</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium">+91 987 654 3210</span>
            </div>
            <div className="flex items-center gap-4">
              <MailIcon className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium">unofficial0101acmju@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Robot & Links Section */}
      <div className="container mx-auto px-8 pb-12 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Left: About */}
        <div className="md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-3xl font-black mb-4">acm</h2>
          <p className="text-xs text-gray-700 leading-tight mb-6">
            The Jadavpur University ACM Student Chapter is an official student chapter affiliated with the Association for Computing Machinery, dedicated to fostering learning, innovation, and professional growth in computing.
          </p>
          <div className="flex justify-center md:justify-start gap-3">
            {socialIcons.map((social, index) => (
              <img 
                key={index} 
                src={social.src} 
                alt={social.alt} 
                className="w-6 h-6 cursor-pointer hover:opacity-75 transition-opacity"
              />
            ))}
          </div>
        </div>

        {/* Center: Robot */}
        <div className="md:w-1/3 flex justify-center">
          <img src={robot} alt="ACM Mascot" className="w-64 md:w-80 object-contain" />
        </div>

        {/* Right: Quick Links */}
        <div className="md:w-1/4 mt-8 md:mt-0">
          <h3 className="text-2xl font-bold mb-1">Quick Links</h3>
          <hr className="border-black border-t-2 mb-4 w-full" />
          <ul className="space-y-2 text-sm font-semibold">
            {links.map((link) => (
              <li key={link} className="cursor-pointer hover:text-sky-500 transition-colors">{link}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 3. Bottom Copyright */}
      <div className="bg-black text-white text-[10px] py-2 text-center">
        © ACM-JU - Official ACM Student Chapter - Jadavpur University
      </div>
    </footer>
  );
};

export default Footer;