import React from 'react';
import { useState } from 'react';
// import linkedinIcon from '../../../public/images/icons8-linkedin-48.png';
// import twitterIcon from '../../../public/images/icons8-twitter-48.png';
// import githubIcon from '../../../public/images/icons8-github-64.png';
import email from '../../images/email-part-2-svgrepo-com.svg'

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
        <a href="https://www.linkedin.com/in/ayush02jaiswal/" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" className="w-15 h-14" viewBox="0 0 48 48">
          <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
          </svg>
        </a>
        <a href="https://twitter.com/ayush02dev/" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-15 h-14" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
          <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
          </svg>
        </a>
        <a href="https://github.com/soulmini" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" className="w-15 h-14" viewBox="0 0 48 48">
          <linearGradient id="1XJuQMc3whEUIMH7nHBV6a_wmRK8s3HIS45_gr1" x1="-1.151" x2="62.752" y1="9.473" y2="46.368" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#262626" stop-opacity="0"></stop><stop offset="1" stop-color="#262626" stop-opacity=".8"></stop></linearGradient><path fill="url(#1XJuQMc3whEUIMH7nHBV6a_wmRK8s3HIS45_gr1)" d="M44,24c0-11.046-8.954-20-20-20S4,12.954,4,24c0,8.885,5.799,16.407,13.815,19.014	c-0.001,0-0.003,0-0.004,0C19.755,43.668,21.833,44,24,44c2.166,0,4.243-0.332,6.19-0.984c-0.305,0.056-0.603-0.04-0.825-0.23	c0.22,0.187,0.515,0.281,0.816,0.229C38.199,40.411,44,32.887,44,24z M17.815,43.014c0.302,0.054,0.599-0.039,0.82-0.226	C18.414,42.975,18.117,43.068,17.815,43.014z M18.901,42.444c-0.052,0.108-0.132,0.195-0.216,0.278	C18.769,42.639,18.849,42.552,18.901,42.444z M29.1,42.444c0.053,0.109,0.133,0.199,0.218,0.283	C29.234,42.643,29.153,42.553,29.1,42.444z"></path><linearGradient id="1XJuQMc3whEUIMH7nHBV6b_wmRK8s3HIS45_gr2" x1="-4.664" x2="45.347" y1="-3.232" y2="46.779" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#262626" stop-opacity="0"></stop><stop offset="1" stop-color="#262626" stop-opacity=".8"></stop></linearGradient><path fill="url(#1XJuQMc3whEUIMH7nHBV6b_wmRK8s3HIS45_gr2)" d="M37,23.5c0-2.897-0.875-4.966-2.355-6.424C35.591,15.394,34.339,12,34.339,12	c-2.5,0.5-4.367,1.5-5.609,2.376C27.262,14.115,25.671,14,24,14c-1.71,0-3.339,0.118-4.834,0.393	c-1.242-0.879-3.115-1.889-5.632-2.393c0,0-1.284,3.492-0.255,5.146C11.843,18.6,11,20.651,11,23.5c0,6.122,3.879,8.578,9.209,9.274	C19.466,33.647,19,34.764,19,36v0.305c-0.163,0.045-0.332,0.084-0.514,0.108c-1.107,0.143-2.271,0-2.833-0.333	s-1.229-1.083-1.729-1.813c-0.422-0.616-1.263-2.032-3.416-1.979c-0.376-0.01-0.548,0.343-0.5,0.563	c0.043,0.194,0.213,0.5,0.896,0.75c0.685,0.251,1.063,0.854,1.438,1.458c0.418,0.674,0.417,2.468,2.562,3.416	c1.53,0.677,2.988,0.594,4.097,0.327l0.001,3.199c0,0.639-0.585,1.125-1.191,1.013C19.755,43.668,21.833,44,24,44	c2.166,0,4.243-0.332,6.19-0.984C29.584,43.127,29,42.641,29,42.002V36c0-1.236-0.466-2.353-1.209-3.226	C33.121,32.078,37,29.622,37,23.5z"></path>
          </svg>
        </a>
      </div>


      <div className="text-center sm:text-center mt-8">
        <div className="bg-black rounded-lg shadow-lg p-4 flex flex-col sm:flex-row justify-center items-center gap-4">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">📨</p>
            <p>ayush02jaiswal@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">📞</p>
            <p>+917052355283</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
