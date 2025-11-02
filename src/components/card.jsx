import React from "react";

export default function Card({ title, description, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 transition-colors duration-300">
      {/* Title */}
      {title && (
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          {title}
        </h2>
      )}

      {/* Description */}
      {description && (
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      )}

      {/* Extra Content */}
      {children}
    </div>
  );
}
