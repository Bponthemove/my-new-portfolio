import { useState, useEffect } from "react";

const useVisible= (ref: any, rootMargin = "0px") => {
    const [isVisible, setIsVisible] = useState(false);
  
//parameter needs to be type checked

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          rootMargin
        }
      );
  
      const currentElement = ref?.current;
  
      if (currentElement) {
        observer.observe(currentElement);
      }
  
      return () => {
        observer.unobserve(currentElement);
      };
    }, []);
  
    return isVisible;
  };
  
  export default useVisible