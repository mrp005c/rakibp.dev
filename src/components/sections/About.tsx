import React from "react";
import { Tags } from "@/components/general/tags";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="bg-violet-100 dark:bg-[#582a5b] pt-16 py-3">
      <Tags>About Me</Tags>
      <div className=" max-w-7xl mx-auto flex flex-col-reverse sm:flex-row-reverse justify-between py-10 px-3 items-center">
        {/* left side */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-[32px] font-bold">
            Curious about me? Here you have it:
          </h1>

          <p>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p>
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <div>
            Finally, some quick bits about me.
            <ul className="list-disc list-inside grid grid-cols-2">
              <li>B.E. in Computer Engineering</li>
              <li>Full time freelancer</li>
              <li>Avid learner</li>
              <li>Aspiring indie hacker</li>
            </ul>
          </div>
          <p>
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>

        {/* right side */}
        <div className="md:w-1/2 flex-center">
          <div className="relative h-87.5 w-72.5">
            <div className="absolute rounded-sm top-8 -left-8 h-75 w-70 bg-gray-300 dark:bg-gray-500"></div>
            <div className="absolute rounded-sm top-0 left-0 border-16 box-border border-violet-100 dark:border-[#582a5b] h-75 w-70 ">
              <Image
                fill
                className="overflow-hidden rounded-sm"
                src="/images/rakib/me.jpg"
                alt="rakib"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
