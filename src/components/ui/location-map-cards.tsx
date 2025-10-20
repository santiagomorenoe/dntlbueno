"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { MapPin, Navigation, ExternalLink, Loader2 } from "lucide-react";
import { Button } from "./button";
import { useTranslations } from "next-intl";

interface Location {
  zona: string;
  ubicacion: string;
  mapa_embebido: string;
  ubicacion_mapa: string;
  distance?: number;
  lat?: number;
  lng?: number;
}

interface LocationMapCardsProps {
  locations: Location[];
}

// Función para extraer coordenadas de la URL de Google Maps embebida
const extractCoordinatesFromEmbed = (embedUrl: string) => {
  try {
    const match = embedUrl.match(/!3d([-\d.]+)!4d([-\d.]+)/);
    if (match) {
      return {
        lat: parseFloat(match[1]),
        lng: parseFloat(match[2])
      };
    }
  } catch (error) {
    console.error("Error extracting coordinates:", error);
  }
  return null;
};

// Fórmula de Haversine para calcular distancia entre dos puntos
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371; // Radio de la Tierra en km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
};

export const LocationMapCards: React.FC<LocationMapCardsProps> = ({ locations }) => {
  const t = useTranslations("locations");
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  const [sortedLocations, setSortedLocations] = useState<Location[]>(locations);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [nearestLocation, setNearestLocation] = useState<number | null>(null);

  // Inicializar las coordenadas de cada sucursal
  useEffect(() => {
    const locationsWithCoords = locations.map(location => {
      const coords = extractCoordinatesFromEmbed(location.mapa_embebido);
      return {
        ...location,
        lat: coords?.lat,
        lng: coords?.lng
      };
    });
    setSortedLocations(locationsWithCoords);
  }, [locations]);

  const findNearestLocation = () => {
    setIsLoadingLocation(true);
    
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          setUserLocation({ lat: userLat, lng: userLng });

          // Calcular distancias
          const locationsWithDistance = sortedLocations.map((location, index) => {
            if (location.lat && location.lng) {
              const distance = calculateDistance(userLat, userLng, location.lat, location.lng);
              return { ...location, distance, originalIndex: index };
            }
            return { ...location, distance: Infinity, originalIndex: index };
          });

          // Ordenar por distancia
          const sorted = [...locationsWithDistance].sort((a, b) => 
            (a.distance || Infinity) - (b.distance || Infinity)
          );

          setSortedLocations(sorted);
          setNearestLocation(0); // La primera es la más cercana
          setSelectedLocation(0);
          setIsLoadingLocation(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setIsLoadingLocation(false);
          alert(t("locationError") || "No se pudo obtener tu ubicación. Por favor, verifica los permisos.");
        }
      );
    } else {
      setIsLoadingLocation(false);
      alert(t("locationNotSupported") || "Tu navegador no soporta geolocalización.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Botón para encontrar la más cercana */}
      <div className="flex justify-center mb-8">
        <Button
          onClick={findNearestLocation}
          disabled={isLoadingLocation}
          className="gap-2 hover:scale-105 transition-all duration-300 hover:cursor-pointer relative"
          size="lg"
        >
          {isLoadingLocation ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              {t("searching") || "Buscando..."}
            </>
          ) : (
            <>
              <Navigation className="w-5 h-5" />
             {t("btnText2") || "Encuentra la más cercana"}
            </>
          )}
        </Button>
      </div>

      {/* Grid de tarjetas */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {sortedLocations.map((location, index) => (
          <motion.div
            key={`${location.zona}-${index}`}
            variants={cardVariants as Variants}
            className="relative"
          >
            <motion.div
              className={`
                relative rounded-xl overflow-hidden bg-card border-2 
                transition-all duration-300 h-full
                ${selectedLocation === index ? 'border-primary shadow-2xl' : 'border-border hover:border-primary/50'}
                ${nearestLocation === index && userLocation ? 'ring-4 ring-primary/20' : ''}
              `}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedLocation(selectedLocation === index ? null : index)}
            >
              {/* Badge de más cercana */}
              {nearestLocation === index && userLocation && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1"
                >
                  <Navigation className="w-3 h-3" />
                  {t("nearest") || "Más cercana"}
                </motion.div>
              )}

              {/* Mapa embebido */}
              <div className="relative w-full h-64 bg-muted">
                <iframe
                    src={location.mapa_embebido}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>

              {/* Contenido */}
              <div className="p-5 space-y-3">
                {/* Título y distancia */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {location.zona}
                  </h3>
                  {location.distance && location.distance !== Infinity && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-semibold whitespace-nowrap"
                    >
                      {location.distance.toFixed(1)} km
                    </motion.span>
                  )}
                </div>

                {/* Dirección */}
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                  <p className="line-clamp-2">{location.ubicacion}</p>
                </div>

                {/* Botón expandido */}
                <AnimatePresence>
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3 pt-3 border-t border-border"
                    >
                      {/* Botones de acción */}
                      <div className={`flex gap-2 ${selectedLocation === index ? '' : ''}`}>
                        <Button
                          onClick={(e) => { e.stopPropagation(); window.open(location.ubicacion_mapa, '_blank'); }}
                          className="flex-1 gap-2 hover:cursor-pointer"
                          size="sm"
                          variant={selectedLocation === index ? 'default' : 'outline'}
                        >
                          <ExternalLink className="w-4 h-4" />
                          {t("directions") || "Cómo llegar"}
                        </Button>
                      </div>
                    </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

