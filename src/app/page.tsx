import { Hero } from "@/components/home/Hero";
import { ServicesHighlight } from "@/components/home/ServicesHighlight";
import { Stats } from "@/components/home/Stats";
import { TechStack } from "@/components/home/TechStack";

export default function Home() {
    return (
        <>
            <Hero />
            <Stats />
            <ServicesHighlight />
            <TechStack />
        </>
    );
}
