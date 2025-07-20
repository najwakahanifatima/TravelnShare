'use client'

import { Accordion, AccordionTrigger, AccordionItem, AccordionContent } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  const carouselImages = [
    '/main-page/carousel1.svg',
    '/main-page/carousel2.svg',
    '/main-page/carousel3.svg',
  ];

  const accordionContents = [
    {
      title: "Destinations",
      desc: "See what other travellers have visited as their destination tour.",
      color: "#E07A5F"
    },
    {
      title: "Reviews and Vote",
      desc: "Like package to upvote and easily seen by other travellers.",
      color: "#81B29A"
    },
    {
      title: "Save List",
      desc: "Add destination package to your bookmark list by clicking the bookmark icon.",
      color: "#3D405B"
    }
  ];

  const [openItem, setOpenItem] = useState<string>("item-0");

  const easeOut = [0.25, 0.1, 0.25, 1] as const;

  return (
    <div className="flex flex-col">

      {/* Landing Section */}
      <section className="flex flex-col text-center mt-24 mb-52 w-auto justify-center">

        {/* General Description */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-7xl font-extrabold bg-gradient-to-r from-[#6C78C4] to-[#1C1D3A] text-transparent bg-clip-text"
        >
          Travel and Share!
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-3xl font-semibold mt-6 text-[#02053E]"
        >
          All Travelling Destination in One Package
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-md mt-6 text-[#02053E]"
        >
          Get travelling destination packages based on your needs and preference
          <br /> from recommendation of other travellers.
        </motion.h3>

        {/* Carousel Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center mt-10"
        >
          <div className="shadow-lg py-2 rounded-2xl bg-white h-20">
            <Carousel
              opts={{ align: "start" }}
              orientation="vertical"
              className="w-full"
              plugins={[
                Autoplay({
                  delay: 1700,
                }),
              ]}
            >
              <CarouselContent className="h-20">
                {carouselImages.map((value, index) => (
                  <CarouselItem key={index}>
                    <img src={value} alt="Carousel Image" className="w-full h-16" />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </motion.div>
      </section>

      {/* Features Info Section */}
      <section className="flex flex-row my-8 py-8 gap-20 px-28 justify-center">
        {/* Left Side Content */}
        <aside className="flex flex-col w-[325px]">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="font-semibold text-2xl text-[#E07A5F]"
          >
            See Destination Package <br />
            <span className="text-[#02053E]">Recommendations</span>
          </motion.h2>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8"
          >
            <Accordion
              type="single"
              collapsible
              className="flex flex-col gap-2"
              defaultValue="item-0"
              onValueChange={(value) => setOpenItem(value)}
            >
              {accordionContents.map((content, index) => {
                const isOpen = openItem === `item-${index}`;
                return (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="rounded-md text-white px-4 border-none data-[state=open]:bg-[#E07A5F] data-[state=closed]:bg-[#E3E3E3] data-[state=closed]:text-[#02053E]"
                    style={{
                      backgroundColor: isOpen ? content.color : "#E3E3E3",
                    }}
                  >
                    <AccordionTrigger className="font-semibold">
                      {content.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-balance text-[0.75rem]">
                      {content.desc}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Button className="mt-10 rounded-3xl bg-[#F2CC8F] text-white font-semibold w-[10rem] hover:-translate-y-0.5 transform transition hover:bg-[#F5BB5E]">
              Explore Now
            </Button>
          </motion.div>
        </aside>

        {/* Right Side Image */}
        <motion.aside
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src="/main-page/destination.svg"
            alt="Destination Images"
            className="h-[400px]"
          />
        </motion.aside>
      </section>


      {/* Share Your Experience Section */}
      <section className="flex flex-row my-4 py-4 gap-20 px-28 justify-center">
        {/* Left Side Image */}
        <motion.aside
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src="/main-page/experience.svg"
            alt="Share Your Experience Steps"
            className="h-[350px]"
          />
        </motion.aside>

        {/* Right Side Content */}
        <aside className="flex flex-col items-end text-right pt-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="font-semibold text-2xl text-[#3E6652]"
          >
            Share <span className="text-[#81B29A]">Your Experience</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-6 text-[#3E6652]"
          >
            Add and write your travelling <br />
            destination tour and share to others.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Button className="mt-10 rounded-3xl bg-[#F2CC8F] text-white font-semibold w-[10rem] hover:-translate-y-0.5 transform transition hover:bg-[#F5BB5E]">
              Add Yours Now
            </Button>
          </motion.div>
        </aside>
      </section>

    </div>
  );
}
