import { useEffect, useRef } from 'react';
import usePortfolioContext from './usePortfoliocontext';

const useScroll = () => {
    const offset: React.MutableRefObject<number> = useRef(0);
    const { scroll, setScroll } = usePortfolioContext();
 
    useEffect(() => {
        //no need to run stickman if we do not need it   
        window.addEventListener('scroll', scrollControl);
        return () => window.removeEventListener('scroll', scrollControl);
    }, []);

    const scrollControl = () => {
        //set offset first time to scrollY so that stickman starts with the correct scroll
      if (offset.current === 0) offset.current = window.scrollY;
            //check if offset is 50 more than previous, if so then increment scrolling by 1
        const current = Math.floor((window.scrollY - offset.current) / 40);
        if (scroll === current) return;
            //return scroll from 2 to 18 so that div is ranged from 10% to 90%.
        return current < 20 && current > 2 ? setScroll(current) : current >= 20 ? setScroll(20) : setScroll(2);    
      };

    return scroll
};

export default useScroll;