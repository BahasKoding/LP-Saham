import { useState, useEffect } from 'react';

export const useScrollspy = (ids: string[], offset: number = 0) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      const elements = ids.map((id) => {
        const element = document.getElementById(id);
        if (element) {
          return {
            id,
            position: element.offsetTop,
            height: element.offsetHeight,
          };
        }
        return null;
      }).filter((item): item is NonNullable<typeof item> => item !== null);

      for (let i = elements.length - 1; i >= 0; i--) {
        const { id, position, height } = elements[i];
        if (scrollPosition >= position && scrollPosition < position + height) {
          setActiveId(id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ids, offset]);

  return activeId;
};