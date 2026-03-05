import React from "react";

function Description({className = ""}): React.JSX.Element {
  return (
    <div className={` ${className} absolute lg:w-70 w-50 text-black font-euclid lg:text-base md:text-sm text-center md:text-left`}>
      ACM-JU is a student-run technical community focused on learning beyond
      textbooks. We organize workshops, seminars, coding events, and flagship
      programs to help students explore real-world computing, professional
      growth—while staying connected to a global ecosystem.
    </div>
  );
}

export default Description;
