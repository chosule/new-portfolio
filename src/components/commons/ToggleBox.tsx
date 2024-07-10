"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

type Props = {
  children: React.ReactNode;
  className?: string;
};
export default function ToggleBox({ children, className }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${className}`}>
      <div className="flex items-center gap-1">
        <div className="text-sm">
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        <button
          onClick={toggleBox}
          className="hover:text-orange-600 focus:outline-none text-sm text-[#858585] underline"
        >
          일부 코드 보기
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-white  rounded w-full overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
