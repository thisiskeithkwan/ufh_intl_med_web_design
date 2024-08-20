import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const institutions = [
  { name: 'Mayo Clinic', country: 'USA' },
  { name: 'Hospital for Special Surgery (HSS)', country: 'USA' },
  { name: 'SickKids', country: 'USA' },
  { name: 'Mass General Brigham (MGB)', country: 'USA' },
  { name: 'NewYork-Presbyterian', country: 'USA' },
  { name: 'Memorial Sloan Kettering Cancer Center', country: 'USA' },
  { name: 'Dana-Farber Cancer Institute', country: 'USA' },
  { name: 'MD Anderson Cancer Center', country: 'USA' },
  { name: 'Stanford Children\'s Health', country: 'USA' },
  { name: 'Cedars-Sinai Medical Center', country: 'USA' },
  { name: 'Houston Methodist Hospital', country: 'USA' },
  { name: 'Cleveland Clinic', country: 'USA' },
  { name: 'UC San Diego Health', country: 'USA' },
  { name: 'University of Texas Health', country: 'USA' },
  { name: 'University of Cincinnati', country: 'USA' },
  { name: 'Hong Kong Sanatorium & Hospital', country: 'Hong Kong' },
  { name: 'Queen Mary Hospital', country: 'Hong Kong' },
  { name: 'CUHK Medical Centre', country: 'Hong Kong' },
  { name: 'HKU-Shenzhen Hospital', country: 'Hong Kong' },
  { name: 'Parkway Health', country: 'Singapore' },
  { name: 'Raffles Medical Group', country: 'Singapore' },
  { name: 'Bumrungrad International Hospital', country: 'Thailand' },
  { name: 'Bangkok Dusit Medical Services', country: 'Thailand' },
  { name: 'Jetanin Institute', country: 'Thailand' },
];

const PartnerInstitutionsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % institutions.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + institutions.length) % institutions.length);
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {institutions.slice(currentIndex, currentIndex + 3).map((institution, index) => (
          <div key={index} className="w-1/3 px-4">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src={`https://placehold.co/200x100?text=${institution.name}`}
                alt={institution.name}
                className="mx-auto mb-4 rounded"
              />
              <h3 className="text-lg font-semibold text-[#003A8C]">{institution.name}</h3>
              <p className="text-sm text-gray-600">{institution.country}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        <ChevronLeft className="w-6 h-6 text-[#003A8C]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        <ChevronRight className="w-6 h-6 text-[#003A8C]" />
      </button>
    </div>
  );
};

export default PartnerInstitutionsCarousel;