import { useState, useEffect } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { AppRoutes } from "./routes";

const App = () => {
    const [theme, setTheme] = useState<"light" | "dark">(( ) => {
        const saved = localStorage.getItem("theme");
        if (saved === "light" || saved === "dark") return saved;
        return "dark"; // Default to dark theme
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((t) => (t === "light" ? "dark" : "light"));
    };

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <Header theme={theme} toggleTheme={toggleTheme} />
            <main>
                <AppRoutes />
            </main>
            <Footer />
        </div>
    );
};

export default App;