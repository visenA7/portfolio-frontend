export const Header = () => (
    <header className="border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
            <span className="font-mono text-sm">abhishekvisen.dev</span>
            <div className="flex gap-6 text-sm">
                <a href="/systems" className="hover:text-sky-400">Systems</a>
                <a href="/frontend" className="hover:text-sky-400">Frontend</a>
                <a href="/projects" className="hover:text-sky-400">Projects</a>
                <a href="/resume" className="hover:text-sky-400">Resume</a>
            </div>
        </nav>
    </header>
);