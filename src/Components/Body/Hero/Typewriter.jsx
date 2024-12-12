import { useEffect, useState } from "react";

const Typewriter = () => {
  const phrases = ["Web Developer.", "Physics Enthusiast.", "Football Fan."];
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100); // Default typing speed

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    let typingTimeout;

    if (!isDeleting && currentText.length < currentPhrase.length) {
      // Typing characters
      typingTimeout = setTimeout(() => {
        setCurrentText((prev) => prev + currentPhrase.charAt(prev.length));
        setTypingSpeed(100); // Typing speed
      }, typingSpeed);
    } else if (isDeleting && currentText.length > 0) {
      // Deleting characters
      typingTimeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setTypingSpeed(50); // Deleting speed
      }, typingSpeed);
    } else if (!isDeleting && currentText.length === currentPhrase.length) {
      // Pause before deleting
      typingTimeout = setTimeout(() => setIsDeleting(true), 1000); // Pause duration
    } else if (isDeleting && currentText.length === 0) {
      // Move to the next phrase
      setIsDeleting(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }

    return () => clearTimeout(typingTimeout); // Cleanup timeout
  }, [currentText, isDeleting]);

  return (
    <span id="dynamic-text" className="text-rose-600 dark:text-rose-600">
      {currentText}
    </span>
  );
};

export default Typewriter;
