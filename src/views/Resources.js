import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaCampground, FaBook, FaTimes, FaChevronDown } from 'react-icons/fa';
import tournaments from '../assets/tournaments.json';
import camps from '../assets/camps.json';

export default function Resources() {
  const [selectedResource, setSelectedResource] = useState(null);
  const [selectedCampYear, setSelectedCampYear] = useState('first-year');
  const [selectedEvent, setSelectedEvent] = useState('LD');
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);

  const resources = [
    { title: 'Tabroom/NSDA Account Setup', description: 'Learn how to create and manage your Tabroom account for tournaments.', icon: <FaUser className="text-blue-500" />, video: 'https://www.youtube.com/embed/DyTqMwhRJpo?autoplay=1&mute=1', instructions: ['Make a <a href="https://www.speechanddebate.org/" target="_blank" rel="noopener noreferrer" class="school-color">speechanddebate.org</a> account.', 'Request approval from the coach to be a member of the Westwood Debate team on the website.', 'Go to <a href="https://www.tabroom.com/" target="_blank" rel="noopener noreferrer" class="school-color">tabroom.com</a>.', 'Enter your speechanddebate.org credentials under the part where it says "NSDA Account Email" and "NSDA Password". If, for some reason, it does not work, create a new Tabroom account at the bottom of the page and click on "Create Account".', 'Once the account is created, on the top right, click on where it shows your email/username.', 'Here, you will be able to access upcoming tournaments, pairings, results, feedback, and sign ups!'] },
    { title: 'Debate Camps', description: 'Explore various debate camps to enhance your skills during the summer, with the top camp per event being the most reccommended.', icon: <FaCampground className="text-green-500" />, camps: camps },    { title: 'Competitor Information', description: 'View all of the upcoming debate tournaments as well as the handbook!', icon: <FaBook className="text-yellow-500" />, table: tournaments.tournaments, link: 'https://docs.google.com/document/d/1f664UoWMtlzLQR8yAixQxuB0Gfjoe80-/edit?usp=sharing&ouid=117176447592807710273&rtpof=true&sd=true' },
  ];

  const handleResourceClick = (resource) => setSelectedResource(resource);
  const closeModal = () => setSelectedResource(null);
  const handleCampYearChange = (year) => { setSelectedCampYear(year); setIsYearDropdownOpen(false); };
  const handleEventChange = (event) => { setSelectedEvent(event); setIsEventDropdownOpen(false); };
  const toggleYearDropdown = () => { setIsYearDropdownOpen(!isYearDropdownOpen); setIsEventDropdownOpen(false); };
  const toggleEventDropdown = () => { setIsEventDropdownOpen(!isEventDropdownOpen); setIsYearDropdownOpen(false); };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-8 md:py-16 mt-16 md:mt-12">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="school-color text-3xl md:text-5xl leading-tight font-bold text-center mb-2">Resources</motion.h1>
        <p className="text-white text-center mb-8">Click on a resource for more information!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-neutral-800 rounded-lg p-8 shadow-xl backdrop-blur-sm hover:bg-neutral-700 transition-all duration-300 hover:scale-105 cursor-pointer" onClick={() => handleResourceClick(resource)}>
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{resource.icon}</span>
                <h2 className="school-color text-xl md:text-2xl leading-tight font-bold">{resource.title}</h2>
              </div>
              <p className="text-white text-sm leading-relaxed">{resource.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedResource && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 text-white">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-neutral-800 rounded-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
              <button onClick={closeModal} className="absolute top-4 right-4 bg-orange-600 text-white py-2 px-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:rotate-3"><FaTimes /></button>
              <h2 className="school-color text-2xl md:text-3xl font-bold mb-4">{selectedResource.title}</h2>
              <p className="text-white mb-6">{selectedResource.description}</p>
              {selectedResource.video && (
                <div className="mb-6">
                  <h3 className="school-color text-xl font-semibold mb-2">Video Tutorial:</h3>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={selectedResource.video}
                      title="Tabroom Account Setup Tutorial"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-[400px] rounded-lg"
                    ></iframe>
                  </div>
                </div>
              )}
              {selectedResource.instructions && (
                <div className="mb-6">
                  <h3 className="school-color text-xl font-semibold mb-2">Instructions:</h3>
                  <ol className="list-decimal list-inside text-white">
                    {selectedResource.instructions.map((instruction, index) => (
                      <li key={index} className="mb-2" dangerouslySetInnerHTML={{ __html: instruction }}></li>
                    ))}
                  </ol>
                </div>
              )}
              {selectedResource.steps && (
                <>
                  <h3 className="school-color text-xl font-semibold mb-2">Steps:</h3>
                  <ol className="list-decimal list-inside text-white mb-6">{selectedResource.steps.map((step, index) => (<li key={index} className="mb-2">{step}</li>))}</ol>
                </>
              )}
              {selectedResource.table && (
                <div className="mb-4">
                  <h3 className="school-color text-xl font-semibold mb-2">Tournaments:</h3>
                  <div className="overflow-x-auto rounded-lg shadow-lg">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-neutral-700">
                          <th className="border-b border-neutral-600 p-2 sm:p-3 text-left text-sm sm:text-base">Name</th>
                          <th className="border-b border-neutral-600 p-2 sm:p-3 text-left text-sm sm:text-base">Date</th>
                          <th className="border-b border-neutral-600 p-2 sm:p-3 text-left text-sm sm:text-base">Circuit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedResource.table.map((tournament, index) => (
                          <tr key={index} className="hover:bg-neutral-700 transition-colors duration-200">
                            <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">{tournament.name}</td>
                            <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">{tournament.date}</td>
                            <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">{tournament.circuit}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {selectedResource.link && (<p className="text-base sm:text-lg font-semibold mb-3 sm:mb-4"><a href={selectedResource.link} className="school-color underline">Click on me </a>to view the Debate Handbook.</p>)}
              {selectedResource.camps && (
                <div className="mb-4">
                  <h3 className="school-color text-xl font-semibold mb-2">Debate Camps:</h3>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="relative">
                      <button onClick={toggleYearDropdown} className="px-4 py-2 rounded-lg bg-neutral-700 text-white flex items-center justify-between w-48">
                        {selectedCampYear === 'first-year' ? 'First Year Camps' : 'Second-Third Year Camps'}
                        <FaChevronDown className={`ml-2 transition-transform ${isYearDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isYearDropdownOpen && (
                        <div className="absolute z-10 mt-1 w-48 bg-neutral-700 rounded-lg shadow-lg overflow-hidden">
                          <button onClick={() => handleCampYearChange('first-year')} className="block w-full text-left px-4 py-2 hover:bg-neutral-600 transition-colors duration-200">First Year Camps</button>
                          <button onClick={() => handleCampYearChange('third-year')} className="block w-full text-left px-4 py-2 hover:bg-neutral-600 transition-colors duration-200">Second-Third Year Camps</button>
                        </div>
                      )}
                    </div>
                    <div className="relative">
                      <button onClick={toggleEventDropdown} className="px-4 py-2 rounded-lg bg-neutral-700 text-white flex items-center justify-between w-48">
                        {selectedEvent}
                        <FaChevronDown className={`ml-2 transition-transform ${isEventDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isEventDropdownOpen && (
                        <div className="absolute z-10 mt-1 w-48 bg-neutral-700 rounded-lg shadow-lg overflow-hidden">
                          <button onClick={() => handleEventChange('LD')} className="block w-full text-left px-4 py-2 hover:bg-neutral-600 transition-colors duration-200">Lincoln-Douglas</button>
                          <button onClick={() => handleEventChange('PF')} className="block w-full text-left px-4 py-2 hover:bg-neutral-600 transition-colors duration-200">Public Forum</button>
                          <button onClick={() => handleEventChange('CX')} className="block w-full text-left px-4 py-2 hover:bg-neutral-600 transition-colors duration-200">Policy</button>
                          <button onClick={() => handleEventChange('SPEECH')} className="block w-full text-left px-4 py-2 hover:bg-neutral-600 transition-colors duration-200">Speech</button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="overflow-x-auto rounded-lg shadow-lg">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-neutral-700">
                          <th className="border-b border-neutral-600 p-2 sm:p-3 text-left text-sm sm:text-base">Name</th>
                          <th className="border-b border-neutral-600 p-2 sm:p-3 text-left text-sm sm:text-base">Location</th>
                          <th className="border-b border-neutral-600 p-2 sm:p-3 text-left text-sm sm:text-base">Dates</th>
                          <th className="border-b border-neutral-600 p-2 sm:p-3 text-left text-sm sm:text-base">Website</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedResource.camps[selectedCampYear][selectedEvent].map((camp, index) => (
                          <tr key={index} className="hover:bg-neutral-700 transition-colors duration-200">
                            <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">{camp.name}</td>
                            <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">{camp.location}</td>
                            <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">{camp.dates}</td>
                            <td className="border-b border-neutral-600 p-2 sm:p-3 text-sm sm:text-base">
                              <a href={camp.website} target="_blank" rel="noopener noreferrer" className="text-orange-400">Website</a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}