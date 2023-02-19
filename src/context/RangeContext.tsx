import { createContext, useState } from 'react';

interface RangeContextProps {
  rangeValue: number;
  handleChange: (event: any) => void;
}

export const RangeContext = createContext({} as RangeContextProps);

export const RangeProvider = ({ children }: any) => {
  const [rangeValue, setRangeValue] = useState(1000);

  const handleChange = (event: any): void => {
    setRangeValue(event.target.value);
  };
  return (
    <RangeContext.Provider value={{ rangeValue, handleChange }}>
      {children}
    </RangeContext.Provider>
  );
};
