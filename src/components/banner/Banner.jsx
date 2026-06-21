const Banner = () => {
  return (
    <div className="relative w-full h-80 bg-black rounded-3xl overflow-hidden">
      {/* left blue glow */}
      <div className="absolute -left-10 -bottom-10 w-60 h-50 rounded-br-3xl rounded-tr-3xl bg-linear-to-tr from-violet-400 to-blue-400 blur-3xl"></div>

      {/* right pink glow */}
      <div className="absolute -top-10 -right-10 w-60 h-50 rounded-br-3xl rounded-tr-3xl bg-linear-to-bl from-pink-400/80 to-orange-200 blur-3xl"></div>

      {/* center content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mt-3 md:mt-5">
          Beyond Boundaries Beyond Limits
        </p>

        <button
          className="mt-6 md:mt-10 px-5 py-2.5 md:px-8 md:py-4 rounded-xl
    bg-lime-300 text-black font-semibold text-sm md:text-base"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
