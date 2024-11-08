import React from "react";
import { projects } from "../utils/projects";

export default function className() {  

  return (
    <div className="max-w-4xl mx-auto justify-center py-12">
      <p className=" text-black text-4xl pt-4 font-bold text-center">
        Projects
      </p>

      <div className="flex flex-wrap justify-center pt-2">
        {projects.map((proj, index) => {
          return (
            <div
              className="flex flex-col w-100 h-200 p-10 m-6 overflow-hidden 
              bg-white shadow-2x1 rounded-xl sm:w-52"
              key={index}
            >
              <a href={proj.link} target="_blank">
                <img className="w-[130px] h-[120px] mx-auto" src={proj.img} />
                <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                  {proj.title}
                </p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
