import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-white">
      {/* Background Curves */}
      <div
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-100 rounded-bl-[100%]"
        style={{
          borderBottomLeftRadius: "100%",
          transform: "translate(15%, -15%)",
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-amber-100 rounded-tr-[100%]"
        style={{
          borderTopRightRadius: "100%",
          transform: "translate(-15%, 15%)",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full">
        {/* Error Code */}
        <h1 className="text-[120px] font-black text-gray-900 mb-2 leading-none">
          404
        </h1>

        {/* Message */}
        <h2 className="text-4xl font-semibold text-gray-900 mb-16">
          We're working on it!
        </h2>

        {/* Illustration */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-gray-50 rounded-xl p-12 relative">
            {/* Window Controls */}
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>

            {/* Illustration Content */}
            <div className="flex justify-center items-end gap-8 h-[300px]">
              {/* Person with Orange Shirt */}
              <div className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24">
                    <div className="w-16 h-16 bg-orange-400 rounded-full absolute bottom-16"></div>
                    <div className="w-24 h-32 bg-orange-400 absolute bottom-0 rounded-t-2xl"></div>
                  </div>
                </div>
              </div>

              {/* UI Element */}
              <div className="w-48 h-64 bg-gray-100 rounded-lg flex items-center justify-center p-4">
                <div className="w-full h-full bg-white rounded-lg flex flex-col gap-4 p-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full"></div>
                  <div className="w-full h-2 bg-gray-200 rounded"></div>
                  <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
                  <div className="w-full h-24 bg-blue-100 rounded"></div>
                </div>
              </div>

              {/* Person with Pink Shirt */}
              <div className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24">
                    <div className="w-16 h-16 bg-pink-400 rounded-full absolute bottom-16"></div>
                    <div className="w-24 h-32 bg-purple-500 absolute bottom-0 rounded-t-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Go Home Button */}
        <Link
          to="/"
          className="inline-flex items-center px-8 py-3 text-lg font-medium text-gray-900 bg-white rounded-full border-2 border-gray-900 hover:bg-gray-50 transition-colors gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
