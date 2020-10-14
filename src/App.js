import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner  } from '@fortawesome/free-solid-svg-icons'

import './App.css';


function App() {
  return (
    <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
    <div className="ml-6 pt-1">
      <div className="text-center">
    <FontAwesomeIcon icon={faSpinner} spin/>
    </div>

<h1 className="text-2xl text-blue-700 leading-tight">
Under Contruction  <br></br><br></br>     
Tools: TailwindCss and React</h1>
 
    </div>
  </div>

  );
}

export default App;
