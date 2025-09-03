"use client";

import { TitleSection } from "./ui/title-section";
import { Button } from "./ui/button";
import { LocationsCarousel } from "./ui/locations-carousel";
import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";


export const Locations: React.FC = () => { 

    const t = useTranslations("locations");

    const locations = [
        {
            img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: t("branches.0.title"),
            address: t("branches.0.address"),
            schedule: t("branches.0.schedule")
        },
        {
            img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: t("branches.1.title"),
            address: t("branches.1.address"),
            schedule: t("branches.1.schedule")
        },
        {
            img: "https://images.unsplash.com/photo-1643660526741-094639fbe53a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: t("branches.2.title"),
            address: t("branches.2.address"),
            schedule: t("branches.2.schedule")
        },
        {
            img: "https://images.unsplash.com/photo-1704455306251-b4634215d98f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: t("branches.3.title"),
            address: t("branches.3.address"),
            schedule: t("branches.3.schedule")
        },
        {
            img: "https://images.unsplash.com/photo-1629909615957-be38d48fbbe6?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: t("branches.4.title"),
            address: t("branches.4.address"),
            schedule: t("branches.4.schedule")
        },
        {
            img: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=1083&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: t("branches.5.title"),
            address: t("branches.5.address"),
            schedule: t("branches.5.schedule")
        }
    ]

    return ( 
    <section className="w-full bg-background py-24" id="locations">
        <div className="w-full container mx-auto px-6 flex flex-col items-start justify-center md:flex-row gap-10">
            <div className="w-full md:w-2/4 flex flex-col items-center justify-center mx-auto md:sticky md:top-24 ">
                <TitleSection title={t("title")} />
                <Button variant="default" className="hover:cursor-pointer hover:scale-105 transition-all duration-300 -mt-10 relative hidden md:flex">
                    <Phone />
                    {t("btnText")}
                </Button>
            </div>
            <div className="w-full md:w-2/4">
                <LocationsCarousel slides={locations} />
            </div>
        </div>
    </section>
    )
}