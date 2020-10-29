import React from 'react';


function Resume() {
  return (
      <div  className="mx-auto bg-light" id="resume">
          <div className="font-name text-center text-4xl">Resume</div>
          <div className="flex justify-between font-bold font-role text-xl mt-10">
            <div className="xs:ml-4 lg:ml-32 mt-4">Experience</div>
            <button className="xs:mr-4 lg:mr-32 bg-blue-600 hover:bg-light border border-blue-600 font-bold  px-4 rounded-full mt-2">View CV</button>
          </div>  

      </div>


);
}

export default Resume;