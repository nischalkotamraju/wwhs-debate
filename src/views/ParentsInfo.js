import React from 'react';
import { motion } from 'framer-motion';
import { FaGavel, FaTrophy, FaAppleAlt, FaUsers } from 'react-icons/fa';

export default function ParentsInfo() {
    const supportWays = [
        {
            title: "Offer to Judge at a Local Tournament",
            icon: <FaGavel className="text-blue-500" />,
            description: "Fulfilling judging requirements is one of our most significant expenses. Your time is incredibly valuable, not just for the financial savings, but also because it demonstrates the strong parental support for our activities. If you're curious to learn more about your child's involvement, this is an excellent starting point.",
            links: [
                { text: "Public Forum Judging Guide", url: "https://drive.google.com/open?id=0B26N_A98seawWTUwd19udmtQaFE" },
                { text: "Individual Events Guide", url: "https://drive.google.com/file/d/0B26N_A98seawT0hsS3Rpc3JQU3c/view?usp=sharing" },
                { text: "Comprehensive Judging Information", url: "https://sites.google.com/view/judge-training/home" }
            ]
        },
        {
            title: "Assist at our Debate and Academic Tournaments",
            icon: <FaTrophy className="text-yellow-500" />,
            description: "We host the Westwood TFA Tournament in the fall and our UIL tournament in the spring annually. These events attract over 500 student participants and 50 adults. We need assistance in various areas, including the hospitality room, concessions, and donations for both locations."
        },
        {
            title: "Contribute Refreshments",
            icon: <FaAppleAlt className="text-red-500" />,
            description: "While tournaments provide concessions, parents who can donate items like cases of water bottles or bags of fruit can significantly help the team perform at their best."
        },
        {
            title: "Become a Booster Club Member",
            icon: <FaUsers className="text-green-500" />,
            description: "The Westwood Debate and Speech Booster Club plays a crucial role in sustaining our nationally recognized team. We provide support beyond school and district funding through:",
            bulletPoints: [
                "Financial support for local, statewide, and national tournaments",
                "Arranging parent judges to reduce tournament costs",
                "Handling travel logistics",
                "Funding Assistant Coaches for each event",
                "Organizing fundraising events"
            ],
            additionalInfo: "As a 501(c)(3) non-profit organization, donations are tax-deductible. Join us in supporting our thriving program!",
            links: [
                { text: "Booster Club Meetings", url: "https://docs.google.com/spreadsheets/d/1SnX5aBFUvfURLQ8x517bkTuVKsPrYHdXLpHPQuI4Dn0/edit" },
                { text: "Board Members", url: "https://docs.google.com/spreadsheets/d/1SQAMT2ZQQUoq19Ynj3iIItQSznh3VwutjVOJC0mEe20/edit" }
            ]
        }
    ];

    return (
        <div className="min-h-screen text-white flex flex-col items-center justify-center p-8">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-8 text-center school-color"
            >
                We Greatly Appreciate Parental Support!
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-4xl"
            >
                <p className="mb-4 text-center">The speech and debate team's success is significantly enhanced by the invaluable contributions of our parents. Your support is crucial to our achievements! We offer various ways for you to get involved and help make our team as successful as your student deserves. If you're able and willing to assist in any capacity, please don't hesitate to contact our coach via email (dominic_henderson@roundrockisd.org).</p>
                
                <h2 className="text-2xl font-semibold mb-6 school-color text-center">Here are several ways you can support the team:</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {supportWays.map((way, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-neutral-800 rounded-lg p-6 shadow-xl"
                        >
                            <div className="flex items-center mb-4">
                                <span className="text-4xl mr-4">{way.icon}</span>
                                <h3 className="text-xl font-semibold school-color">{way.title}</h3>
                            </div>
                            <p className="mb-4">{way.description}</p>
                            {way.links && (
                                <ul className="list-disc list-inside">
                                    {way.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a href={link.url} className="school-color hover:underline">{link.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {way.bulletPoints && (
                                <ul className="list-disc list-inside mb-4">
                                    {way.bulletPoints.map((point, pointIndex) => (
                                        <li key={pointIndex}>{point}</li>
                                    ))}
                                </ul>
                            )}
                            {way.additionalInfo && (
                                <p>{way.additionalInfo}</p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}