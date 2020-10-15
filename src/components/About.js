import React from 'react';
import pic from './17PW32.png'
function About() {

  return (
    <div className="relative">
        <div className="relative inset-y-0 left-0 lg:w-2/5 sm:w-1/2 h-screen bg-blue-500"></div>
        <div className="absolute inset-x-0 top-0 lg:max-w-sm sm:max-w-md lg:mx-48 lg:mt-32 sm:mt-32 sm:mx-20 bg-blue-300 rounded overflow-hidden shadow-2xl">
        <img className="rounded-full mx-auto mt-4 h-32 w-32 flex items-center justify-center" src={pic} alt="Profile Pic"/>

  <div className="px-6 py-4">
    <div className="font-bold font-body text-3xl mb-2 text-center">Sathwik Ch</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>

    </div>
  );
}

export default About;