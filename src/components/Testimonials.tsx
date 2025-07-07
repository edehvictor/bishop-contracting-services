import React from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface TestimonialProps {
  title: string;
  content: string;
  role: string;
  avatarUrl: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  title,
  content,
  role,
  avatarUrl,
}) => (
  <section id="testimonial" className="bg-white p-8 rounded-xl space-y-6">
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold text-blue-500 font-grotesk">
        {title}
      </h3>
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
        className="w-12 h-12 rounded-full object-cover grayscale"
      />
      <div>
        <div className="text-gray-500 text-sm">{role}</div>
      </div>
    </div>
  </section>
);

const Testimonial: React.FC = () => {
  const testimonial = [
    {
      title: "Truly Professional!",
      content:
        "Their remediation service was efficient. We had asbestos concerns and they handled everything with precison",

      role: "Facilities Manager, Katmax Corp",
      avatarUrl: "/images/testimonial-1.jpg",
    },
    {
      title: "Highly Recommended!",
      content:
        "The selective demolition project went smooth. The team maintained structural integrity.",

      role: "Co-Founder, EcoWorks",
      avatarUrl: "/images/testimonial-2.jpg",
    },
    {
      title: "Exceptional Work!",
      content:
        "From site cleanup to material transport, they delivered fast and safe results. Exceptional work indeed. ",

      role: "Architect, UrbanLine",
      avatarUrl: "/images/testimonial-3.jpg",
    },
    {
      title: "Top Notch Team!",
      content:
        "They came in for a last-minute hazmat transport request and delivered beyond expectations.",

      role: "Facilities Manager, Katmax Corp",
      avatarUrl: "/images/testimonial-4.jpg",
    },
    {
      title: "Stress-Free Process!",
      content:
        "Coordinating a demolition inside an active facility was challenging—but they did it without disrupting operations.",
      role: "Project Manager, RebuildCo",
      avatarUrl: "/images/testimonial-5.jpg",
    },
    {
      title: "Clean & Efficient!",
      content:
        "Their team handled debris removal with such organization. They made a chaotic site look brand new in a matter of days.",
      role: "Lead Designer, ModConstruct",
      avatarUrl: "/images/testimonial-6.jpg",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="text-center flex flex-col justify-center items-center mb-10">
        <p className="flex justify-center items-center gap-3 w-fit mx-auto md:mx-0 px-3 py-1 text-center border border-green-300 rounded-2xl bg-white text-zinc-500 mb-5 text-sm md:text-base">
          <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
          Customer Reviews
        </p>
        <h2 className="text-xl md:text-3xl my-1 font-bold text-gray-900 text-center">
          What Our Clients Are Saying
        </h2>
        <p className="text-gray-500 mt-1 max-w-xl">
          Hear from clients who’ve trusted us for environmental remediation,
          demolition, and transportation.
        </p>
      </div>

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
          {testimonial.map((testimony, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard {...testimony} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="hidden md:flex" /> */}
        {/* <CarouselNext className="hidden md:flex" /> */}
      </Carousel>
    </div>
  );
};

export default Testimonial;
