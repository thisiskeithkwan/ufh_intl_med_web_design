import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const institutions = [
  { name: 'Mayo Clinic', country: 'USA', imgUrl: '/images/mayo-clinic-logo.png' },
  { name: 'Hospital for Special Surgery (HSS)', country: 'USA', imgUrl: '/images/hss-logo.png' },
  { name: 'SickKids', country: 'USA', imgUrl: '/images/sickkids-logo.png' },
  { name: 'Mass General Brigham (MGB)', country: 'USA', imgUrl: '/images/mass-general-brigham-logo.png' },
  { name: 'Memorial Sloan Kettering Cancer Center', country: 'USA', imgUrl: '/images/mskcc-logo.png' },
  { name: 'Dana-Farber Cancer Institute', country: 'USA', imgUrl: '/images/dana-farber-logo.png' },
  { name: 'MD Anderson Cancer Center', country: 'USA', imgUrl: '/images/md-anderson-logo.png' },
  { name: 'Cedars-Sinai Medical Center', country: 'USA', imgUrl: '/images/cedars-sinai-logo.png' },
  { name: 'Hong Kong Sanatorium & Hospital', country: 'Hong Kong', imgUrl: '/images/hksh-logo.png' },
  { name: 'Queen Mary Hospital', country: 'Hong Kong', imgUrl: '/images/queen-mary-hospital-logo.png' },
  { name: 'CUHK Medical Centre', country: 'Hong Kong', imgUrl: '/images/cuhk-medical-centre-logo.png' },
  { name: 'HKU-Shenzhen Hospital', country: 'Hong Kong', imgUrl: '/images/hku-shenzhen.png' },
  { name: 'Parkway Health', country: 'Singapore', imgUrl: '/images/parkway-health-logo.png' },
  { name: 'Raffles Medical Group', country: 'Singapore', imgUrl: '/images/raffles-medical-group-logo.png' },
  { name: 'Bumrungrad International Hospital', country: 'Thailand', imgUrl: '/images/bumrungrad-international-hospital-logo.png' },
  { name: 'Bangkok Dusit Medical Services', country: 'Thailand', imgUrl: '/images/bangkok-dusit-medical-services-logo.png' },
  { name: 'Jetanin Institute', country: 'Thailand', imgUrl: '/images/jetanin-institute-logo.png' },
];

const PartnerInstitutionsBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % institutions.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + institutions.length) % institutions.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 800); // Rotate every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const visibleInstitutions = [
    ...institutions.slice(currentIndex),
    ...institutions.slice(0, currentIndex)
  ].slice(0, itemsPerPage);

  return (
    <div className="relative overflow-hidden py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <button onClick={prevSlide} className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 mr-4 focus:outline-none">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div className="overflow-hidden w-[900px] h-[150px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={{
                  enter: (direction) => ({ x: direction > 0 ? 900 : -900, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (direction) => ({ x: direction > 0 ? -900 : 900, opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }} // Faster transition
                className="flex justify-center items-center"
              >
                {visibleInstitutions.map((institution, index) => (
                  <div key={index} className="w-[280px] mx-2 p-4 bg-white rounded-lg shadow-md flex flex-col items-center justify-center">
                    <img
                      src={institution.imgUrl}
                      alt={institution.name}
                      className="w-full h-20 object-contain mb-2"
                    />
                    <p className="text-sm text-center text-gray-600 font-semibold">{institution.name}</p>
                    <p className="text-xs text-center text-gray-500">{institution.country}</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          <button onClick={nextSlide} className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 ml-4 focus:outline-none">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerInstitutionsBanner;