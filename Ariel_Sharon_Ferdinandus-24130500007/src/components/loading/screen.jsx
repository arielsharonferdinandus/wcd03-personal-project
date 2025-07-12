import loadingGif from '/loading.gif';
import loadingBg from '/loading_bg.png';

export default function LoadingScreen() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${loadingBg})` }}
    >
      <img src={loadingGif} alt="Loading..." className="w-50 sm:w-100 h-53 sm:h-106" />
    </div>
  );
}