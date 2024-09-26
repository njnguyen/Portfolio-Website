import { useEffect, useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false); // Initial state of button

    // Controls when the button is visible
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top when clicked
    const scollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    // Actively monitors scrolling to toggle button
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    });

    return (
        <>
            {isVisible && (
                <div className="scroll-to-top" onClick={scollToTop}>
                    <IoIosArrowDropup size={20} />
                </div>
            )}
        </>
    );
}