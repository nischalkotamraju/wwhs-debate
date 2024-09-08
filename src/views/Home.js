import { useState, useEffect } from "react";
import { FaQuestionCircle, FaGraduationCap, FaTrophy } from 'react-icons/fa';
import Typed from 'typed.js';

export default function Home() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const titleOptions = {
      strings: ['Westwood Speech and Debate'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: false,
      showCursor: false,
    };

    const subtitleOptions = {
      strings: ['Practice on Wednesdays, Thursdays, and Friday Flex!'],
      typeSpeed: 30,
      backSpeed: 30,
      loop: false,
      showCursor: false,
      startDelay: 2000,
    };

    const typedTitle = new Typed('#typed-title', titleOptions);
    const typedSubtitle = new Typed('#typed-subtitle', subtitleOptions);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const offset = 200; // Increased offset to make the arrow disappear earlier
      setShowArrow(scrollPosition < documentHeight - offset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      typedTitle.destroy();
      typedSubtitle.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sections = [
    {
      id: "whyDebate",
      title: "Why Speech and Debate?",
      content: "Speech and Debate offers invaluable skills that extend far beyond the competition room. It enhances critical thinking, improves public speaking, boosts confidence, and develops research abilities. These skills are essential for success in academics, careers, and life in general. Join us to unlock your potential and become a more articulate, analytical, and persuasive communicator.",
      icon: <FaQuestionCircle size={64} className="text-blue-500 mb-4" />
    },
    {
      id: "collegeSection",
      title: "How Can Debate Help Me Get into College?",
      content: [
        "The skills and experiences gained in debate are highly valued by successful collegiate students. Research shows that debate students consistently score higher on standardized tests compared to the average student. Debate can also be a key factor in distinguishing yourself during the college application process.",
        {
          subtitle: "Recommendation Letters",
          text: "Students who achieve a double ruby (500 points) or higher are eligible for a recommendation letter. Other students may request letters based on availability. Please submit your requests by August 1st of your senior year."
        },
        {
          subtitle: "Scholarships",
          text: "Debaters have access to numerous scholarship opportunities and generally have an advantage in accessing college entrance and open scholarships. We'll be posting more information about these opportunities soon."
        }
      ],
      icon: <FaGraduationCap size={64} className="text-green-500 mb-4" />
    },
    {
      id: "successSection",
      title: "Our Team's Success",
      content: [
        "Westwood Speech and Debate has a long history of competitive success. We've consistently ranked in the top ten nationally and number one in Texas according to the National Speech and Debate Association for over a decade.",
        {
          subtitle: "Highlights of our Success:",
          text: [
            "42 NSDA Academic All Americans",
            "2024 - IPPF World Champions",
            "2024 - TOC Championship Policy",
            "2023 - TFA State Championship Policy Debate",
            "2019 - NSDA Nationals 4th Place Domestic Extemporaneous Speaking",
            "2017 - TFA State Championship Lincoln Douglas Debate",
            "2015 - NSDA Nationals 9th Place Lincoln Douglas Debate",
            "2015 - NSDA Octofinalist Policy Debate",
            "2008 - UIL State Championship Policy Debate",
            "2007 - UIL State Championship Policy Debate",
            "2001 - Tournament of Champions Championship Lincoln Douglas Debate"
          ]
        }
      ],
      icon: <FaTrophy size={64} className="text-purple-500 mb-4" />
    },
    {
      id: "sponsorsSection",
      title: "Our Sponsors",
      content: [
        {
          subtitle: "Diamond Sponsor",
          text: "WhataBurger, Nwan (Helen) Wang & Cheng Liang Huang"
        },
        {
          subtitle: "Platinum Sponsors",
          text: "ACES Academic Enrichment Center, Spice Fine Indian Cuisine, Biryani Place"
        },
        {
          subtitle: "Gold Sponsors",
          text: "College Inroads, Gonzaga Debate Institute, Institute for Speech & Debate, Kolache Factory, Princeton Review, Pizza Day, Sangam Chettinad Indian Cuisine, Starbucks, Target - Lakeline, Tso Chinese Delivery"
        },
        {
          subtitle: "Silver Sponsors",
          text: "Austin Gourmet Popcorn, Chick fil A, Corner Bakery Cafe, Costco - Great Hill, HEB - Lakeline, Macaroni Grill, P Terry's, Sams - Lakeline, Schlotsky's, Target - 2222, Target - Cedar Park"
        },
        {
          subtitle: "Other Sponsors",
          text: "Amy's Ice Cream, Sprouts - Great Hill/Cypress Creek, Bush's Chicken, Chuy's"
        }
      ],
      icon: <FaTrophy size={64} className="text-yellow-500 mb-4" />
    }
  ];

  const Section = ({ section, index }) => {
    return (
      <div
        className={`w-full max-w-4xl mx-auto my-64 p-8 bg-neutral-800 rounded-lg shadow-lg`}
        id={section.id}
      >
        <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:items-start`}>
          <div className={`md:w-1/4 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} flex justify-center`}>
            {section.icon}
          </div>
          <div className="md:w-3/4">
            <h2 className="text-3xl font-bold mb-4 school-color">{section.title}</h2>
            {Array.isArray(section.content) ? (
              section.content.map((item, i) => (
                <div key={i}>
                  {typeof item === 'string' ? (
                    <p className="text-gray-300 mb-4">{item}</p>
                  ) : (
                    <>
                      <h3 className="text-xl font-semibold mb-2 mt-4 school-color">{item.subtitle}</h3>
                      {Array.isArray(item.text) ? (
                        <ul className="text-gray-300 mb-4 list-none pl-5">
                          {item.text.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-300 mb-4">{item.text}</p>
                      )}
                    </>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-300">{section.content}</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-64 min-h-[70vh] flex flex-col justify-center items-center">
          <img src={require("../assets/wwhs-debate-logo.jpeg")} alt="WWHS Debate Logo" className="mb-4 w-64 h-64 object-contain rounded-full" />
          <h1 className="text-4xl md:text-6xl font-bold school-color mb-4" id="typed-title">Westwood Speech and Debate</h1>
          <p className="text-xl text-gray-300" id="typed-subtitle">Practice on Wednesdays, Thursdays, and Friday Flex!</p>
        </div>

        {sections.map((section, index) => (
          <Section key={section.id} section={section} index={index} />
        ))}
      </main>
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