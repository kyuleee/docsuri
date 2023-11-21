// import { useState } from "react";
// import "./test.css";
// const Test = () => {
//   const [item, setItem] = useState(false);

//   return (
//     <>
//       <div onClick={() => setItem(!item)}>
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 690.33 203.66">
//           <defs></defs>
//           <title>Asset 1</title>
//           <g id="Layer_2" data-name="Layer 2">
//             <g id="Layer_1-2" data-name="Layer 1">
//               <linearGradient id="grad1" gradientUnits="userSpaceOnUse">
//                 <stop offset="5%" stopColor={item ? "red" : "blue"} />
//                 <stop offset="95%" stopColor={item ? "blue" : "red"} />
//               </linearGradient>
//               <path
//                 className="cls-1"
//                 d="M200.28,114.7H2.5V102.82H78.84l1.1-23.54H69.38a68,68,0,0,1-17.82-2.2,44.06,44.06,0,0,1-14-6.27A28.09,28.09,0,0,1,28.68,61a22.43,22.43,0,0,1-2.42-13l1.76-26H17.46V12.4H175.64v9.68H76L74,48.7q-.45,9.9,5.06,15a18.76,18.76,0,0,0,13.2,5.06h83.38V79.28h-48.4l-1.1,23.54h74.14ZM174.1,132.52l-2.42,46.42A17.59,17.59,0,0,1,169,187.3a25.79,25.79,0,0,1-6.49,7,35.23,35.23,0,0,1-9.24,4.95,32.59,32.59,0,0,1-11.11,1.87,26,26,0,0,1-12.54-2.86q-5.28-2.87-4.84-9.46L127,142.2H20.54v-9.68Z"
//               />
//               <path
//                 className="cls-1"
//                 d="M225.58,52.22Q225.58,41,232.4,35t17.38-6.05q10.56,0,17.49,6.05t6.93,17.27q0,10.78-6.93,17.38t-17.49,6.6q-10.56,0-17.38-6.6T225.58,52.22Zm0,83.6q0-11.22,6.82-17.27t17.38-6q10.56,0,17.49,6t6.93,17.27q0,10.78-6.93,17.38t-17.49,6.6q-10.56,0-17.38-6.6T225.58,135.82Z"
//               />
//               <path
//                 className="cls-1"
//                 d="M488.48,129H413l-2.2,49.94a17.59,17.59,0,0,1-2.64,8.36,25.79,25.79,0,0,1-6.49,7,35.23,35.23,0,0,1-9.24,4.95,32.59,32.59,0,0,1-11.11,1.87q-8.58,0-13.42-3.52t-4.4-10.12L365.94,129H290.7V117.12H488.48ZM346.58,20.1A45.72,45.72,0,0,1,367.37,9.43a117.8,117.8,0,0,1,27.39-3,32.86,32.86,0,0,1,9.79,2.31,28.58,28.58,0,0,1,7.7,4.62,22,22,0,0,1,5.06,6.27,15,15,0,0,1,1.87,7,41.84,41.84,0,0,1-2.53,14.41,51.1,51.1,0,0,1-7.37,13.31A161.73,161.73,0,0,1,442.83,59a276.41,276.41,0,0,1,30.25,9.46q2.19,11,.77,18t-4.73,11a15.89,15.89,0,0,1-7.81,5.28,17.31,17.31,0,0,1-8,.66Q441.4,92.92,428.53,81.81A182.61,182.61,0,0,0,401.8,62.56Q387.06,77.08,361.87,87.2t-57.75,14.3l-1.76-8.58a102,102,0,0,0,26.4-10.23,100.82,100.82,0,0,0,20.46-15,66.45,66.45,0,0,0,13.31-17.49,39.48,39.48,0,0,0,4.73-18,12.8,12.8,0,0,0-1.76-6.82,5.63,5.63,0,0,0-5.06-2.86,10.8,10.8,0,0,0-4.4.88,18.53,18.53,0,0,0-4.62,3.3Z"
//               />
//               <path
//                 className="cls-1"
//                 d="M626,12.62a110.27,110.27,0,0,0,18.48-1.87Q653,9.1,660.18,7.23t12.87-3.3a41.32,41.32,0,0,1,9.68-1.43c2.06,0,3.45.33,4.18,1a3.25,3.25,0,0,1,.88,3l-8.36,172.48a14.21,14.21,0,0,1-3.52,8.58,32.75,32.75,0,0,1-8.14,6.93,45.93,45.93,0,0,1-10.56,4.73,37.45,37.45,0,0,1-11,1.76q-15.39,0-14.74-12.32L634.33,129a163.09,163.09,0,0,1-20.46,13.09A171.16,171.16,0,0,1,592.2,152a151,151,0,0,1-21,6.27,86.48,86.48,0,0,1-18.26,2.2,102.2,102.2,0,0,1-20-1.76,33.85,33.85,0,0,1-14.74-6.49,27,27,0,0,1-8.69-12.87q-2.75-8.13-2.09-20.68l1.54-29.48h-9V79.5h69.74l2.64-45.76h-68V24.06H617l-3.74,65.12H553.59l-2,34.54q-.66,10.78,5.83,15.4t18.81,4.62a45.49,45.49,0,0,0,12.65-2.09,105.77,105.77,0,0,0,15-5.72,170.51,170.51,0,0,0,15.73-8.36,165.08,165.08,0,0,0,15.18-10.23l4-82.5q.45-8.79-3.19-11.77t-10-3Z"
//               />
//             </g>
//           </g>
//         </svg>
//       </div>
//     </>
//   );
// };

// export default Test;
