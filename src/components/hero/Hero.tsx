import { Container } from "../layout/Container";
import { ArchitectureSlider } from "./ArchitectureSlider";


export const Hero = () => {
    return (
        <section className="py-24 border-b border-white/10">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

                    {/* LEFT: Text */}
                    <div>
                        <h1 className="text-4xl font-bold text-white">
                            Abhishek Visen
                        </h1>

                        <p className="mt-4 text-xl text-sky-400">
                            Strong Frontend Engineering (React)
                            <br></br>
                            Backend & System Design Engineer
                        </p>

                        <p className="mt-6 text-gray-300 max-w-xl">
                            I design and build scalable Node.js systems using PostgreSQL,
                            Redis, queues, event-driven architecture,
                            and also develop rich,
                            responsive user interfaces as a React frontend engineer.
                        </p>

                        <div className="mt-8 flex gap-4">
                            <a className="btn-primary" href="/systems">
                                Systems
                            </a>
                            <a className="btn-secondary" href="/frontend">
                                Frontend
                            </a>
                            <a className="btn-secondary" href="/projects">
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