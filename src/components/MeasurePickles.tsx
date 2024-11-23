import React, { useState } from 'react';
import Text from '../assets/img/text.svg';
import Pickle from '../assets/img/pickle.svg';

const MeasurePickles: React.FC = () => {
  const [showIframe, setShowIframe] = useState(false);

  const handleButtonClick = () => {
    console.log("📺 Button clicked");
    setShowIframe(true);
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        className="fixed bottom-5 right-5 w-20 h-20 p-0 bg-transparent border-none"
      >
        <img src={Text.src} alt="text" className="animate-spin-slow-reverse w-full h-full" />
        <img
          src={Pickle.src}
          className="absolute inset-0 m-auto w-5 h-5"
        />
      </button>
      {showIframe && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative">
            <iframe
              src="https://tbot.xyz/lumber/"
              width="100%" // Adjust width as needed
              height="600"
              title="Lumber"
              className="rounded-lg"
            ></iframe>
            <button
              onClick={() => setShowIframe(false)}
              className="absolute top-2 right-2 text-white bg-black rounded-full p-2"
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MeasurePickles;
