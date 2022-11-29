import React,{ useContext} from 'react';
import {dataContext} from '../useContext/context'
import './stateTutorial.css'

////using function
const StateTutorial = () => {
const { toggle, handleChange, wait, state} = useContext(dataContext)
// const StateTutorial = () => {
//     const [state, setState] = useState(0)

//     const increase = ()=>{
//         setState(state +1)
//     }
//     const decrease = ()=>{
//        state>0 && setState(state -1)
//     }
//     const reset = ()=>{
//         setState(0)
//     }
//     // const decrease = ()=>{
//     //     if(state>0){
//     //     setState(state -1);
//     //     }
//     // }
  return (
    <div>
        {/* <div>
        <h1 className='head'>{counter}</h1>
        <button onClick={increase}>Increment+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrease}>Decrease-</button>
        </div> */}

        <div>
            {wait &&<input type = "text" placeholder="Enter your name" onChange={handleChange}/>}
            <h1 className="blackcolor">{state}</h1>
            <button onClick={toggle}>Register</button>
        </div>
    </div>

    
  )
}

// export default StateTutorial

//// using classes

// class StateTutorial extends Component{
//     constructor(){
//         super()
//         this.state={
//             counter:0
//         }
//     }

//     increase(){
//         this.setState({counter: this.state.counter + 1})

//     }

//     decrease(){
//         if (this.state.counter>0){
//         this.setState({counter: this.state.counter -1})
//     }
//     }
//     reset(){
//         this.setState({counter:0})
//     }

//     render(){
//         return(
//             <div>
//             <h1>{this.state.counter}</h1>
//             <button onClick={this.increase.bind(this)}>Increment+</button>
//             <button onClick={this.reset.bind(this)}>Reset</button>
//             <button onClick={this.decrease.bind(this)}>Decrease-</button>
            
//         </div>
//         )
//     }

// }

// const StateTutorial =() =>{
//     const [state, setState] = React.useState('')
    // const [wait, setWait] = React.useState(false)
    // const handleChange = (e) =>{
    //     setState(e.target.value)
    // }
    // const toggle=()=>{
    //     setWait(!wait);
    // }
    // return (
        // <div>
        //     {wait &&<input type = "text" placeholder="Enter your name" onChange={handleChange}/>}
        //     <h1 className="blackcolor">{state}</h1>
        //     <button onClick={toggle}>Register</button>
        // </div>
    // )

// }

// class StateTutorial extends Component{
//     constructor(){
//         super()
//         this.state={
//             name:'',
//             wait:false
//         }
//     }
//     handleChange=(e)=>{
//         this.setState({name:e.target.value})
//     }
//     toggle=()=>{
//         this.setState({wait:!this.state.wait})
//     }
//     render(){
//         return(
//             <div>
//                 {this.state.wait &&<input type = "text" placeholder="Enter your name" onChange={this.handleChange}/>}
//                 <h1 className="blackcolor">{this.state.name}</h1>
//                 <button onClick={this.toggle}>Register</button>
//             </div>
//         )
//     }

// }

export default StateTutorial