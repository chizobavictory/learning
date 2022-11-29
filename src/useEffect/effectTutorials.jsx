
import React, {} from 'react';
import {useContext,} from 'react';
import {dataContext} from '../useContext/context';
// import Learning from '../HeroSection/childern';


// const EffectTutorial = () => {
//     const [data, setData] = useState([])
//     const getData = async() => {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
//         setData(response.data)
//     }
//     console.log(data)

//     useEffect(()=>{
//         getData()
//     }, [])
//     return (
//         <div>
       
//         {
//             data.map((elem, index) => (
//                 <div key={elem.id}>
//                 <li>{elem.title}</li>
//                 </div>
//             ))
//             }
//        </div>
        
    // )
// }

// class EffectTutorial extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: []
//         }
//     }

//     async getData ()  {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
//         this.setState({data: response.data})
//     }

//     componentDidMount() {
//         this.getData()
//     }

//     render() {
//         return (
//             <div>
//                 {
//                     this.state.data.map((elem, index) => (
//                         <div key={elem.id}>
//                         <li>{elem.title}</li>
//                         </div>
//                     ))
//                 }
//             </div>
//         )
//     }
// }

const EffectTutorial = () => {
    const {data} = useContext(dataContext)
    
    return(
        <div>

         {
            data.map((elem) => (
                <div key={elem.id}>
                <li>{elem.title}</li>
            </div>
            )) 

        }
        </div>  
    )
}
export default EffectTutorial;