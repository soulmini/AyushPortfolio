"use client";
import React from "react";

function Resume() {
  return (
        <div className="flex justify-center ">
            <button
                className="bg-white text-black py-2 px-4 rounded-lg shadow hover:bg-gray-200 transition-colors duration-300 mb-2"
                onClick={() => {
                // Add functionality to trigger the download
                window.open("https://example.com/resume.pdf"); // Replace with your actual resume link
                }}
            >
                Download Resume
            </button>
        </div>

  );
}


export default Resume


