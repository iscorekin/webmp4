import { useState, useEffect, useRef } from 'react';

export default function useComponentVisible(initialVisible) {
  const [isComponentVisible, setComponentVisible] = useState(initialVisible);
  const ref = useRef(null);

  const handleClickOutside = event => {
    if (event.target.id === 'close-button' || event.target.closest('#close-button')) {
      return setComponentVisible(false);
    }

    if (ref.current && !ref.current.contains(event.target)) {
      setComponentVisible(false);
    }
    return null;
  };

  useEffect(() => {
    /* W3C DOM */
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setComponentVisible };
}
