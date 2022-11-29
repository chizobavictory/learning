import React, {} from 'react';
import './App.css';
import  DataProvider  from './useContext/context';
import StateTutorial from './useState/stateTutorial';
import {BrowserRouter as Router,  } from 'react-router-dom'

// import EffectTutorial from './useEffect/effectTutorials';

function App() {
 
   
        //  const [data, setData] = useState([])
        //  const getData = async() => {
        //   const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        //   setData(response.data)
        //   }

        //   useEffect(() => {
        //     getData()
        //   }, [])

  return (
   
    < DataProvider>
    <div>
    <StateTutorial />
    </div>

    </ DataProvider>
  )
}

export default App
