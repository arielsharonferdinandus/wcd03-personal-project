export default function Works({ showDay }) {
  console.log('Works showDay:', showDay);

  const companies = [
    {
      name: 'Perkom Indah Murni',
      logo: '/PIM.png',
      position: 'Managed Service',
      period: '2024–Present',

    },
    {
      name: 'Medicalogy.com',
      logo: '/Medicalogy.png',
      position: 'Graphic Designer',
      period: '2022–2024',

    },
    {
      name: 'Kasih Karunia Kekal',
      logo: '/KKK.png',
      position: 'Field Engineer',
      period: '2021–2022',
    },
  ];

  return (
    <div
      className={`relative flex flex-col justify-between items-center z-20 py-20 text-[#222] font-micro transition-all duration-1000 ease-in-out
        ${showDay ? '-top-1/7 sm:-top-1/3 pointer-events-auto' : 'top-9/10 pointer-events-auto'}`}
    >
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-center -mb-2 sm:-mb-4 md:-mb-6 lg:-mb-8">MY PREV COMPANIES</h1>
      <h2 className="text-md sm:text-2xl md:text-4xl lg:text-5xl text-center mb-[5%]">Here are some of the companies where I have worked.</h2>

      <div className="flex gap-2 sm:gap-3 md:gap-6 items-center text-white w-8/9 sm:w-1/2 md:w-3/4">
        {companies.map((company, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center bg-[#4f4f4f] border-t-4 border-r-4 border-b-4 border-l-4 border-t-[#585858] border-r-[#585858] border-b-[#1b1b1b] border-l-[#1b1b1b] p-2 sm:p-4 md:p-6 lg:p-8 rounded-s max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl w-full">
            <img src={company.logo} alt={company.name} className="w-20 sm:w-40 h-20 sm:h-40 object-contain mb-4 overflow-hidden duration-300 hover:scale-125" />
            <h3 className="text-xs sm:text-xl md:text-2xl lg:text-5xl font-bold">{company.name}</h3>
            <h4 className="text-xs sm:text-xl md:text-2xl lg:text-3xl">{company.position}</h4>
            <p className="text-xs sm:text-xl md:text-2xl lg:text-3xl mb-1 text-[#aaa]">{company.period}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
