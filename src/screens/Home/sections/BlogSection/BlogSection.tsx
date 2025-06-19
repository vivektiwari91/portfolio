import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const blogPosts = [
  {
    id: 1,
    date: "Nov 9, 2023",
    title: "How UX works in web",
    image: "/card1.png",
    tags: ["UI", "UX"],
  },
  {
    id: 2,
    date: "Aug 18, 2023",
    title: "Case study - Analysis Application.",
    image: "/card2.png",
    tags: ["DESIGN", "PRINT"],
  },
  {
    id: 3,
    date: "Feb 16, 2023",
    title: "3 ways to develop your skill",
    image: "/card3.png",
    tags: ["FIGMA", "WEB"],
  },
];

export const BlogSection = (): JSX.Element => {
  return (
    <section className="w-full px-6 md:px-16 lg:px-[100px] py-16">
      <div className="flex flex-col max-w-[1240px] mx-auto gap-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/Star.png" alt="Star" className="w-[30px] h-8" />
            <h2 className="text-white text-2xl md:text-3xl font-bold font-['Syne',Helvetica]">
              Blog
            </h2>
          </div>
          <Button
            variant="link"
            className="text-white text-lg font-medium underline p-0 h-auto"
          >
            view all
          </Button>
        </div>
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="w-full bg-transparent border-none shadow-none"
          >
            <CardContent className="flex flex-col sm:flex-row gap-6 p-0 w-full">
              <div className="flex flex-col sm:flex-row gap-6 w-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full sm:w-[286px] h-auto sm:h-[214px] object-cover rounded-[16px]"
                />

                <div className="flex flex-col gap-4 flex-1">
                  <p className="text-gray-400 text-sm font-medium">
                    {post.date}
                  </p>
                  <h3 className="text-white text-xl md:text-2xl font-semibold font-['Syne',Helvetica]">
                    {post.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="px-4 py-1.5 rounded-full border border-white text-white text-xs font-semibold"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-auto">
                <Button className="bg-white text-black text-sm font-semibold px-8 py-3 rounded-full border border-white hover:bg-white/90 transition-all w-full sm:w-auto">
                  Read
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
