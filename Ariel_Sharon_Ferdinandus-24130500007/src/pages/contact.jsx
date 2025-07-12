import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Background from '../components/background/background';

export default function Contact() {
  const navigate = useNavigate();
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  // Detect click outside the form
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        navigate('/');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [navigate]);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Background />

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* Foreground contact form */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-20 font-micro px-4">
        <div
          ref={formRef}
          className="flex flex-col gap-4 items-center text-white w-full sm:w-3/4 md:w-2/3 lg:w-1/2 bg-[#4f4f4f] border-t-4 border-r-4 border-b-4 border-l-4 border-t-[#585858] border-r-[#585858] border-b-[#1b1b1b] border-l-[#1b1b1b] p-6 sm:p-10 md:p-14 rounded-xl shadow-2xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center">GET IN TOUCH</h1>
          <h2 className="text-base sm:text-xl md:text-2xl text-center mb-2">Feel free to message me about anything!</h2>

          {submitted ? (
            <p className="text-green-300 text-lg sm:text-xl">✅ Message Sent!</p>
          ) : (
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-[#333] text-white border-b-2 border-[#888] focus:outline-none focus:ring-2 focus:ring-[#aaa] text-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-[#333] text-white border-b-2 border-[#888] focus:outline-none focus:ring-2 focus:ring-[#aaa] text-lg"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 rounded bg-[#333] text-white border-b-2 border-[#888] focus:outline-none focus:ring-2 focus:ring-[#aaa] text-lg"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#888] hover:bg-[#aaa] text-black py-2 rounded transition duration-300 font-bold text-lg"
              >
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
