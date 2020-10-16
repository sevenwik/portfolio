import React from 'react';
import pic from './17PW32.png'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import hr from './hr.png'
function About() {

  return (
    <div className="relative">
        <div className="static lg:inset-y-0 lg:left-0 sm:top-0 sm:inset-x-0 lg:w-2/5 lg:h-screen sm:h-64 sm:w-screen bg-darkBlue"></div>
          <div className="absolute lg:visible sm:invisible lg:inset-y-0 lg:right-0 lg:w-3/5 bg-white">
          </div>

        <div className="absolute inset-x-0 top-0 sm:w-4/5 lg:max-w-sm sm:mt-16 lg:mt-20 lg:ml-48 sm:mx-auto bg-blue rounded overflow-hidden shadow-1">
          <img className="rounded-full mx-auto mt-4 h-48 w-40 flex items-center justify-center" src={pic} alt="Profile Pic"/>

          <div className="px-8 py-6 pb-8">
            <div className="font-semibold font-name text-3xl mb-2 mt-1 text-center">Sathwik Ch</div>
              <img className="rounded-2 mx-auto mt-4 h-1 w-20 flex items-center justify-center" src={hr} alt="Profile Pic"/>
              <h1 className="pt-6 font-role text-center text-xl">SOFTWARE DEVELOPER</h1>
            </div>
            <div class="flex items-center bg-white h-12 mb-8">
                <div className="flex-1 w-1/3 h-full text-center pt-2"><a href="https://www.facebook.com/sathwik.ch/" target="_blank"><FontAwesomeIcon icon={faFacebook} size='2x'/></a></div>
                <div className="flex-1 w-1/3 h-full text-center pt-2"><a href="https://github.com/sevenwik" target="_blank"><FontAwesomeIcon icon={faGithub} size='2x'/></a></div>
                <div className="flex-1 w-1/3 h-full bg-white text-center pt-2"><a href="https://www.linkedin.com/in/chsathwik/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size='2x'/></a></div>
            </div>

        </div>

    </div>
  );
}

export default About;