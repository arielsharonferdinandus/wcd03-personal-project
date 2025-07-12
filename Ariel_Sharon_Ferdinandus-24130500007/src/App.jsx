import { useEffect, useState } from 'react';
import AppRoutes from './routes/AppRoutes';
import { DayNightProvider } from './contexts/DayNightContext';
import LoadingScreen from './components/loading/screen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const gifDuration = 6700; // duration of loading.gif in ms
    const timer = setTimeout(() => setIsLoading(false), gifDuration);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <DayNightProvider>
      <AppRoutes />
    </DayNightProvider>
  );
}

export default App;
