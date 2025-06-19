import { Card, CardContent } from "../../../../components/ui/card";

const expertiseData = [
  {
    title: "Branding",
    icon: "/frame-2.svg",
    iconWidth: "w-2",
    iconHeight: "h-[7px]",
    description:
      "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
  },
  {
    title: "UI Design",
    icon: "/frame-2.svg",
    iconWidth: "w-2",
    iconHeight: "h-[7px]",
    description:
      "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
  },
  {
    title: "UX Design",
    icon: "/frame-2.svg",
    iconWidth: "w-2",
    iconHeight: "h-[7px]",
    description:
      "I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements.",
  },
  {
    title: "Development",
    icon: "/frame-2.svg",
    iconWidth: "w-2",
    iconHeight: "h-[7px]",
    description:
      "I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my web development approach. I employ it to produce safe, top-notch personalized websites.",
  },
];

export const ExpertiseSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start px-6 md:px-16 lg:px-[100px] py-16 w-full">
      <div className="flex flex-col max-w-[1240px] items-center justify-end gap-8 w-full mx-auto">
        <header className="flex items-center gap-2 w-full">
          <img className="w-8 h-8" alt="Star" src="/Star.png" />
          <h2 className="font-heading-h3-bold font-[number:var(--heading-h3-bold-font-weight)] text-white text-[length:var(--heading-h3-bold-font-size)] tracking-[var(--heading-h3-bold-letter-spacing)] leading-[var(--heading-h3-bold-line-height)] [font-style:var(--heading-h3-bold-font-style)]">
            Expertise
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 w-full">
          {expertiseData.map((item, index) => (
            <Card key={index} className="bg-transparent border-0">
              <CardContent className="flex flex-col items-start gap-4 p-0">
                <div className="flex items-center gap-2">
                  <img
                    className={`${item.iconWidth} ${item.iconHeight}`}
                    alt="Icon"
                    src={item.icon}
                  />
                  <h3 className="font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-white text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)] break-words">
                    {item.title}
                  </h3>
                </div>
                <p className="font-body-base-regular font-[number:var(--body-base-regular-font-weight)] text-gray text-[length:var(--body-base-regular-font-size)] tracking-[var(--body-base-regular-letter-spacing)] leading-[var(--body-base-regular-line-height)] [font-style:var(--body-base-regular-font-style)] text-wrap">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
