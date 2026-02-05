import { Container } from "../layout/Container";
import { ArchitectureSlider } from "./ArchitectureSlider";


export const Hero = () => {
    return (
        <section className="py-12 md:py-24 border-b border-white/10">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">

                    {/* LEFT: Text */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white">
                            Abhishek Visen
                        </h1>

                        <p className="mt-3 md:mt-4 text-lg md:text-xl text-sky-400">
                            Senior Fullstack Engineer
                            <br></br>
                            Specializing in High-Scale Systems & Product Ownership
                        </p>

                        <p className="mt-4 md:mt-6 text-gray-300 max-w-xl text-sm md:text-base">
                            I architect and own production-grade systems, from core HRMS platforms
                            handling critical payroll for thousands to real-time event infrastructure.
                            Driven by database correctness, performance, and long-term maintainability.
                        </p>

                        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <a
                                href="/systems"
                                className="px-6 py-3 min-h-[44px] rounded-lg bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-white/20 transition-all text-sm uppercase tracking-wide backdrop-blur-sm text-center"
                            >
                                Systems
                            </a>
                            <a
                                href="/frontend"
                                className="px-6 py-3 min-h-[44px] rounded-lg bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-white/20 transition-all text-sm uppercase tracking-wide backdrop-blur-sm text-center"
                            >
                                Frontend
                            </a>
                            <a
                                href="/projects"
                                className="px-6 py-3 min-h-[44px] rounded-lg bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-white/20 transition-all text-sm uppercase tracking-wide backdrop-blur-sm text-center"
                            >
                                Projects
                            </a>
                        </div>
                    </div>

                    {/* RIGHT: Scrollable Architecture */}
                    <ArchitectureSlider />
                </div>
            </Container>
        </section>
    );
};