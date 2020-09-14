import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import './css/scroll.css';

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 150) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 150) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <FaArrowCircleUp
      className="scrollTop"
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
    />
  );
};

export default ScrollArrow;
