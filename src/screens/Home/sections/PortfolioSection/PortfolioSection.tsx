import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const PortfolioSection = (): JSX.Element => {
  const portfolioProjects = [
    {
      id: 1,
      title: "Analysis Application",
      description:
        "With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
      image: "/card1.png",
      tags: ["FIGMA", "UX"],
    },
    {
      id: 2,
      title: "Fortknox Application",
      description:
        "With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
      image: "/card2.png",
      tags: ["MOBILE", "WEB"],
    },
    {
      id: 3,
      title: "Zenocide Application",
      description:
        "With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
      image: "/card3.png",
      tags: ["APP", "WEB"],
    },
  ];

  return (
    <section className="w-full px-6 md:px-16 lg:px-[100px] py-16 relative">
      <div className="flex flex-col w-full max-w-[1240px] mx-auto gap-8">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <img className="w-[30px] h-8" src="/Star.png" alt="Star icon" />
            <h2 className="text-white text-2xl font-bold font-['Syne',Helvetica]">
              Works
            </h2>
          </div>
          <Button
            variant="link"
            className="text-white text-lg underline font-medium px-0 h-auto font-['Syne',Helvetica]"
          >
            View All
          </Button>
        </div>

        <div className="flex flex-col gap-12">
          {portfolioProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-[#cbcbcb7a] rounded-[40px] overflow-hidden border-none"
            >
              <CardContent className="flex flex-col lg:flex-row gap-8 p-6 md:p-8 relative">
                <div className="hidden md:block absolute w-[209px] h-[165px] top-[291px] left-[515px] bg-app-accent rounded-[104.5px/82.5px] blur-[150px]" />

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full lg:w-[572px] h-[240px] md:h-[360px] lg:h-[429px] object-cover rounded-[32px]"
                />

                <div className="flex-1 flex flex-col justify-between relative min-h-[240px]">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-white text-xl md:text-2xl font-semibold font-['Syne',Helvetica]">
                      {project.title}
                    </h3>

                    <p className="text-white text-sm md:text-base leading-relaxed opacity-90">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="px-5 py-1.5 border-white rounded-full bg-transparent"
                        >
                          <span className="text-white text-xs font-semibold font-['Syne',Helvetica]">
                            {tag}
                          </span>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0">
                    <Button className="px-6 py-3 bg-white text-black text-sm font-semibold rounded-full shadow-inner border border-white hover:bg-white/90 transition">
                      View Case Study
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
