// import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
// import axios from 'axios'

const App = () => {

  return (
    <div className="">
      <Navbar />
      <div className="w-full px-3 py-10" >
        <SearchBar />
      </div>
    
     
    </div>
  );
}

export default App;
