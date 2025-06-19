export const HeroSection = (): JSX.Element => {
  const clientLogos = [
    { id: 1, alt: "Doradesign", src: "/logo1.png" },
    { id: 2, alt: "Wave", src: "/logo2.png" },
    { id: 3, alt: "SIOLLA", src: "/logo3.png" },
  ];

  return (
    <section className="w-full bg-black px-6 md:px-16 lg:px-[100px] py-20 md:py-32 lg:py-20">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-20">

        <div className="text-center space-y-6">
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-4">
            <h1 className="text-white font-extrabold uppercase text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-['Ethnocentric','sans-serif']">
              I AM A
            </h1>
            <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-[18px] overflow-hidden">
              <img src="/hero1.jpg" alt="Highlight" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-white font-extrabold uppercase text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-['Ethnocentric','sans-serif']">
              FREELANCE
            </h1>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-4">
            <h1 className="text-white font-extrabold uppercase text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-['Ethnocentric','sans-serif']">
              DESIGNER
            </h1>
            <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-[18px] overflow-hidden">
              <img src="/hero2.png" alt="Highlight" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-white font-extrabold uppercase text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-['Ethnocentric','sans-serif']">
              FROM
            </h1>
          </div>
          <h1 className="text-white font-extrabold uppercase text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-['Ethnocentric','sans-serif'] mt-4">
            SAN FRANCISCO
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          
          <div className="flex items-center gap-8 md:gap-12 w-full md:w-[50%] justify-center md:justify-start">
            {clientLogos.map((logo) => (
              <img
                key={logo.id}
                src={logo.src}
                alt={logo.alt}
                className="h-6 md:h-8 object-contain"
              />
            ))}
          </div>

          <p className="w-full md:w-[420px] text-white text-sm sm:text-base leading-relaxed tracking-wide text-opacity-80 text-center md:text-left">
            Welcome to my portfolio. Here, artistry meets functionality.
            Dive into a curated showcase of distinctive branding and web
            designs, each crafted to captivate and inspire.
          </p>
        </div>
      </div>
    </section>
  );
};
