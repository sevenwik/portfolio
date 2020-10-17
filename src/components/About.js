import React from 'react';
import pic from './17PW32.png'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import hr from './hr.png'
function About() {

  return (
    <div className="relative">
        <div className="z-0 lg:fixed sm:static lg:inset-x-0 lg:top-0 sm:top-0 sm:inset-x-0 lg:w-1/3 lg:h-screen sm:h-64 sm:w-screen bg-darkBlue"></div>
          <div className="absolute lg:inset-y-0 lg:right-0 lg:w-2/3 bg-white">
            
        </div>
      <div className="z-0 lg:fixed sm:absolute inset-x-0 top-0 sm:w-4/5 lg:max-w-sm sm:mt-16 lg:my-20 lg:ml-32 sm:mx-auto bg-blue rounded overflow-hidden shadow-1">
          <img className="rounded-full mx-auto mt-6 h-48 w-40 flex items-center justify-center" src={pic} alt="Profile Pic"/>
          <div className="px-8 py-6 pb-8">
            <div className="font-name text-3xl mb-6 text-center">Sathwik Ch</div>
              <img className="rounded-2 mx-auto mt-4 h-1 w-20 flex items-center justify-center" src={hr} alt="Profile Pic"/>
              <h1 className="whitespace-pre pt-6 font-bold font-role text-center text-xl">SOFTWARE  DEVELOPER</h1>
          </div>
            <div className="flex items-center bg-white h-12 mb-8">
                <div className="flex-1 w-1/3 h-full text-center pt-2"><a href="mailto:sathwikchepyala99@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size='2x' color='#C71610'/></a></div>
                <div className="flex-1 w-1/3 h-full text-center pt-2"><a href="https://github.com/sevenwik" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='2x' color="#333"/></a></div>
                <div className="flex-1 w-1/3 h-full text-center pt-2"><a href="https://www.linkedin.com/in/chsathwik/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size='2x' color='#0e76a8'/></a></div>
            </div>
        </div>
      </div>
  );
}

export default About;