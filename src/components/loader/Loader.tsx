import React from "react";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-24 h-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse"></div>
        <div className="absolute inset-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full animate-pulse"></div>
        <div className="absolute inset-4 bg-gradient-to-r from-blue-800 to-blue-900 rounded-full animate-pulse"></div>
        <div className="absolute inset-6 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full animate-pulse"></div>
        <div className="absolute inset-8 bg-gradient-to-r from-blue-800 to-blue-600 rounded-full animate-pulse"></div>
        <div className="absolute inset-10 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute inset-12 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full animate-pulse"></div>
        <div className="absolute inset-14 bg-gradient-to-r from-blue-200 to-blue-100 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}
