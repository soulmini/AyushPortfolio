import React from 'react';
import { useState } from 'react';

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="max-w-5xl mx-auto px-8 py-12 text-white">
      <p className="text-3xl font-bold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-900 py-8">
        Contact
      </p>

      <div className="flex flex-col gap-4 items-center sm:flex-row sm:justify-center">
        <button
          className="bg-white text-black py-2 px-4 rounded-lg shadow-md transition duration-300 mb-4 sm:mb-0 sm:mr-4"
          onClick={() => window.open('https://www.linkedin.com/your-profile', '_blank')}
        >
          LinkedIn
        </button>
        <button
          className="bg-white text-black py-2 px-4 rounded-lg shadow-md transition duration-300 mb-4 sm:mb-0 sm:mr-4"
          onClick={() => window.open('https://twitter.com/your-handle', '_blank')}
        >
          Twitter
        </button>
        <button
          className="bg-white text-black py-2 px-4 rounded-lg shadow-md transition duration-300 mb-4 sm:mb-0 sm:mr-4"
          onClick={() => window.open('https://github.com/your-profile', '_blank')}
        >
          GitHub
        </button>
      </div>

      <div className="text-center sm:text-center mt-8">
        <div className="bg-black rounded-lg shadow-lg p-4 flex flex-col sm:flex-row justify-center items-center gap-4">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">Email:</p>
            <p>youremail@example.com</p>
            <button
              className="bg-white text-black py-1 px-2 rounded-md shadow-md hover:bg-gray-200 transition duration-300"
              onClick={() => {
                copyToClipboard('youremail@example.com');
                setEmailCopied(true);
                setTimeout(() => setEmailCopied(false), 3000);
              }}
            >
              {emailCopied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">Phone:</p>
            <p>+1234567890</p>
            <button
              className="bg-white text-black py-1 px-2 rounded-md shadow-md hover:bg-gray-200 transition duration-300"
              onClick={() => {
                copyToClipboard('+1234567890');
                setPhoneCopied(true);
                setTimeout(() => setPhoneCopied(false), 3000);
              }}
            >
              {phoneCopied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
