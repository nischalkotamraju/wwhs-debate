import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./views/Home";
import Header from "./components/Header";
import Dues from "./views/Dues";
import Events from "./views/Events";
import Resources from "./views/Resources";
import Leadership from "./views/Leadership";
import ParentsInfo from "./views/ParentsInfo";
import EventQuiz from "./components/EventQuiz";
import Footer from "./components/Footer";
import LD from "./components/LD";
import PF from "./components/PF";
import CX from "./components/CX";
import WSD from "./components/WSD";
import Congressional from "./components/Congressional";
import Speech from "./components/Speech";

const pageVariants = {
  initial: { opacity: 0, scale: 0.8 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 0.8 },
};

const pageTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20
};

const AnimatedRoute = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

const LoadingAnimation = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      {[0, 1, 2, 3].map((index) => (
        <motion.div
          key={index}
          className="w-4 h-4 bg-orange-500 rounded-full"
          animate={{
            y: ["0%", "-100%", "0%"],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.1,
          }}
        />
      ))}
    </div>
  );
};

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      const scrollPercentage = (currentScroll / totalScroll);
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);

    setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-neutral-900">
        <LoadingAnimation />
      </div>
    );
  }

  return (
    <Router>
      <div className="App bg-gradient-to-b from-neutral-900 to-neutral-800">
        <Header />
        <div className="fixed top-0 left-0 w-full h-1 bg-orange-500 origin-left z-50" style={{ transform: `scaleX(${scrollProgress})`, transformOrigin: 'left' }}></div>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<AnimatedRoute><Home /></AnimatedRoute>} />
            <Route path="/dues" element={<AnimatedRoute><Dues /></AnimatedRoute>} />
            <Route path="/events" element={<AnimatedRoute><Events /></AnimatedRoute>} />
            <Route path="/resources" element={<AnimatedRoute><Resources /></AnimatedRoute>} />
            <Route path="/leadership" element={<AnimatedRoute><Leadership /></AnimatedRoute>} />
            <Route path="/parentsinfo" element={<AnimatedRoute><ParentsInfo /></AnimatedRoute>} />
            <Route path="/events/quiz" element={<AnimatedRoute><EventQuiz /></AnimatedRoute>} />
            <Route path="/events/ld" element={<AnimatedRoute><LD /></AnimatedRoute>} />
            <Route path="/events/pf" element={<AnimatedRoute><PF /></AnimatedRoute>} />
            <Route path="/events/cx" element={<AnimatedRoute><CX /></AnimatedRoute>} />
            <Route path="/events/wsd" element={<AnimatedRoute><WSD /></AnimatedRoute>} />
            <Route path="/events/congressional" element={<AnimatedRoute><Congressional /></AnimatedRoute>} />
            <Route path="/events/speech" element={<AnimatedRoute><Speech /></AnimatedRoute>} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}