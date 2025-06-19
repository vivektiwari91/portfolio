import { ExternalLinkIcon } from "lucide-react";
import React from "react";

const bannerItems = [
  { text: "WEBFLOW", hasStarAfter: true },
  { text: "FIGMA", hasStarAfter: true },
  { text: "DESIGNER", hasStarAfter: true },
  { text: "DEVELOPER", hasStarAfter: false },
];

const socialLinks = [
  { name: "Dribbble", url: "#" },
  { name: "Behance", url: "#" },
  { name: "Twitter", url: "#" },
  { name: "Instagram", url: "#" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="bg-dark w-full text-white px-6 sm:px-8 md:px-16 lg:px-[100px] pt-16 pb-16">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center w-full">
        
        <div className="w-full overflow-x-auto scrollbar-hide py-4">
          <div className="flex items-center justify-start sm:justify-center gap-6 sm:gap-10 min-w-max">
            {bannerItems.map((item, index) => (
              <React.Fragment key={index}>
                <div className="text-transparent font-bold text-3xl sm:text-4xl md:text-[56px] leading-tight whitespace-nowrap [-webkit-text-stroke:2px_#cacaca]">
                  {item.text}
                </div>
                {item.hasStarAfter && (
                  <div className="w-10 h-10 sm:w-14 sm:h-14 flex-shrink-0 relative">
                    <img
                      src="/Star.png"
                      alt="Star"
                      className="w-full h-full object-contain absolute"
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center text-center w-full px-4 mt-12 gap-6">
          <h2 className="text-4xl sm:text-5xl md:text-[var(--heading-h1-font-size)] font-bold">
            LET&apos;S TALK!
          </h2>
          <div className="flex items-center gap-2 justify-center flex-wrap">
            <a
              href="mailto:rehanurraihan@gmail.com"
              className="text-sm sm:text-base underline hover:text-gray transition"
            >
              rehanurraihan@gmail.com
            </a>
            <ExternalLinkIcon className="w-4 h-4 text-white" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-12 px-4 gap-4 border-t border-white/20 pt-6 text-center">
          <p className="text-xs sm:text-sm font-light">
            © Rehan Raihan - 2023
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-sm hover:text-gray transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
