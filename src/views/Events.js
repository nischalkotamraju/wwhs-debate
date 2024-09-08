import React from 'react';
import { motion } from 'framer-motion';

export default function Events() {
    const events = [
        { title: "Lincoln Douglas (LD)", link: "/events/ld" },
        { title: "Public Forum (PF)", link: "/events/pf" },
        { title: "Policy (CX)", link: "/events/cx" },
        { title: "Congressional", link: "/events/congressional" },
        { title: "World Schools (WSD)", link: "/events/wsd" },
        { title: "Speech (IE Events)", link: "/events/speech" }
    ];

    return (
        <div className="min-h-screen text-white flex flex-col items-center justify-center p-8">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-8 text-center school-color"
            >
                Events
            </motion.h1>
            <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {events.map((event, index) => (
                    <motion.a
                        href={event.link}
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-neutral-800 rounded-lg shadow-md p-4 transition-all duration-300 hover:bg-neutral-700 hover:scale-105"
                    >
                        <h2 className="text-lg font-semibold school-color text-center">{event.title}</h2>
                    </motion.a>
                ))}
            </div>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: events.length * 0.1 }}
                className="mt-4 text-center"
            >
                Don't know which event is right for you? <a className="school-color hover:underline" href="/events/quiz">Click on me!</a>
            </motion.p>
        </div>
    );
}