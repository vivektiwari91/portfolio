import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const TestimonialSection = (): JSX.Element => {
  const testimonialData = {
    title: "What they say",
    testimonial: {
      author: "Floyd Miles",
      company: "eBay",
      quote:
        "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
    },
  };

  return (
    <section className="w-full px-6 md:px-16 lg:px-[100px] py-16">
      <div className="flex flex-col max-w-[1240px] mx-auto gap-8">

        <div className="flex items-center gap-2">
          <img src="/Star.png" alt="Star" className="w-[30px] h-8" />
          <h3 className="text-white text-2xl md:text-3xl font-bold font-['Syne',Helvetica]">
            {testimonialData.title}
          </h3>
        </div>

        <Card className="bg-transparent border-none shadow-none w-full">
          <CardContent className="flex flex-col md:flex-row gap-8 p-0">

            <div className="flex flex-col gap-4 w-full md:w-[400px]">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage
                    src="/test.png"
                    alt={testimonialData.testimonial.author}
                  />
                  <AvatarFallback>
                    {testimonialData.testimonial.author.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <h5 className="text-white text-lg font-semibold">
                    {testimonialData.testimonial.author}
                  </h5>
                  <p className="text-gray-400 text-base">
                    {testimonialData.testimonial.company}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex-1">
              <img
                src="/quote.png"
                alt="Quote Icon"
                className="absolute top-[-30px] left-0 w-[90px] h-[75px] opacity-20"
              />
              <blockquote className="relative z-10 text-white text-lg md:text-2xl font-medium leading-relaxed">
                {testimonialData.testimonial.quote}
              </blockquote>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center gap-4 pt-4">
          <Button className="w-10 h-10 p-0 rounded-full bg-white text-black hover:bg-white/80">
            <ArrowLeft size={20} />
          </Button>
          <Button className="w-10 h-10 p-0 rounded-full bg-white text-black hover:bg-white/80">
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};
