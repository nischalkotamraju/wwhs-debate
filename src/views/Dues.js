export default function Dues() {
    return (
        <div className="min-h-screen text-white flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold text-center school-color">Team Memberships</h1>
            <div className="flex items-center mt-6">
                <p className="text-center text-lg mb-12 max-w-2xl">Note: If you are planning to do regional or national, it will be costly and you will have to put in a good amount of commitment!</p>
            </div>
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Local Squad", price: 250, features: ["1-5 Tournaments", "Eligible to attend Tournaments in the Austin Area"], disads: ["Limited tournament exposure", "Restricted to local competition"] },
                    { title: "Regional Squad", price: 450, features: ["6-10 Tournaments", "Eligible to attend Tournaments in Texas"], disads: ["Limited to state-wide competition"] },
                    { title: "National Squad", price: 675, features: ["10+ Tournaments", "Eligible to attend any Tournaments", "Traveling across the nation"], disads: [] }
                ].map((squad, index) => (
                    <div key={index} className="bg-neutral-800 rounded-xl shadow-2xl p-8 transition-all duration-300 hover:bg-neutral-700">
                        <h2 className="text-2xl font-bold mb-2 school-color text-center">{squad.title}</h2>
                        <p className="text-xl mb-6 text-center">${squad.price}</p>
                        <div className="flex flex-col">
                            {squad.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-green-500 mr-3 flex-shrink-0">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <span className="text-lg">{feature}</span>
                                </div>
                            ))}
                            {squad.disads.map((disad, disadIndex) => (
                                <div key={disadIndex} className="flex items-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-red-500 mr-3 flex-shrink-0">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <span className="text-lg">{disad}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <a href="https://roundrockisdtx.schoolwindow.com/estore/wwhs/whs-debate.html" className="mt-16">
                <button className="bg-orange-600 text-white py-2 px-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:rotate-3">
                    PAY DUES
                </button>
            </a>
        </div>
    );
}