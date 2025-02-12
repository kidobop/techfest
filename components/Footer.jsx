"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-gray-800 bg-black px-4 py-4 sm:py-6">
      {/* Gradient Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-30" />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-6">
          {/* Logo and Copyright Section */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
            >
              Tech Aura
            </motion.div>
            <div className="text-xs sm:text-sm text-gray-400">
              © 2025 All rights reserved.
            </div>
          </div>

          {/* Institute Section */}
          <div className="flex flex-col items-center sm:items-end gap-2">
            <div className="text-sm sm:text-base text-gray-300 font-medium text-center sm:text-right">
              Maharajas Technological Institute
            </div>
            <div className="text-xs text-gray-400">Thrissur</div>
          </div>
        </div>

        {/* Modern Design Accent */}
        <div className="mt-4 pt-4 border-t border-gray-800/50">
          <div className="flex justify-center gap-1">
            <span className="h-1 w-1 rounded-full bg-gray-700" />
            <span className="h-1 w-1 rounded-full bg-gray-600" />
            <span className="h-1 w-1 rounded-full bg-gray-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}
