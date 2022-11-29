import  {createContext, useEffect, useState, setData} from "react";
import axios from 'axios';

export const dataContext = createContext();


const DataProvider = ({children}) => {
    
    
    const [state, setState] = useState([]);
    // const [counter , setCounter] = useState(0);

    /**counter */

    // const increase = ()=>{
    //     setCounter(counter +1)
    // }
    // const decrease = ()=>{
    //      counter>0 && setCounter(counter -1)
    // }
    // const reset = ()=>{
    //     setCounter(0)
    // }
    const [wait, setWait] = useState(false)
    const handleChange = (e) =>{
        setState(e.target.value)
    }
    const toggle=()=>{
        setWait(!wait);
    }
    /**Fetching data  */
    const getData = async() => {
     const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
     
     setData(response.data)
     
    }



     useEffect(() => {
       getData()
     }, [])

     return (
            <dataContext.Provider value={{ state, toggle, handleChange}}>
                {children}
            </dataContext.Provider>

     )
}

export default DataProvider;