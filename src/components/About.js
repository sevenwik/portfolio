import React from 'react';
import { useState, useEffect, useRef } from "react";
import useTypewriter from "react-typewriter-hook";

import pic from './17PW32.png'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import hr from './hr.png'

const MagicOcean = [
  "Vanakam",
  "Hello",
  "Namaste"
];
let index = 0;


function About() {

  const [magicName, setMagicName] = useState("Welcome!");
  const intervalRef = useRef({});
  const name = useTypewriter(magicName);
  useEffect(
    () => {
      intervalRef.current = setInterval(() => {
        index = index > 1 ? 0 : ++index;
        setMagicName(MagicOcean[index]);
      }, 2100);
      return function clear() {
        clearInterval(intervalRef.current);
      };
    },
    [magicName]
  );


  return (
    <div className="overflow-x-scoll relative">
        <div className="sm:static lg:inset-x-0 lg:top-0 sm:top-0 sm:inset-x-0  h-64 w-screen bg-darkBlue">
        <div class="sm:invisible lg:visible grid grid-cols-3">
            <div class="text-center">1</div>
            <div class="text-center">2</div>
              <div class="text-center">3</div>
        </div>

        </div>
       
      <div className="absolute inset-x-0 top-0 sm:w-4/5 lg:grid lg:grid-cols-3 lg:max-w-xl sm:mt-12 lg:mt-24 mx-auto bg-blue rounded-lg overflow-hidden shadow-1">
          <img className="lg:col-span-1 rounded-full mx-auto lg:mt-6 lg:mb-6 lg:ml-16 sm:mt-6 h-48 w-40 flex items-center justify-center" src={pic} alt="Profile Pic"/>
          <div className="lg:col-span-2 lg:mt-8 px-8 py-6 pb-8 ">
            <div className="font-name text-3xl mb-6 lg:pb-2 sm:text-center mx-auto">Sathwik Ch</div>
              <img className="rounded-2 mx-auto mt-4 h-1 w-20  flex items-center justify-center" src={hr} alt="horizontal"/>
              <h1 className="whitespace-pre pt-6 lg:pl-4 lg:mt-2 font-bold font-role text-center text-xl">SOFTWARE  DEVELOPER</h1>
          </div>
            <div className="lg:col-span-3 flex items-center bg-white h-12 mb-8">
                <div className="flex-1 w-1/3 h-full text-center pt-2"><a href="mailto:sathwikchepyala99@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size='2x' color='#C71610'/></a></div>
                <div className="flex-1 w-1/3 h-full text-center pt-2"><a href="https://github.com/sevenwik" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='2x' color="#333"/></a></div>
                <div className="flex-1 w-1/3 h-full text-center pt-2"><a href="https://www.linkedin.com/in/chsathwik/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size='2x' color='#0e76a8'/></a></div>
            </div>
        </div>
        <div className="bg-white">
          <div>
            <h1 className="whitespace-pre lg:pt-56 lg:pl-40 lg:text-6xl sm:text-4xl lg:mt-0 sm:mt-64 sm:ml-8 sm:pt-10 font-role"> {name}</h1>
          </div>
        </div>
      </div>
  );
}

export default About;