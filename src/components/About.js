import React from 'react';
import { useState, useEffect, useRef } from "react";
import useTypewriter from "react-typewriter-hook";

import pic from './17PW32.png'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import hr from './hr.png'

const MagicOcean = [
  "Vanakkam",
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
    <div>
    <div className="overflow-x-scoll lg:h-screen relative bg-light">
      <div class="lg:visible md:visible sticky top-0 flex flex-wrap xs:bg-darkBlue md:bg-light p-4 font-bold font-role text-xl">
        <div className="flex mx-auto">
          <div className="flex-1 text-center hover:text-gray-700 lg:pr-24 xs:pr-10">Resume</div>
          <div className="flex-1 text-center hover:text-gray-700 ">Projects</div>
          <div className="flex-1 text-center hover:text-gray-700 lg:pl-24 xs:pl-10">Contact</div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/3 lg:w-2/5 md:w-1/2 text-center sm:pr-8">
          <div className="xs:w-screen xs:h-64 md:h-0 bg-darkBlue"></div>
            <div className="inset-x-0 top-0 xs:mt-12 xs:absolute md:static sm:static lg:static xs:w-4/5 lg:w-2/3 md:w-4/5 lg:my-16 lg:ml-24 md:ml-12 md:mt-16 xs:mt-20 xs:mx-auto bg-blue rounded-lg items-center jutify-center overflow-hidden shadow-1">
              <img className="rounded-full mx-auto lg:mt-6 xs:mt-4 flex items-center justify-center w-40 h-48" src={pic} alt="Profile Pic"/>
                <div className="lg:mt-4 md:mt-4 px-8 pb-8 ">
                  <div className="font-name text-3xl mb-4 lg:pb-2 sm:text-center xs:mt-2 mx-auto">Sathwik Ch</div>
                   <img className="rounded-2 mx-auto mt-4 h-1 w-20  flex items-center justify-center" src={hr} alt="horizontal"/>
                    <h1 className="pt-6 font-bold font-role mx-auto text-xl">SOFTWARE  DEVELOPER</h1>
                </div>
                <div className="flex items-center bg-light h-12 mb-8">
                  <div className="flex-1 w-1/3 h-full text-center pt-2"><a href="mailto:sathwikchepyala99@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size='2x' color='#C71610'/></a></div>
                  <div className="flex-1 w-1/3 h-full text-center pt-2"><a href="https://github.com/sevenwik" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='2x' color="#333"/></a></div>
                  <div className="flex-1 w-1/3 h-full text-center pt-2"><a href="https://www.linkedin.com/in/chsathwik/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size='2x' color='#0e76a8'/></a></div>
                </div>
            </div>
          </div>
        <div className="sm:w-1/2 md:w-1/2 lg:3/5 xs:pt-64 sm:pl-8 sm:py-0 border-gray-300 sm:mt-0 sm:text-left lg:w-full xs:p-10">
          <div className="w-full lg:mt-20 md:mt-20">
            <h1 className="whitespace-pre font-role font-bold lg:text-6xl md:text-4xl xs:text-4xl "> {name}</h1>
            <h2 className="whitespace-pre-wrap font-role mt-4 lg:text-4xl md:text-2xl xs:text-2xl lg:ml-4 md:ml-2 xs:ml-2">Here's who I am & what I do</h2>
            <div className="lg:w-3/4 md-w-full xs:w-full ">
            <p className="lg:whitespace-pre-wrap font-role lg:text-2xl md:text-xl xs:text-xl mt-10 lg:ml-4 md:ml-2 xs:ml-2">I'm a paragraph. Click here to add your own text and edit me. 
            It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.I’m a great place for you to tell a story and let your users know a little more about you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

export default About;