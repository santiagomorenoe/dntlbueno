"use client";

import { motion } from "framer-motion";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface VideoReel {
  id: string;
  thumbnail: string;
  title: string;
  views?: string;
}

interface VideoReelsProps {
  reels: VideoReel[];
  className?: string;
}

export function VideoReels({ reels, className }: VideoReelsProps) {
  const [activeReel, setActiveReel] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {reels.map((reel, index) => (
          <motion.div
            key={reel.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-muted cursor-pointer"
            onClick={() => setActiveReel(activeReel === reel.id ? null : reel.id)}
          >
            {/* Placeholder para thumbnail del video */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <p className="text-xs text-muted-foreground text-center px-4">
                [Video: {reel.title}]
              </p>
            </div>

            {/* Overlay con título */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-white text-sm font-semibold line-clamp-2 mb-1">
                  {reel.title}
                </h3>
                {reel.views && (
                  <p className="text-white/70 text-xs">{reel.views}</p>
                )}
              </div>
            </div>

            {/* Play button overlay */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: activeReel === reel.id ? 0 : 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <Play className="h-8 w-8 text-primary group-hover:text-white fill-current ml-1" />
              </div>
            </motion.div>

            {/* Active state border */}
            {activeReel === reel.id && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 border-4 border-primary rounded-2xl pointer-events-none"
              />
            )}

            {/* Sound control (visible when active) */}
            {activeReel === reel.id && (
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMuted(!isMuted);
                }}
                className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm text-white transition-all hover:bg-black/70"
              >
                {isMuted ? (
                  <VolumeX className="h-5 w-5" />
                ) : (
                  <Volume2 className="h-5 w-5" />
                )}
              </motion.button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
