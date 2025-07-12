export default function About({ showDay }) {
  console.log('About showDay:', showDay);

  return (
    <div
      className={`
        relative z-20 text-left text-[#ededed] font-micro 
        px-8 sm:px-8 md:px-16 py-18 sm:py-12 transition-all duration-1000 ease-in-out 
        ${showDay ? 'top-9/10' : 'top-1/5 sm:top-1/8'} 
      `}
    >
      <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl -mb-2 sm:-mb-4">Hi,</h1>
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl -mb-2 sm:-mb-0">
        I'm Ariel Sharon Ferdinandus
      </h1>
      <p className="text-xl sm:text-3xl md:text-5xl lg:text-6xl -mb-4 sm:-mb-2">
        Manage Service | Graphic Design | UI/UX
      </p>
      <p className="
        text-md sm:text-2xl md:text-4xl lg:text-5xl -mb-8
        text-[#222222] hover:text-[#ededed] 
        duration-300 mt-4 max-w-full sm:max-w-[90%] md:max-w-[60%] lg:max-w-[39%]
      ">
        I'm Joker, just like Worker – Joke is my Work
      </p>
    </div>
  );
}
