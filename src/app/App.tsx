import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { AppRoutes } from "./routes";

const App = () => {
    return (
        <div className="min-h-screen bg-[#0B0F14] text-gray-200">
            <Header />
            <main>
                <AppRoutes />
            </main>
            <Footer />
        </div>
    );
};

export default App;