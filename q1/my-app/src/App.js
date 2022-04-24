import {useEffect , useState } from 'react';
import Country from './Components/Country';
import Navbar from './Components/Navbar';
import { ThemeContext } from './Components/ThemeContext';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import CountryCards from './Components/CountryCards';
import BodyBackgroundColor  from 'react-body-backgroundcolor';

function App() {

  //change Theme
  const [dark, setDark] = useState(false);

  //data from json file
  const [dataCountry , setdataCountry] = useState([])

  //toggle theme
  const toggleDark = (e, dark2) => {
    setDark(!dark2)
  }

  //get data from json file
  useEffect(() => {
    axios.get('/json/Countries.json')
    .then(res => setdataCountry(res.data))
  }, [])

  return (
    <ThemeContext.Provider value={{dark , toggleDark , dataCountry}}>
      <BodyBackgroundColor backgroundColor={dark ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'}>
        <div className={dark ?'light-app' : 'dark-app'}>
          <Routes>
            <Route path='/' element={<Navbar />}>
              <Route path='/listCountry' element={<Country />} />
              <Route path=':alphaCode' element={<CountryCards />}/>
            </Route>
          </Routes>
        </div>
      </BodyBackgroundColor>
    </ThemeContext.Provider>
  );
}

export default App;
