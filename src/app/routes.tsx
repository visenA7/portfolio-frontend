import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Systems } from "../pages/Systems";
import { SystemDetail } from "../pages/SystemDetail";
import { Frontend } from "../pages/Frontend";
import { Projects } from "../pages/Projects";
import { Resume } from "../pages/Resume";
import { FrontendDetail } from "../pages/FrontendDetail";
import { Notes } from "../pages/Notes";
import { NoteDetail } from "../pages/NoteDetail";
import { NotFound } from "../pages/NotFound";

export const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/systems" element={<Systems />} />
        <Route path="/systems/:id" element={<SystemDetail />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/frontend/:id" element={<FrontendDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:id" element={<NoteDetail />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);