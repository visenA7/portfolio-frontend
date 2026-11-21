import { resumeData } from "../../data/resume";

export const Footer = () => {
    const { basics } = resumeData;
    return (
        <footer className="border-t border-border-custom mt-12 md:mt-20 bg-card transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-sm text-text-muted text-center sm:text-left">
                    © {new Date().getFullYear()} {basics.name} · {basics.title}
                </div>
                
                <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm">
                    <a 
                        href={`mailto:${basics.contact.email}`} 
                        className="text-text-muted hover:text-sky-500 transition-colors"
                        title="Email"
                    >
                        {basics.contact.email}
                    </a>
                    <span className="text-border-custom font-light">|</span>
                    <a 
                        href={`https://${basics.contact.linkedin}`} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-text-muted hover:text-sky-500 transition-colors"
                        title="LinkedIn"
                    >
                        LinkedIn
                    </a>
                    <span className="text-border-custom font-light">|</span>
                    <a 
                        href={`https://${basics.contact.portfolio}`} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-text-muted hover:text-sky-500 transition-colors"
                        title="Portfolio"
                    >
                        Portfolio
                    </a>
                </div>
            </div>
        </footer>
    );
};