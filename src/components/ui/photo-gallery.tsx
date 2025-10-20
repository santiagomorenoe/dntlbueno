"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Photo {
  id: string;
  src: string;
  alt: string;
  category?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  className?: string;
}

export function PhotoGallery({ photos, className }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", ...new Set(photos.map((p) => p.category).filter(Boolean))];
  const filteredPhotos = filter === "all"
    ? photos
    : photos.filter((p) => p.category === filter);

  const handlePrevious = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto(selectedPhoto === 0 ? filteredPhotos.length - 1 : selectedPhoto - 1);
    }
  };

  const handleNext = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto(selectedPhoto === filteredPhotos.length - 1 ? 0 : selectedPhoto + 1);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      {/* Category filters */}
      {categories.length > 1 && (
        <div className="mb-6 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category as string)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                filter === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {category === "all" ? "Todas" : category}
            </motion.button>
          ))}
        </div>
      )}

      {/* Photo grid */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-muted cursor-pointer"
              onClick={() => setSelectedPhoto(index)}
            >
              {/* Placeholder para la imagen */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <p className="text-xs text-muted-foreground text-center px-4">
                  [{photo.alt}]
                </p>
              </div>

              {/* Overlay en hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm">
                  <ZoomIn className="h-6 w-6 text-primary" />
                </div>
              </div>

              {/* Category badge */}
              {photo.category && (
                <div className="absolute top-2 left-2 px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm">
                  <p className="text-xs text-white font-medium">{photo.category}</p>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white transition-all hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </motion.button>

            {/* Previous button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white transition-all hover:bg-white/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>

            {/* Next button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white transition-all hover:bg-white/20"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-h-[90vh] max-w-[90vw] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Placeholder para imagen ampliada */}
              <div className="min-h-[400px] min-w-[400px] bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center p-8">
                <div className="text-center">
                  <p className="text-white text-lg mb-2">
                    {filteredPhotos[selectedPhoto].alt}
                  </p>
                  <p className="text-white/60 text-sm">
                    {selectedPhoto + 1} / {filteredPhotos.length}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
