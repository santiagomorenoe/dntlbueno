"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Map, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroVideoDialog } from "./ui/video-dialog";

export default function Hero() {
  return (
    <div className="bg-background h-dvh relative w-full overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="from-primary/20 via-background to-background absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]"></div>
        <div className="bg-primary/5 absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:16px_16px] opacity-15"></div>
      <div className="absolute inset-0 z-0 overflow-hidden m-5 rounded-[30px] border-2 border-primary/20">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-xs z-10" />
        <motion.img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?_gl=1*t013mu*_ga*NDUzMjE1OTc0LjE3NTY1Mzg1NDg.*_ga_8JE65Q40S6*czE3NTY1Mzg1NDgkbzEkZzEkdDE3NTY1Mzg1ODkkajE5JGwwJGgw"
          alt="Hero Image"
          loading="lazy"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 1, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <div className="relative z-10 container h-full mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-32 lg:mt-[50px]">
        <div className="mx-auto max-w-6xl h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto mb-6 flex justify-center"
            >

            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="pt-4 lg:mt-0"
            >
              <span className="text-7xl bg-gradient-to-b from-white via-primary to-primary/50 text-transparent bg-clip-text font-semibold">Dental</span> <span className="text-7xl font-light bg-gradient-to-b from-white via-accent to-accent/50 text-transparent bg-clip-text">Bueno</span>
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="from-foreground via-foreground to-foreground bg-gradient-to-tl bg-clip-text mx-auto mt-6 max-w-[90%] text-center font-normal text-lg font-inter text-transparent"
          >
            ¿Listo para sonreír sin límites?
            <br />
            Cuidamos tu salud bucal con profesionalismo y calidez. ¡Tu bienestar
            es nuestra prioridad!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="group bg-primary text-primary-foreground hover:shadow-primary/30 relative overflow-hidden rounded-full px-6 shadow-lg transition-all duration-300 hover:cursor-pointer hover:scale-105 w-full md:w-fit"
            >
              <span className="relative z-10 flex items-center">
                Dental Bueno cerca de ti
                <MapPin className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-border bg-background/50 flex items-center gap-2 rounded-full backdrop-blur-sm hover:cursor-pointer hover:scale-105 w-full md:w-fit hover:text-foreground"
            >
              <Calendar className="h-4 w-4" />
              Agendar cita
            </Button>
          </motion.div>

          {/* Feature Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 50,
            }}
            className="relative mx-auto mt-10 md:mt-26"
          >
            <HeroVideoDialog
              className="w-full max-w-[90.5%] mx-auto z-[10000]"
              animationStyle="top-in-bottom-out"
              videoSrc="https://www.youtube.com/embed/yvKDsUxq8V0?si=eawyBvja-A5fuFGL"
              thumbnailSrc="https://scontent.fmex46-1.fna.fbcdn.net/v/t39.30808-6/494540791_1186416466828635_1711051903417352597_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEgcloL9otE3jtFmbLuM55C7U32G9BHNHXtTfYb0Ec0dQt-VPk5RXOps4X9gR6WFo_fvR-PqRAb0rEWIXjS1j-9&_nc_ohc=6VpLZ9-5VcUQ7kNvwGaNSVe&_nc_oc=AdnpQZKtkOZ7ByCJrJ5f-bcinJ94vAHK26cOxp7yfH6AaJt-kUlhq8xhZiNTDDdHnboSxrPvWiuFnXDipAvBL9Pi&_nc_zt=23&_nc_ht=scontent.fmex46-1.fna&_nc_gid=ucqulPMusRDkTthn24dy0A&oh=00_AfUiGjZ-bko1kGUcKPC5M57nm1ZS7zUtePJSXf6tfnYIHQ&oe=68B9B681"
              thumbnailAlt="Hero Video"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
