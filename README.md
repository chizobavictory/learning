## Why is React a library and angular is a framework?

React is a javascript library beacause it is lightweight. React is a library for building user interface. React came 2011 by a facebook developer Jordan.



framework is heavy



features of react

it uses virtue dom: alightweight representation of the dom (it's cheap, and light)

Angular uses the real dom (expensive,and heavy)

Angular is built on typescript (no room for javascript despite been a javascript framework)

it support server side rendering

it uses components and the component are reusable



## How to start a react project

npx  create-react-app react-class

or

yarn create-react-app react-class

cd into the newly created fiolder

JSs = Javascript xml which consist of both the html and the javascript



React works in component (component is a function that returns a jss)



## State and Props

What is state? State is an object that can change over time (they are mutable)

What is Props? Props are immutable i.e they can't be change.



## Hooks

This is what you do to manipulate or change a state in react

- useState: This is the most common used hook in react (easy to understand, use and manipulate)

- useReducer:

- useEffect: 2nd most used hook in react

- useRef:

- useContext



type rafce



The disadvantage of fragement in react is that you cannot style it



To render a component in react, you apply a forward slash to the name of the contennt having import it



onClick is the most common eventHandler in react




## How to get data from a user

We make use of onChange eventhandler



axios is a package used to



useEffect have array of dependencies



ensure to giver your data a key (keyword key) having an index



fake snapshot: The DOM inability to recognise a data, hence you should always give your data a key to avoid fake snapshot



Whatwill you use to control side effect

component did mount



passing data from parent to child is called "props". Prpos are immutable (you can't change the data inside it)



REACT INTERVIEW QUESTIONS

what is hook

whats is state

props

useState

sideeffect



Props Drilling: When you have multiple props in your application



contectAPI & Redox are used for state management to prevent props drilling



Always use useEffect anytime you're making an http request

createContext is used to create context provider



With context you can move any data in your app



to configure our route, we need react router dom to navigate between two pages been configured.

add it to your dependnecies yarn add react-router-dom