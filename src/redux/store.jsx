import { configureStore  } from '@reduxjs/toolkit'
import loginSlice from './slice'

//1: store kai andr reducers, humne events store ko denge wo reducer se call krega
//2: wrap whole app in provider in main.jsx
export const store = configureStore({ 
   reducer: {
    isLoggedIn : loginSlice,
   
   
},

})