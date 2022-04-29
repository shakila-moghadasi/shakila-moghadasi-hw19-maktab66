import React from "react";
import { CssBaseline } from '@mui/material';
import Navbar from './Components/Navbar';
import TabPanel from './Components/TabPanel';


function App() {


  return (
    <div>
     <CssBaseline />
     <Navbar />
          <TabPanel/>
    </div>
  );
}

export default App;