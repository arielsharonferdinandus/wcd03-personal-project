import { useNavigate } from 'react-router-dom';
import Contact from '/Contact.svg';

export default function Navbar({ showDay }) {
  const navigate = useNavigate();

  console.log('Navbar showDay:', showDay);

  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-4 py-3 z-30 bg-[#222]/60">
      <span className="
        text-5xl 
        sm:text-5xl 
        md:text-6xl 
        lg:text-7xl 
        tracking-widest 
        font-micro 
        transition-all 
        duration-500 
        text-[#ededed]
      ">
        ARIEL SHARON
      </span>

      <div
        onClick={() => navigate('/contact')}
        className="cursor-pointer w-13 h-13 sm:w-13 sm:h-13 md:w-14 md:h-14 lg:w-18 lg:h-18"
      >
        <img 
          src={Contact} 
          alt="Contact" 
          className="w-full h-full hover:brightness-60 transition duration-300 ease-in-out" 
        />
      </div>
    </nav>
  );
}
