import React from 'react';

const partnerInstitutions = [
    { name: "Mayo Clinic", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Mayo_Clinic_Logo_2023.png" },
    { name: "Cleveland Clinic", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Cleveland_Clinic_logo.svg/1280px-Cleveland_Clinic_logo.svg.png" },
    { name: "Johns Hopkins Hospital", logo: "https://seekvectorlogo.com/wp-content/uploads/2022/01/johns-hopkins-medicine-vector-logo-2022.png" },
    { name: "Massachusetts General Hospital", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6aPQFUHcLeno9SzF6_IVRaRKad-HlopJLxQ&s" },
    { name: "MD Anderson Cancer Center", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/MD_Anderson_Cancer_Center_logo.svg/640px-MD_Anderson_Cancer_Center_logo.svg.png" },
    // Add more partner institutions as needed
  ];

export default function PartnerInstitutions() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#003A8C] mb-8 text-center">我们的合作伙伴</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partnerInstitutions.map((institution, index) => (
            <div key={index} className="flex flex-col items-center">
              <img 
  src={institution.logo} 
  alt={institution.name} 
  className="h-24 object-contain mx-auto"
/>
              <p className="text-center mt-4 text-sm font-semibold">{institution.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}