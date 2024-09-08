import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCrown, FaGavel, FaHandshake, FaFileAlt, FaBook, FaMoneyBillWave, FaHistory, FaUserGraduate, FaUsers } from 'react-icons/fa';

export default function Leadership () {
  const officers = [
    { title: 'Team President', name: 'Pranav Balakrishnan', description: 'Leads the team and coordinates with coaching staff.', icon: <FaCrown className="text-yellow-500" /> },
    { title: 'Individual Events Captain', name: 'Charlie Hui', description: 'Organizes and coordinates IE practice and assignments.', icon: <FaGavel className="text-amber-700" /> },
    { title: 'Lincoln Douglas Captain', name: 'Shaurya Pathania', description: 'Organizes and coordinates LD practice and research assignments.', icon: <FaGavel className="text-amber-700" /> },
    { title: 'Policy Captain', name: 'Ethan Andrew', description: 'Organizes and coordinates Policy practice and research assignments.', icon: <FaGavel className="text-amber-700" /> },
    { title: 'Public Forum Captain', name: 'Neha Reddy', description: 'Organizes and coordinates PF practice and research assignments.', icon: <FaGavel className="text-amber-700" /> },
    { title: 'Outreach Coordinator', name: 'Rheya Kurian', description: 'Manages team promotion and community outreach.', icon: <FaHandshake className="text-blue-500" /> },
    { title: 'Secretary', name: 'Amrita Josyula', description: 'Organizes paperwork and assists with team activities.', icon: <FaFileAlt className="text-gray-500" /> },
    { title: 'Librarian', name: 'Yuegelica Yeong', description: 'Manages team resources and research materials.', icon: <FaBook className="text-yellow-500" /> },
    { title: 'Treasurer', name: 'Eric Gong', description: 'Handles financial aspects of the team.', icon: <FaMoneyBillWave className="text-green-500" /> },
    { title: 'Historian', name: 'Mahita Bontu', description: 'Maintains historical records and organizes social events.', icon: <FaHistory className="text-purple-500" /> },
    { title: 'Novice Coordinator', name: 'Anushka Gupta', description: 'Supports integration and competitive success of 1st year competitors.', icon: <FaUserGraduate className="text-blue-500" /> },
    { title: 'Novice Coordinator', name: 'Nandu Saranu', description: 'Supports integration and competitive success of 1st year competitors.', icon: <FaUserGraduate className="text-blue-500" /> },
    { title: 'Novice Coordinator', name: 'Varsha Sivasubramanian', description: 'Supports integration and competitive success of 1st year competitors.', icon: <FaUserGraduate className="text-blue-500" /> },
    { title: 'Novice Coordinator', name: 'Ayan Nagulapally', description: 'Supports integration and competitive success of 1st year competitors.', icon: <FaUserGraduate className="text-blue-500" /> },
  ];

  const coachingStaff = [
    { title: 'Head Coach', name: 'Dominic Henderson', icon: <FaUsers className="text-blue-500" /> },
    { title: 'Policy Consultant', name: 'Kevin Hirn', icon: <FaUsers className="text-blue-500" /> },
    { title: 'Policy Consultant', name: 'Esther Liu', icon: <FaUsers className="text-blue-500" /> },
    { title: 'Public Forum Consultant', name: 'TBA', icon: <FaUsers className="text-blue-500" /> },
    { title: 'Lincoln Douglas Consultant', name: 'Bodhi Rosen', icon: <FaUsers className="text-blue-500" /> },
    { title: 'Speech Consultant', name: 'Hiba Faruqi', icon: <FaUsers className="text-blue-500" /> },
  ];

  const [currentOfficerIndex, setCurrentOfficerIndex] = useState(0);
  const [showAllOfficers, setShowAllOfficers] = useState(false);

  useEffect(() => {
    if (!showAllOfficers) {
      const timer = setInterval(() => {
        if (currentOfficerIndex < officers.length - 1) {
          setCurrentOfficerIndex(prevIndex => prevIndex + 1);
        } else {
          setShowAllOfficers(true);
          clearInterval(timer);
        }
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [currentOfficerIndex, officers.length, showAllOfficers]);

  const handleSkip = () => {
    setShowAllOfficers(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-8 md:py-16 mt-16 md:mt-12">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="school-color text-3xl md:text-5xl leading-tight font-bold text-center mb-8 md:mb-16"
        >
          Leadership
        </motion.h1>
        
        {!showAllOfficers ? (
          <>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentOfficerIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-4/5 max-w-4xl mx-auto mb-16 flex items-center justify-between"
              >
                <div className="text-left">
                  <h2 className="school-color text-2xl md:text-4xl leading-tight font-bold mb-2">{officers[currentOfficerIndex].title}</h2>
                  <h3 className="text-white text-xl font-semibold mb-2">{officers[currentOfficerIndex].name}</h3>
                  <p className="text-white text-sm md:text-base leading-relaxed">{officers[currentOfficerIndex].description}</p>
                </div>
                <span className="text-8xl">{officers[currentOfficerIndex].icon}</span>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center mt-8">
              <button
                onClick={handleSkip}
                className="bg-orange-600 text-white py-2 px-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:rotate-3"
              >
                SKIP
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {officers.map((officer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}

                  className="bg-neutral-800 rounded-lg p-8 shadow-xl backdrop-blur-sm hover:bg-neutral-700 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{officer.icon}</span>
                    <h2 className="school-color text-xl md:text-2xl leading-tight font-bold">{officer.name}</h2>
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-2">{officer.title}</h3>
                  <p className="text-white text-sm leading-relaxed">{officer.description}</p>
                </motion.div>
              ))}
            </div>

            <h2 className="school-color text-2xl md:text-4xl leading-tight font-bold text-center mb-8 mt-16">Coaching Staff</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coachingStaff.map((staff, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}

                  className="bg-neutral-800 rounded-lg p-8 shadow-xl backdrop-blur-sm hover:bg-neutral-700 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{staff.icon}</span>
                    <h2 className="school-color text-xl md:text-2xl leading-tight font-bold">{staff.name}</h2>
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-2">{staff.title}</h3>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};