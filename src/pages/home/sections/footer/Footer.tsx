
import Robot from '../../../../assets/footer/robot.png'
import insta from '../../../../assets/footer/insta-icon.svg'
import face from '../../../../assets/footer/facebook-icon.svg'
import github from '../../../../assets/footer/github-icon.svg'
import linkedin from '../../../../assets/footer/linkedin-icon.svg'
import call from '../../../../assets/footer/call-icon.svg'
import mail from '../../../../assets/footer/mail-icon.svg'
import SendMessageCard from '../../../../../components/Form'
import {
  MapPin,
  Phone,
  Mail,
 
} from "lucide-react";


export default function ContactSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#eef7fb] to-[#b7dbe8]  ">

      {/* ================= TOP SECTION ================= */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-13 items-start py-20 px-10">

        {/* Left: Form */}
        <SendMessageCard />

        {/* Right: Get in touch */}
        <div className="max-w-md">
          <h2 className="text-4xl font-extrabold text-black mb-3">
            Get in touch
          </h2>

          <p className="text-sm text-gray-700 font-bold leading-relaxed mb-6">
            Have questions about membership,<br />
            events, or collaborations? Reach out<br />
            to the Jadavpur University ACM<br />
            Student Chapter and we’ll get back<br />
            to you.
          </p>

          <div className="space-y-4 text-sm text-black">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1" />
              <span>
                Jadavpur University, Saltlake,<br />
                Sector IV, Bidhannagar,<br />
                WestBengal-700098
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              +91 987 654 3210
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              unofficial01acmju@gmail.com
            </div>
          </div>
        </div>
      </div>

      {/* ================= ROBOT ================= */}
      {/* <div className="mt-20 flex justify-center">
        <img
          src={Robot}
          alt="Robot"
          className="w-64 md:w-80 drop-shadow-xl"
        />
      </div>

      
      <div className="mx-auto mt-20 max-w-6xl grid grid-cols-1 md:grid-cols-2 items-start">

        
        <div>
          <h3 className="text-xl font-bold lowercase mb-2">acm</h3>
          <p className="text-xs text-gray-700 max-w-sm leading-relaxed mb-4">
            The Jadavpur University ACM Student
            Chapter is an official student chapter
            affiliated with the Association for
            Computing Machinery, dedicated to
            fostering learning, innovation, and
            professional growth in computing.
          </p>

          <div className="flex gap-4 text-black">
            <Linkedin className="w-5 h-5 cursor-pointer" />
            <Facebook className="w-5 h-5 cursor-pointer" />
            <Instagram className="w-5 h-5 cursor-pointer" />
            <X className="w-5 h-5 cursor-pointer" />
            <Github className="w-5 h-5 cursor-pointer" />
          </div>
        </div>

       
        <div className="text-left md:text-right">
          <h3 className="text-xl font-bold mb-3">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>About</li>
            <li>Events</li>
            <li>Our Team</li>
            <li>Subscriptions</li>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div> */}
      <div className="max-w-7xl mx-auto px-6 ">
  <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12">
    
    {/* LEFT — ACM */}
    <div className="text-black max-w-sm">
      <h3 className="text-3xl font-bold mb-4">acm</h3>
      <p className="text-sm leading-relaxed opacity-90">
        The Jadavpur University ACM Student Chapter is an official student
        chapter affiliated with the Association for Computing Machinery,
        dedicated to fostering learning, innovation, and professional growth.
      </p>
      <div className="flex items-center gap-4 mt-2">
    <a href="mailto:unofficial01acmju@gmail.com">
      <img src={mail} className="w-5 hover:scale-110 transition" />
    </a>

    <a href="#">
      <img src={linkedin} className="w-5 hover:scale-110 transition" />
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

    {/* CENTER — ROBOT */}
    <div className="flex justify-center">
      <img
        src={Robot}
        alt="Robot"
        className="w-56 lg:w-64"
      />
    </div>

    {/* RIGHT — QUICK LINKS */}
    <div className="text-black max-w-sm ml-auto">
      <h3 className="text-3xl font-bold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li className="hover:underline cursor-pointer">About</li>
        <li className="hover:underline cursor-pointer">Events</li>
        <li className="hover:underline cursor-pointer">Our Team</li>
        <li className="hover:underline cursor-pointer">Subscriptions</li>
        <li className="hover:underline cursor-pointer">Contact Us</li>
        <li className="hover:underline cursor-pointer">FAQs</li>
      </ul>
    </div>

  </div>
</div>


      {/* ================= FOOTER ================= */}
      <div className=" bg-black py-4 text-center text-xs text-white">
        © ACM-JU · Official ACM Student Chapter · Jadavpur University
      </div>
    </section>
  );
}