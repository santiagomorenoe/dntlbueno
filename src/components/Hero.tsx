"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Map, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroVideoDialog } from "./ui/video-dialog";
import { AnimatedShinyText } from "./ui/shiny-badge";

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
        <div className="absolute inset-0 bg-background/30 z-10" />
        <motion.img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1657470179447-0f5aa16daa91?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              <div className="border-border bg-background/80 inline-flex items-center rounded-full border px-3 py-1 text-sm backdrop-blur-sm hover:cursor-pointer hover:scale-105 transition-all duration-300">
                <AnimatedShinyText>
                  📍 Nueva Sucursal - Bosques
                </AnimatedShinyText>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center text-4xl tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl font-josefin-sans uppercase pt-4 lg:mt-0"
            >
              <span className=" font-normal normal-case pr-4">Dental</span>
              <span className="font-extralight">Bueno</span>
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="from-foreground/10 via-foreground/85 to-foreground/50 bg-gradient-to-tl bg-clip-text mx-auto mt-6 max-w-[90%] text-center font-normal text-lg font-inter text-transparent"
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
              <span className="from-primary via-primary/90 to-primary/80 absolute inset-0 z-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-border bg-background/50 flex items-center gap-2 rounded-full backdrop-blur-sm hover:cursor-pointer hover:scale-105 w-full md:w-fit"
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
              className="w-full max-w-[90.5%] mx-auto"
              animationStyle="top-in-bottom-out"
              videoSrc="https://www.youtube.com/embed/yvKDsUxq8V0?si=eawyBvja-A5fuFGL"
              thumbnailSrc="https://scontent.fmex46-1.fna.fbcdn.net/v/t39.30808-6/494540791_1186416466828635_1711051903417352597_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=ymRZJ9DMCmQQ7kNvwFVYwjR&_nc_oc=AdmvYmLaCoCXZK3GMyGsocq1jOMjqBW-9cCLrHZQARohR0BybsTIaBU4yXfgrUeILAuWr8arybUgUW-uPFvY2gLl&_nc_zt=23&_nc_ht=scontent.fmex46-1.fna&_nc_gid=lzVyNklsAf8lY0qaP05wVA&oh=00_AfUsrW1sMONJkpAJTBbV5ZP3Rjh9INri7W0s83uCtgEYDA&oe=68B31F01"
              thumbnailAlt="Hero Video"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
