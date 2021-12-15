import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import BookStore from './store/BookStore';
import UserStore from './store/UserStore';
//import reportWebVitals from './reportWebVitals';
//import {env} from 'process'



export const Context =createContext(null)
console.log(process.env.REACT_APP_API_URL)

//console.log(process.env.REACT_APP_API_URL)

ReactDOM.render(
  
    <Context.Provider value={{
      user:new UserStore(),
      book: new BookStore()
    }}>
    <App />
    </Context.Provider>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

