const Register = () => {
  return (
    <div className="relative w-150">
      <img
        className="object-cover object-center"
        src="/src/assets/membership/png/register-img.png"
        alt=""
      />
      <button
        className="absolute bottom-22.75 left-53 font-euclid font-semibold text-[2rem] text-white bg-[#4E33EC] rounded-sm px-12 py-5 -translate-x-1/2 translate-y-1/2"
        style={{
          boxShadow: `
      inset -6px -6px 3px rgba(0,0,0,0.25),
      inset 6px 6px 3px rgba(255,255,255,0.25),
      0 14px 15px rgba(0,0,0,0.15)
    `,
        }}
      >
        Register Now
      </button>
    </div>
  );
};

export default Register;
