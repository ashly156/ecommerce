import React from 'react';
import Navbar from "./Components/Navbar";
import Banner from './Components/Banner';
import WhatToDo from './Components/WhatToDo';
import Mission from './Components/Mission';
import Corprate from './Components/Corprate';
import Footer from './Components/Footer';

function App() {
	return (
		<React.Fragment>
			<Navbar/>
      <Banner />
      <WhatToDo/>
      <Mission/>
      <Corprate/>
      <Footer/>
		</React.Fragment>
	);
}

export default App;