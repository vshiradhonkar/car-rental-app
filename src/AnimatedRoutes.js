import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Models from "./pages/Models";
import Testimonials from "./pages/TestimonialsPage";
import SignIn from "./pages/SignIn";
import Team from "./pages/Team";
import Register from "./pages/Register";
import Conditions from './pages/Conditions';
import {AnimatePresence} from 'framer-motion';
import History from './pages/History';
import NotFound from './components/not-found';

function AnimatedRoutes() {
    const location = useLocation();
    return (
    <div>
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/models" element={<Models />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/conditions" element={<Conditions />} />
            <Route path="/history" element={<History />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </AnimatePresence>
    </div>
)
}

export default AnimatedRoutes