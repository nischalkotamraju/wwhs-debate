import React from 'react';

export default function Speech() {
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center school-color">Speech</h1>
            <div className="w-full max-w-6xl flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 lg:pr-8">
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">Speech involves a presentation by one or two students that is judged against a similar type of presentation by others in a round of competition. There are two general categories of speech events, public address events and interpretive events.</p>
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">Public address events feature a speech written by the student, either in advance or with limited prep, that can answer a question, share a belief, persuade an audience, or educate the listener on a variety of topics.</p>
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">Interpretation events center upon a student selecting and performing published material and appeal to many who enjoy acting and theatre.</p>
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">Debate involves an individual or a team of students working to effectively convince a judge that their side of a resolution or topic is, as a general principle, more valid. Students in debate come to thoroughly understand both sides of an issue, having researched each extensively, and learn to think critically about every argument that could be made on each side.</p>
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">To learn more about each event, click on the event name:</p>
                    <div className="overflow-x-auto rounded-lg shadow-lg mb-4">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-neutral-700">
                                    <th className="border-b border-neutral-600 p-2 sm:p-3 text-left text-sm sm:text-base">Interp Events</th>
                                    <th className="border-b border-neutral-600 p-2 sm:p-3 text-left text-sm sm:text-base">Public Address Events</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Dramatic Interpretation (DI)</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Commentary (EXC)</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Duo Interpretation (DUO)</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Declamation (DEC)</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Humorous Interpretation (HI)</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Expository (EXP)</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Poetry (POE)</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Impromptu (IMP)</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Program Oral Interpretation (POI)</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Informative Speaking (INF)</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Prose (PRO)</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">International Extemporaneous Speaking (IX)</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Storytelling (STO)</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Mixed Extemporaneous Speaking (MX)</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base"></td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Original Oratory (OO)</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base"></td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Original Spoken Word Poetry (SW)</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base"></td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">Pro Con Challenge (PCC)</td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base"></td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">United States Extemporaneous Speaking (USX)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">For more information and resources, visit: <a href="https://www.speechanddebate.org" className="school-color underline">www.speechanddebate.org</a></p>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-8">
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                        <iframe
                            src="https://www.youtube.com/embed/4NsUXaBx9yM?si=GW7ELJljHMjrSNfU&autoplay=1&mute=1"
                            title='Speech Video'
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