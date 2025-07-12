import Navbar from '../components/navbar/navbar';
import Background from '../components/background/background';
import About from '../components/layouts/home/about';
import Works from '../components/layouts/home/works';
import Karo from'../components/carousel/carousel';

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Background />
      <About />
      <Works />
      <Navbar />
      <Karo />
    </div>
  );
}