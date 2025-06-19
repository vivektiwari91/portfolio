import { Card, CardContent } from "../../../../components/ui/card";

const experienceData = [
  {
    position: "Lead Product Designer",
    company: "Fortknox",
    period: "Mar 2022 - Oct 2023",
  },
  {
    position: "Intern Designer",
    company: "OmniSafe",
    period: "Mar 2022 - Oct 2023",
  },
  {
    position: "UI Designer",
    company: "Doradesign",
    period: "Mar 2022 - Oct 2023",
  },
  {
    position: "Frontend Developer",
    company: "OpacityAuthor",
    period: "Mar 2022 - Oct 2023",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full px-6 md:px-16 lg:px-[100px] py-16 bg-black">
      <div className="max-w-[1240px] w-full mx-auto flex flex-col gap-8 items-center">
        
        <div className="flex items-center gap-2 w-full">
          <img className="w-[30px] h-8" src="/Star.png" alt="Star" />
          <h2 className="font-heading-h3-bold text-white text-[length:var(--heading-h3-bold-font-size)] tracking-[var(--heading-h3-bold-letter-spacing)] leading-[var(--heading-h3-bold-line-height)] [font-style:var(--heading-h3-bold-font-style)]">
            Experience
          </h2>
        </div>

        <Card className="w-full bg-transparent border-none">
          <CardContent className="p-0 space-y-4">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-white/30"
              >
                <h3 className="font-heading-h4 text-white text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)] mb-2 md:mb-0">
                  {item.position}
                </h3>

 
                <div className="text-right md:text-left">
                  <h4 className="font-heading-h5 text-white text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                    {item.company}
                  </h4>
                  <p className="font-body-base-regular text-white text-opacity-80 text-[length:var(--body-base-regular-font-size)] tracking-[var(--body-base-regular-letter-spacing)] leading-[var(--body-base-regular-line-height)] [font-style:var(--body-base-regular-font-style)]">
                    {item.period}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
