import React from "react";

function Resume() {
  const handleDownload = () => {
    // Add functionality to trigger the download
    window.location.href = "https://drive.google.com/file/d/1o9GoZrXjeXHOYFogjqw139JZl_vQzrBv/view?usp=drivesdk"; // Replace with your actual resume link
  };

  return (
    <div className="flex justify-center ">
      <button
        className="bg-white text-black py-2 px-4 rounded-lg shadow hover:bg-gray-200 transition-colors duration-300"
        onClick={handleDownload}
      >
        Download Resume
      </button>
    </div>
  );
}

export default Resume;
