import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Systems } from "../pages/Systems";
import { SystemDetail } from "../pages/SystemDetail";
import { Frontend } from "../pages/Frontend";

export const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/systems" element={<Systems />} />
        <Route path="/systems/:id" element={<SystemDetail />} />
        <Route path="/frontend" element={<Frontend />} />
    </Routes>
);