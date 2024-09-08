import React from 'react';

export default function Congressional() {
    const [displayDownArrow, setDisplayDownArrow] = React.useState(true);

    React.useEffect(() => {
        const handlePageScroll = () => {
            const viewportBottom = window.scrollY + window.innerHeight;
            const pageHeight = document.documentElement.scrollHeight;
            const threshold = 100;
            setDisplayDownArrow(viewportBottom < pageHeight - threshold);
        };

        window.addEventListener('scroll', handlePageScroll);
        return () => window.removeEventListener('scroll', handlePageScroll);
    }, []);

    return (
        <div className="bg-gradient-to-b from-neutral-900 to-neutral-800 min-h-screen text-white flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 relative">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center school-color">Congressional Debate</h1>
            <div className="w-full max-w-6xl flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 lg:pr-8">
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">"In the absence of established rules, or when individuals create their own regulations, true democracy is at its weakest." – Gen. Henry Martyn Robert (Robert's Rules of Order)</p>
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">Congressional Debate simulates a legislative assembly where participants craft bills (proposed legislation) and resolutions (position statements). These are subsequently debated and voted on by peers to potentially become law.</p>
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">While not always mandatory, coaches submitting legislation to tournaments grants their students the privilege of delivering an authorship speech, introducing the bill or resolution to the chamber.</p>
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">Prior to the tournament, participating schools receive a docket of submitted titles or complete legislative texts, allowing students to research and prepare for the debate.</p>
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">Many tournaments permit students to convene in committee(s) to determine the agenda. They aim to choose topics that will foster balanced and engaging debate while ensuring fair distribution of authorship privileges among participating schools in the chamber.</p>
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">The National Speech & Debate Association is dedicated to the educational growth of individuals through Congressional Debate. This format cultivates leadership and communication skills via intense interaction and debate on issues facing our democracy.</p>
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">These acquired skills will equip participants for continuous learning and leadership throughout their lives.</p>
                    <div className="overflow-x-auto rounded-lg shadow-lg mb-4">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-neutral-700">
                                    <th className="border-b border-neutral-600 p-2 sm:p-3 text-left text-sm sm:text-base">Section</th>
                                    <th className="border-b border-neutral-600 p-2 sm:p-3 text-left text-sm sm:text-base">Content</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">I. Introduction (15 to 30 seconds)</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">
                                        A. Relate the speech to ideas that are, or might be, brought to the floor for debate.<br/>
                                        1. Use a quotation; and/or<br/>
                                        2. Use an analogy; and/or<br/>
                                        3. Use statistics to raise awareness of a problem<br/>
                                        B. State purpose/thesis (about 10 seconds)
                                    </td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">II. Body (approximately 2 minutes)</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">
                                        Each claim you make (whether constructive or refuting the opposition) should be supported with analytical reasoning and/or evidence with a good combination of quantitative statistics or facts, and qualitative case studies and quotations from experts. Be sure to state the importance, or impact that claim has for the overall topic of debate and why it supports or opposes those views.<br/>
                                        Example structure:<br/>
                                        1. Claim: issue of debate; point or points that are in conflict.<br/>
                                        2. Proof: evidence and reasoning to support the argument; explain how the proof relates to the claim (link).<br/>
                                        3. Impact: why the argument is important/significant, especially to the particular side debated.<br/>
                                        Challenge the opposition to respond to an issue. Give two to three meaningful arguments.
                                    </td>
                                </tr>
                                <tr className="hover:bg-neutral-700 transition-colors duration-200">
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">III. Conclusion (about 30 seconds)</td>
                                    <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">
                                        A. State primary points and issues<br/>
                                        B. Summarize key arguments
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">For additional information and resources, visit: <a href="https://www.speechanddebate.org" className="school-color underline">www.speechanddebate.org</a></p>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-8">
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                        <iframe
                            src="https://www.youtube.com/embed/OSGp403cMZI?autoplay=1&mute=1"
                            title='Congressional Video'
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-48 sm:h-64 md:h-96 lg:h-[600px] xl:h-[800px] rounded-lg"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className={`md:block fixed bottom-4 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${displayDownArrow ? 'opacity-100' : 'opacity-0'}`}>
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