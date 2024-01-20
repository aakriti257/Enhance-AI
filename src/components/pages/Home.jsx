import 'animate.css';
import React from 'react';
import blur from "../../images/blur.jpg";
import unblur from "../../images/unblur.jpg";
import Loader from '../../images/Loader';

function HomePage() {
  
  return (
    <div className="h-screen flex flex-col items-center justify-start bg-gradient-to-tl from-black to-gray-900 p-7">
  <h1 className="text-gray-300 text-5xl font-serif font-bold text-center animate__animated animate__slideInLeft mb-4">
    Enhance your Image with AI
  </h1>
  <div className="flex justify-center items-center px-15 py-12 h-42 mt-4">
    <div className="flex ">
      <div className="w-1/2 flex items-center justify-center">
        <img className="object-cover object-center w-64 h-64 rounded-full" src={blur} alt="before" />
      </div>
      <div className="flex justify-center items-center w-40 m-6">
        <Loader />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <img className="object-cover object-center w-64 h-64 rounded-full" src={unblur} alt="after" />
      </div>
    </div>
  </div>
</div>


  )
}

export default HomePage;


