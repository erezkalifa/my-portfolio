import React, { useState } from "react";
import Lottie from "react-lottie";
import js from "../assets/logo3D/javascript.json";
import css from "../assets/logo3D/css.json";
import github from "../assets/logo3D/github.json";
import html from "../assets/logo3D/html.json";
import react from "../assets/logo3D//react.json";
import mongoDB from "../assets/logo3D/mongoDB.json";

const Animations = () => {
  const animations = [
    {
      id: 1,
      animationData: js,
      title: "JavaScript",
    },
    {
      id: 2,
      animationData: css,
      title: "CSS",
    },
    {
      id: 3,
      animationData: react,
      title: "React",
    },
    {
      id: 4,
      animationData: html,
      title: "HTML",
    },
    {
      id: 5,
      animationData: github,
      title: "GitHub",
    },
    {
      id: 6,
      animationData: mongoDB,
      title: "mongoDB",
    },
  ];

  const [isHovered, setIsHovered] = useState(null);

  const handleMouseEnter = (id) => {
    setIsHovered(id);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const handleComplete = () => {
    setIsHovered(null);
  };

  return (
    <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
      {animations.map((anim) => (
        <div
          key={anim.id}
          className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500`}
          onMouseEnter={() => handleMouseEnter(anim.id)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-28 h-28 mx-auto">
            <Lottie
              options={{
                loop: false,
                autoplay: false,
                animationData: anim.animationData,
              }}
              isStopped={isHovered !== anim.id}
              isPaused={isHovered !== anim.id}
              eventListeners={[
                {
                  eventName: "complete",
                  callback: handleComplete,
                },
              ]}
            />
          </div>
          <p className="mt-4">{anim.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Animations;
