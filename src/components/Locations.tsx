"use client";

import { TitleSection } from "./ui/title-section";
import { LocationMapCards } from "./ui/location-map-cards";
import { useTranslations } from "next-intl";
import infoData from "../../info.json";

export const Locations: React.FC = () => { 
    const t = useTranslations("locations");

    return ( 
    <section className="w-full bg-background pt-24 md:pt-32 pb-12" id="locations">
        <div className="w-full container mx-auto px-6">
            <div className="w-full flex flex-col items-center justify-center mb-12">
                <TitleSection title={t("title")} variant="default" />
            </div>
            <LocationMapCards locations={infoData.sucursales} />
        </div>
    </section>
    )
}