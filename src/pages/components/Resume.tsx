import React from "react";

function Resume() {
  const handleDownload = () => {
    // Add functionality to trigger the download
    window.location.href = "https://drive.google.com/file/d/1YrXdItrzwQis3cdNZyXWKYqIZOu6JXm5/view?usp=drivesdk"; // Replace with your actual resume link
  };

  return (
    <div  className="flex bg-black justify-center " id = "resume">
      <button
        className="bg-white bg-opacity-75 hover:bg-opacity-100 text-black font-medium font-sanc py-2 px-4 rounded-lg shadow hover:bg-gray-200 transition-colors duration-300"
        onClick={handleDownload}
      >
        Download Resume
      </button>
    </div>
  );
}

export default Resume;
