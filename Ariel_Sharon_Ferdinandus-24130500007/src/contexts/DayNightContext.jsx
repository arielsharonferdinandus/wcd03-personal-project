import { createContext, useContext, useState } from 'react';

const DayNightContext = createContext();

export function DayNightProvider({ children }) {
  const [showDay, setShowDay] = useState(false);
  const toggleDayNight = () => setShowDay(prev => !prev);
  console.log('clicked')

  return (
    <DayNightContext.Provider value={{ showDay, toggleDayNight }}>
      {children}
    </DayNightContext.Provider>
  );
}

export function useDayNight() {
  return useContext(DayNightContext);
}
