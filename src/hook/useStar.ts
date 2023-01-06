import { useState, useEffect } from 'react';

export const useStarsNumber = (rating: any) => {
  const [stars, setStars] = useState<Array<string>>([]);

  useEffect(() => {
    const rate = rating;
    if (typeof rate == 'undefined') return;
    const numberOfStars = Math.round(rate);
    setStars(Array(numberOfStars).fill('star'));
  }, [rating]);

  return stars;
};
