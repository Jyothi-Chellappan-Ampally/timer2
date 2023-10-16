import React from 'react';
//import { ReactDOM } from 'react';
//import { useState, useEffect } from 'react';
import Timer from './components/Timer2';


 
// var interval=0;
// const Timer = () => {
//   const [days, setDays] = useState(0);
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);

//   const deadline = "December, 31, 2023";

//   const getTime = () => {
//     const time = Date.parse(deadline) - Date.now();
// // eslint-disable-next-line
//     setDays(Math.floor(time / (1000 * 60 * 60 * 24)));

//     // eslint-disable-next-line
//     setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
//     // eslint-disable-next-line
//     setMinutes(Math.floor((time / 1000 / 60) % 60));
//     // eslint-disable-next-line
//     setSeconds(Math.floor((time / 1000) % 60));
//   };
// //console.log(days);console.log(hours);console.log(minutes);console.log(seconds);
// //console.log(getTime());
//   useEffect(() => {
//      interval = setInterval(() => getTime(deadline), 1000);

//     return () => clearInterval(interval);
//   }, []);

   const   App=()=>{
   
      return (
        
       <div className="timer">
   
          <Timer/>
    
     </div>
  
   )
     }
  
   
export default App;