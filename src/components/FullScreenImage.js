// FullScreenImage.jsx
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../assets/style.css';

const FullScreenImage = ({ src, onClose, onPrev, onNext }) => {
  const [visible, setVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in transitions
    const t1 = setTimeout(() => setVisible(true), 10);
    const t2 = setTimeout(() => setImageVisible(true), 80);

    const handleKeydown = (e) => {
      if (e.key === 'Escape') {
        if (typeof onClose === 'function') onClose();
      } else if (e.key === 'ArrowLeft') {
        if (typeof onPrev === 'function') onPrev();
      } else if (e.key === 'ArrowRight') {
        if (typeof onNext === 'function') onNext();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose, onPrev, onNext]);

  const handleClose = () => {
    // Trigger fade-out transitions
    setImageVisible(false);
    setVisible(false);
    setTimeout(() => {
      if (typeof onClose === 'function') onClose();
    }, 300); // matches transition duration
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      aria-modal="true"
      role="dialog"
      onClick={handleClose} // close on background click
    >
      {/* Soft gray faded background */}
      <div
        className={`absolute inset-0 bg-gray-300 transition-opacity duration-300 ${
          visible ? 'opacity-80 backdrop-blur-md' : 'opacity-0'
        }`}
      ></div>

      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-white text-3xl p-2 z-60"
        onClick={(e) => {
          e.stopPropagation();
          handleClose();
        }}
        aria-label="Close"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>

      {/* Left arrow */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2 z-60"
        onClick={(e) => {
          e.stopPropagation();
          if (typeof onPrev === 'function') onPrev();
        }}
        aria-label="Previous image"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* Image */}
      <img
        src={src}
        alt="Fullscreen"
        onClick={(e) => e.stopPropagation()}
        className={`max-w-full max-h-full object-contain rounded transition-opacity duration-300 ${
          imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}
        style={{ transitionProperty: 'opacity, transform' }}
      />

      {/* Right arrow */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2 z-60"
        onClick={(e) => {
          e.stopPropagation();
          if (typeof onNext === 'function') onNext();
        }}
        aria-label="Next image"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default FullScreenImage;
