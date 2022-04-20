import React from 'react'
import {Projects,Contact,Navbar,Skills,Welcome,About} from './sections'



function App() {
  return (
    <div className="App">
    
      <Navbar />
      <Welcome />
      <About />
      <Projects />
      <Skills />
      <Contact />
  
    </div>
  );
}

export default App;
