import React from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface TestimonialProps {
  title: string;
  content: string;
  author: string;
  role: string;
  avatarUrl: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  title,
  content,
  author,
  role,
  avatarUrl,
}) => (
  <section id="Testimonials" className="bg-white p-8 rounded-xl space-y-6">
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold text-blue-500 ">{title}</h3>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
    </div>

    <blockquote className="text-gray-600 text-lg">"{content}"</blockquote>

    <div className="flex items-center gap-4 pt-4 border-t">
      <img
        src={avatarUrl}
        alt={author}
        className="w-12 h-12 rounded-full object-cover grayscale"
      />
      <div>
        <div className="font-semibold text-zinc-800">{author}</div>
        <div className="text-gray-500 text-sm">{role}</div>
      </div>
    </div>
  </section>
);

const Testimonials: React.FC = () => {
  const Testimonials = [
    {
      title: "Superb!",
      content:
        "Professional and efficient—removed asbestos tiles without disrupting our family routine.",
      author: "Sarah M",
      role: "Homeowner",
      avatarUrl: "/images/testimonial-1.jpg",
    },
    {
      title: "Nice work!",
      content:
        "Fast response saved us—reopened quickly with no recurrence in 2 years.",
      author: "CRobert C",
      role: " Restaurant Owner",
      avatarUrl: "/images/testimonial-2.jpg",
    },
    {
      title: "Excellent!",
      content:
        "Quick, safe lead removal—gave us the documentation needed for licensing.",
      author: "John Williamson",
      role: "Daycare Director",
      avatarUrl: "/images/testimonial-3.jpg",
    },
    {
      title: "Impressive!",
      content:
        "Handled complex soil remediation with expertise and regulatory care.",
      author: "David T",
      role: " Construction Manager",
      avatarUrl: "/images/testimonial-4.jpg",
    },
    {
      title: "Amazing",
      content:
        "Handled school asbestos removal with care—passed all inspections easily.",
      author: "Jennifer W",
      role: " School Admin",
      avatarUrl: "/images/testimonial-5.jpg",
    },
    {
      title: "Great Job!",
      content:
        "Impressive containment and air quality control in a sensitive hospital area.",
      author: "Jark S ",
      role: "Hospital Director",
      avatarUrl: "/images/testimonial-6.jpg",
    },
  ];

  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-10 lg:px-10 w-full mb-10 mt-10 ">
      <p className="flex text-center gap-3 w-fit  justify-center items-center mx-auto px-3 py-1 border border-green-300 rounded-2xl bg-white text-zinc-500 text-sm md:text-base">
        <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse "></span>
        Customers
      </p>
      <h1 className="text-xl md:text-3xl my-3 font-bold text-gray-900 text-center">
        We have changed the game —hear it from our customers
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center leading-relaxed">
        Environmental remediation, demolition, and transportation services real
        stories <br /> from people who we served.
      </p>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {Testimonials.map((Testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard {...Testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
      </Carousel>
    </div>
  );
};

export default Testimonials;
