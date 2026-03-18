import { useState, useEffect } from "react";

export const useScrollTop = (threshold = 10 ) => {
    const [scrolled, setScrolled] = useState(false); //array destructing to update value with function 

    useEffect (() => {
    const handleScroll = () => {
        if (window.scrollY > threshold) { // checks if the user scrolled past 10 px 
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    };
    
    window.addEventListener("scroll", handleScroll); //checks for the event (scrolling)   
                                                     // if it happens run handleScroll

    return () => window.removeEventListener("scroll", handleScroll); //cleanup function 
    }, [threshold]);
    return scrolled;
}