import React from "react";
import { skills } from "../utils/skillsObj";

export default function Skills() {

  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
      <p className=" text-black text-4xl pt-4 font-bold text-center">
        Tech I use
      </p>

      <div className="flex flex-wrap justify-center pt-2">
        {skills.map((skill, index) => {
          return (
            <div
            key={index}
              className="flex flex-col w-40 p-10 m-6 
                            overflow-hidden bg-white shadow-2x1 rounded-xl sm:w-52
                            
                            "
            >
              {skill.icon}
              <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                {skill.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
