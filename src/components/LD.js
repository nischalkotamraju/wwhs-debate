import React from 'react';

export default function LD() {
    const [showArrow, setShowArrow] = React.useState(true);

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const offset = 100;
            setShowArrow(scrollPosition < documentHeight - offset);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-gradient-to-b from-neutral-900 to-neutral-800 min-h-screen text-white flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 relative">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center school-color">Lincoln Douglas Debate</h1>
            <div className="w-full max-w-6xl flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 lg:pr-8">
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">Lincoln Douglas (LD) debate is a one-on-one format that focuses on philosophical questions about societal organization and values. It originated from the 1858 Illinois Senate race debates between Abraham Lincoln and Stephen Douglas.</p>
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">In modern LD debate, participants argue for or against resolutions that change every two months. The affirmative debater supports the resolution, while the negative debater opposes it. Debates involve presenting cases, cross-examination, and rebuttals.</p>
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">Key skills for LD debate include effective communication, critical thinking, research abilities, and the capacity to present arguments persuasively. Debaters must also master the art of "flowing" - a specialized note-taking method to track arguments during rounds.</p>
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">LD debate follows a specific speaking format:</p>
                    <div className="overflow-x-auto rounded-lg shadow-lg mb-4">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-neutral-700">
                                    <th className="border-b border-neutral-600 p-2 sm:p-3 text-left text-sm sm:text-base">Speech</th>
                                    <th className="border-b border-neutral-600 p-2 sm:p-3 text-left text-sm sm:text-base">Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Affirmative Constructive (AC)</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">6 minutes</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Cross-Examination</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">3 minutes</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Negative Constructive + Rebuttal (1NC + NR)</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">7 minutes</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Cross-Examination</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">3 minutes</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">1st Affirmative Rebuttal (1AR)</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">4 minutes</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Negative Rebuttal (2NR)</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">6 minutes</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">2nd Affirmative Rebuttal (2AR)</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">3 minutes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">Each debater has 4 minutes of preparation time to use throughout the round.</p>
                    <p className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">For more information and resources, visit: <a href="https://www.speechanddebate.org" className="school-color underline">www.speechanddebate.org</a></p>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-8">
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                        <iframe
                            src="https://www.youtube.com/embed/Dw6Nvv8UMbU?autoplay=1&mute=1"
                            title='LD Video'
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-48 sm:h-64 md:h-96 lg:h-[600px] xl:h-[800px] rounded-lg"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className={`md:block fixed bottom-4 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${showArrow ? 'opacity-100' : 'opacity-0'}`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-orange-500 hover:text-orange-400 transition-colors duration-300 animate-bounce"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7"
                    />
                </svg>
            </div>
        </div>
    );
}