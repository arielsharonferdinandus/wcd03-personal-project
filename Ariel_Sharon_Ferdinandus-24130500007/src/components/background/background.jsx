import { useDayNight } from '../../contexts/DayNightContext';
import Moon from '/Moon.svg';
import Night from '/Night.jpg';
import Ground from '/Ground.svg';
import Day from '/Day.jpg';
import Navbar from '../navbar/navbar';
import About from '../layouts/home/about';
import Works from '../layouts/home/works';
import Karo from '../carousel/carousel';

export default function Background() {
  const { showDay, toggleDayNight } = useDayNight();

  console.log('showDay:', showDay);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onClick={toggleDayNight}
    >
      <Navbar showDay={showDay} />
      <About showDay={showDay} />
      <Works showDay={showDay} />
      <Karo showDay={showDay} />

      {/* Sky: Day */}
      <div
        className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-1000 ${
          showDay ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
        style={{ backgroundImage: `url(${Day})` }}
      >
        {/* Sun */}
        <div
          className={`
            absolute bg-[#f8fae2]
            w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-42 lg:h-42 
            transition-all duration-1000 
            ${showDay ? 'top-1/7 left-10 opacity-100' : 'top-[150%] left-10 opacity-0'}
          `}
        />
      </div>

      {/* Night Sky */}
      <div
        className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-1000 ${
          showDay ? 'opacity-0 z-0' : 'opacity-100 z-10'
        }`}
        style={{ backgroundImage: `url(${Night})` }}
      >
        {/* Moon */}
        <img
          src={Moon}
          alt="Moon"
          className={`
            absolute image-render-pixel 
            w-20 sm:w-24 md:w-32 lg:w-42 
            transition-all duration-1000 
            ${showDay ? 'top-[150%] right-10 opacity-0' : 'top-1/7 right-10 opacity-100'}
          `}
        />
      </div>

      {/* Ground */}
      <div
        className="
          absolute bottom-0 w-full h-24 sm:h-32 md:h-40 
          bg-cover bg-repeat-x animate-ground-move z-30
        "
        style={{ backgroundImage: `url(${Ground})` }}
      />
    </div>
  );
}
