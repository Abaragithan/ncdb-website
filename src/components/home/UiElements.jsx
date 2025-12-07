import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export const NavItemDesk = ({ name, href, HoverContent, isOpen, onMouseEnter, onMouseLeave }) => {
  const [open, setOpen] = useState(false);
  const closeTimeout = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout.current);
    setOpen(true);
    if (onMouseEnter) onMouseEnter();
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpen(false);
      if (onMouseLeave) onMouseLeave();
    }, 200);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        {HoverContent ? (
          <button className="flex items-center space-x-1 px-4 py-3 text-blue-900 hover:text-blue-700 font-semibold transition-colors rounded-lg hover:bg-blue-50 group">
            <span>{name}</span>
            <ChevronDownIcon className={`h-4 w-4 transition-transform ${open || isOpen ? 'rotate-180' : ''} group-hover:text-blue-700`} />
          </button>
        ) : (
          <Link
            to={href || "#"}
            className="block px-4 py-3 text-blue-900 hover:text-blue-700 font-semibold transition-colors rounded-lg hover:bg-blue-50"
          >
            {name}
          </Link>
        )}

        {/* Active indicator */}
        <div
          className={`absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-t-lg transition-all duration-300 origin-center ${(open || isOpen) ? "scale-x-100" : "scale-x-0"
            }`}
        />
      </div>

      {/* Dropdown Content */}
      <AnimatePresence>
        {(open || isOpen) && HoverContent && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full pt-3 z-50"
          >
            <div className="w-80">
              <div className="bg-white rounded-xl shadow-2xl border border-blue-100 overflow-hidden">
                <HoverContent />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Card Component
export const Card = ({ children, className = "", hover = false }) => (
  <div className={`bg-white rounded-xl shadow-lg border border-blue-100 p-6 ${hover ? 'hover:shadow-xl hover:border-blue-200 transition-all duration-300' : ''} ${className}`}>
    {children}
  </div>
);