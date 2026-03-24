import React from "react";

const Navbuttons = ({ label, sectionId, scrollToSection }) => {
  return (
    <DrawOutlineButton onClick={() => scrollToSection(sectionId)}>
      {label}
    </DrawOutlineButton>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative inline-flex items-center justify-center p-0 m-0
                 transition-colors duration-[400ms] hover:text-indigo-400
                 cursor-pointer"
    >
      <span className="px-4 py-1 m-0">{children}</span>

      <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-400 transition-all duration-100 group-hover:w-full" />

      <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-400 transition-all delay-100 duration-100 group-hover:h-full" />

      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-400 transition-all delay-200 duration-100 group-hover:w-full" />

      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-400 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};


export default Navbuttons;
