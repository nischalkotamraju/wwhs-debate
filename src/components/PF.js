import React from 'react';

export default function PF() {
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center school-color">Public Forum Debate</h1>
            <div className="w-full max-w-6xl flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 lg:pr-8">
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">Public Forum (PF) debate is a team event that focuses on current events and public policy issues. It was created in 2002 to increase public participation in debate and to provide a more accessible format for both participants and judges.</p>
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">In PF debate, two teams of two debaters each argue for or against a resolution that changes monthly. The pro team supports the resolution, while the con team opposes it. Debates involve constructive speeches, crossfire (cross-examination) periods, and summary and final focus speeches.</p>
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">Key skills for PF debate include effective communication, critical thinking, research abilities, teamwork, and the capacity to present arguments persuasively to a lay audience. Debaters must also be adept at refutation and time management.</p>
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">PF debate follows a specific speaking format:</p>
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
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Team A Speaker 1 Constructive</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">4 minutes</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Team B Speaker 1 Constructive</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">4 minutes</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Crossfire</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">3 minutes</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Team A Speaker 2 Rebuttal</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">4 minutes</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Team B Speaker 2 Rebuttal</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">4 minutes</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Crossfire</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">3 minutes</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Team A Speaker 1 Summary</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">3 minutes</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Team B Speaker 1 Summary</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">3 minutes</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Grand Crossfire</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">3 minutes</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Team A Speaker 2 Final Focus</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">2 minutes</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Team B Speaker 2 Final Focus</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">2 minutes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">Each team has 3 minutes of preparation time to use throughout the round.</p>
                    <p className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">For more information and resources, visit: <a href="https://www.speechanddebate.org" className="school-color underline">www.speechanddebate.org</a></p>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-8">
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                        <iframe
                            src="https://www.youtube.com/embed/MUnyLbeu7qU?autoplay=1&mute=1"
                            title='PF Video'
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