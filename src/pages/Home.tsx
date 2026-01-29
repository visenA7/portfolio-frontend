import { Hero } from "../components/hero/Hero";
import { SystemSnapshot } from "../components/snapshot/SystemSnapshot";
import { SystemsSection } from "../components/systems/SystemsSection";
import { EngineeringSkills } from "../components/skills/EngineeringSkills";

export const Home = () => {
    return (
        <>
            <Hero />
            <SystemSnapshot />
            <SystemsSection />
            <EngineeringSkills />
        </>
    );
};