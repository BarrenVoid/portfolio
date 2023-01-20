import React from "react";

const Footer = () => {
  return (
      <div id="footer" className="flex flex-col items-center p-6">
        <p className="flex">
          Built by Tony Le with
          <img className="w-8 h-8 ml-1" alt="react icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
        </p>

        <p className="text-center">
          Inprired by
          <a className="text-[#61DBFB]" href="https://rickyla.ca/"> Ricky La</a>,
          <a className="text-[#61DBFB]" href="https://www.jarrodservilla.com/"> Jarrod Servilla</a>, and
          <a className="text-[#61DBFB]" href="https://tamalsen.dev/"> Tamal Sen</a>
        </p>
      </div>
    )
}

export default Footer