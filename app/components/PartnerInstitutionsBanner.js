import React, { useState, useEffect, useCallback } from 'react';

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
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6;

  const showNext = useCallback(() => {
    setStartIndex((prevIndex) => (prevIndex + itemsPerPage) % institutions.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(showNext, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(interval);
  }, [showNext]);

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto relative">
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          {[...institutions, ...institutions].slice(startIndex, startIndex + itemsPerPage).map((institution, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center transition-transform hover:scale-105">
              <img
                src={institution.imgUrl}
                alt={institution.name}
                className="w-full h-20 object-contain mb-2"
              />
              <p className="text-xs text-center text-gray-600 font-semibold">{institution.name}</p>
              <p className="text-xs text-center text-gray-500">{institution.country}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerInstitutionsBanner;